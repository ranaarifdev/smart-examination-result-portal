const express = require('express');
const cors = require('cors');
const path = require('path');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const cookieParser = require('cookie-parser');
const db = require('./db');

const app = express();
const PORT = process.env.PORT || 3000;
const JWT_SECRET = 'fcet_secret_key_2026';

// Middleware
app.use(cors({
    origin: true,          // reflect the request origin (allows all origins)
    credentials: true      // allow cookies to be sent cross-origin
}));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());

// Static Files - We serve the 'public' directory
app.use(express.static(path.join(__dirname, 'public')));

// Authentication Middleware
const authenticateToken = (req, res, next) => {
    const token = req.cookies.token || req.headers['authorization']?.split(' ')[1];
    
    if (!token) return res.status(401).json({ error: 'Access denied' });

    jwt.verify(token, JWT_SECRET, (err, user) => {
        if (err) return res.status(403).json({ error: 'Invalid token' });
        req.user = user;
        next();
    });
};

// API ROUTES

// 1. Auth: Login
app.post('/api/auth/login', (req, res) => {
    const { id, password, role } = req.body;

    // We use 'email' for student/teacher/admin or roll_number/employee_id depending on how it's sent.
    // For simplicity, let's search by username, email, or linked IDs.
    
    let query = '';
    let params = [];

    if (role === 'student') {
        query = `SELECT u.*, s.roll_number, s.id as student_id FROM users u 
                 JOIN students s ON u.id = s.user_id 
                 WHERE (u.email = ? OR s.roll_number = ?) AND u.role = 'student'`;
        params = [id, id];
    } else if (role === 'teacher') {
        query = `SELECT u.*, t.employee_id, t.id as teacher_id FROM users u 
                 JOIN teachers t ON u.id = t.user_id 
                 WHERE (u.email = ? OR t.employee_id = ?) AND u.role = 'teacher'`;
        params = [id, id];
    } else {
        query = `SELECT * FROM users WHERE (email = ? OR username = ?) AND role = 'admin'`;
        params = [id, id];
    }

    db.get(query, params, async (err, user) => {
        if (err) return res.status(500).json({ error: err.message });
        if (!user) return res.status(400).json({ error: 'User not found' });

        const validPassword = await bcrypt.compare(password, user.password);
        if (!validPassword) return res.status(400).json({ error: 'Invalid password' });

        const tokenPayload = {
            id: user.id,
            role: user.role,
            username: user.username,
            email: user.email,
            reference_id: user.student_id || user.teacher_id || null
        };

        const token = jwt.sign(tokenPayload, JWT_SECRET, { expiresIn: '24h' });
        
        res.cookie('token', token, { httpOnly: true });
        res.json({ message: 'Logged in successfully', token, user: tokenPayload });
    });
});

// 2. Auth: Register
app.post('/api/auth/register', async (req, res) => {
    const { role, name, email, password, reference_id, program } = req.body;
    // reference_id = roll_number or cnic/employee_id

    try {
        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(password, salt);

        db.run(`INSERT INTO users (username, email, password, role) VALUES (?, ?, ?, ?)`,
            [name, email, hashedPassword, role],
            function(err) {
                if (err) return res.status(400).json({ error: 'Email already exists or invalid data' });
                
                const userId = this.lastID;

                if (role === 'student') {
                    db.run(`INSERT INTO students (user_id, roll_number, program, semester, cgpa) VALUES (?, ?, ?, 1, 0.0)`,
                        [userId, reference_id, program],
                        (insertErr) => {
                            if (insertErr) console.error('Student insert error:', insertErr.message);
                        }
                    );
                } else if (role === 'teacher') {
                    db.run(`INSERT INTO teachers (user_id, employee_id, faculty_type) VALUES (?, ?, 'permanent')`,
                        [userId, reference_id],
                        (insertErr) => {
                            if (insertErr) console.error('Teacher insert error:', insertErr.message);
                        }
                    );
                }

                res.json({ message: 'Registration successful. Please verify your email.' });
            }
        );
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

// 3. User Context / Profile
app.get('/api/user/me', authenticateToken, (req, res) => {
    res.json(req.user);
});

// 4. Student Data
app.get('/api/student/dashboard', authenticateToken, (req, res) => {
    if (req.user.role !== 'student') return res.status(403).json({ error: 'Unauthorized' });

    db.get(`SELECT s.*, u.username as user_name FROM students s JOIN users u ON s.user_id = u.id WHERE s.user_id = ?`, [req.user.id], (err, student) => {
        if (err || !student) return res.status(404).json({ error: 'Student profile not found' });

        db.all(`SELECT * FROM notifications ORDER BY date DESC LIMIT 3`, [], (err, notifications) => {
            res.json({ student, notifications });
        });
    });
});

app.get('/api/student/results', authenticateToken, (req, res) => {
    if (req.user.role !== 'student') return res.status(403).json({ error: 'Unauthorized' });

    const query = `
        SELECT r.marks_obtained, c.subject_name, c.subject_code, c.credit_hours, e.exam_name 
        FROM results r
        JOIN classes c ON r.class_id = c.id
        JOIN exams e ON r.exam_id = e.id
        WHERE r.student_id = ? AND r.status = 'published'
    `;

    db.all(query, [req.user.reference_id], (err, results) => {
        if (err) return res.status(500).json({ error: err.message });
        res.json(results);
    });
});

// 5. Teacher Data
app.get('/api/teacher/classes', authenticateToken, (req, res) => {
    if (req.user.role !== 'teacher') return res.status(403).json({ error: 'Unauthorized' });

    db.all(`SELECT * FROM classes WHERE teacher_id = ?`, [req.user.reference_id], (err, classes) => {
        if (err) return res.status(500).json({ error: err.message });
        res.json(classes);
    });
});

// 6. Admin Stats
app.get('/api/admin/stats', authenticateToken, (req, res) => {
    if (req.user.role !== 'admin') return res.status(403).json({ error: 'Unauthorized' });

    const stats = {};
    db.get(`SELECT COUNT(*) as count FROM students`, (err1, row1) => {
        if (err1) return res.status(500).json({ error: err1.message });
        stats.totalStudents = row1 ? row1.count : 0;

        db.get(`SELECT COUNT(*) as count FROM teachers`, (err2, row2) => {
            if (err2) return res.status(500).json({ error: err2.message });
            stats.totalTeachers = row2 ? row2.count : 0;

            db.get(`SELECT COUNT(*) as count FROM results WHERE status = 'published'`, (err3, row3) => {
                if (err3) return res.status(500).json({ error: err3.message });
                stats.resultsPublished = row3 ? row3.count : 0;
                res.json(stats);
            });
        });
    });
});

// 7. Public Search Result
app.get('/api/public/search', (req, res) => {
    const { roll_number } = req.query;
    db.get(`SELECT s.program, s.semester, s.cgpa, u.username FROM students s JOIN users u ON s.user_id = u.id WHERE s.roll_number = ?`, [roll_number], (err, student) => {
        if (err) return res.status(500).json({ error: err.message });
        if (!student) return res.status(404).json({ error: 'Result not found' });
        res.json(student);
    });
});

// Removed catch-all route

// Start server
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
