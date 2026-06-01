const sqlite3 = require('sqlite3').verbose();
const path = require('path');
const bcrypt = require('bcryptjs');

const dbPath = path.resolve(__dirname, 'database.db');

const db = new sqlite3.Database(dbPath, (err) => {
    if (err) {
        console.error('Error connecting to the database:', err.message);
    } else {
        console.log('Connected to the SQLite database.');
        initializeDatabase();
    }
});

function initializeDatabase() {
    db.serialize(() => {
        // Users Table
        db.run(`CREATE TABLE IF NOT EXISTS users (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            username TEXT UNIQUE NOT NULL,
            email TEXT UNIQUE NOT NULL,
            password TEXT NOT NULL,
            role TEXT CHECK(role IN ('student', 'teacher', 'admin')) NOT NULL
        )`);

        // Students Table
        db.run(`CREATE TABLE IF NOT EXISTS students (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            user_id INTEGER UNIQUE NOT NULL,
            roll_number TEXT UNIQUE NOT NULL,
            program TEXT NOT NULL,
            semester INTEGER NOT NULL,
            cgpa REAL DEFAULT 0.0,
            FOREIGN KEY(user_id) REFERENCES users(id)
        )`);

        // Teachers Table
        db.run(`CREATE TABLE IF NOT EXISTS teachers (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            user_id INTEGER UNIQUE NOT NULL,
            employee_id TEXT UNIQUE NOT NULL,
            faculty_type TEXT NOT NULL,
            FOREIGN KEY(user_id) REFERENCES users(id)
        )`);

        // Classes Table
        db.run(`CREATE TABLE IF NOT EXISTS classes (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            subject_name TEXT NOT NULL,
            subject_code TEXT NOT NULL,
            program TEXT NOT NULL,
            semester INTEGER NOT NULL,
            credit_hours INTEGER NOT NULL,
            teacher_id INTEGER,
            FOREIGN KEY(teacher_id) REFERENCES teachers(id)
        )`);

        // Exams Table
        db.run(`CREATE TABLE IF NOT EXISTS exams (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            exam_name TEXT NOT NULL,
            session TEXT NOT NULL,
            status TEXT DEFAULT 'pending'
        )`);

        // Results Table
        db.run(`CREATE TABLE IF NOT EXISTS results (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            student_id INTEGER NOT NULL,
            class_id INTEGER NOT NULL,
            exam_id INTEGER NOT NULL,
            marks_obtained INTEGER NOT NULL,
            status TEXT DEFAULT 'pending',
            FOREIGN KEY(student_id) REFERENCES students(id),
            FOREIGN KEY(class_id) REFERENCES classes(id),
            FOREIGN KEY(exam_id) REFERENCES exams(id)
        )`);

        // Notifications Table
        db.run(`CREATE TABLE IF NOT EXISTS notifications (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            date TEXT NOT NULL,
            type TEXT NOT NULL,
            message TEXT NOT NULL,
            target_role TEXT
        )`);

        seedDatabase();
    });
}

function seedDatabase() {
    // Check if admin exists
    db.get(`SELECT * FROM users WHERE role = 'admin'`, async (err, row) => {
        if (!row) {
            console.log('Seeding initial database data...');
            const salt = await bcrypt.genSalt(10);
            const passwordHash = await bcrypt.hash('admin123', salt);
            
            // Admin
            db.run(`INSERT INTO users (username, email, password, role) VALUES (?, ?, ?, ?)`,
                ['Super Admin', 'admin@fcet.edu.pk', passwordHash, 'admin']
            );

            // Teacher
            const teacherPassword = await bcrypt.hash('teacher123', salt);
            db.run(`INSERT INTO users (username, email, password, role) VALUES (?, ?, ?, ?)`,
                ['Dr. Ahmed Raza', 'ahmed@fcet.edu.pk', teacherPassword, 'teacher'],
                function(err) {
                    if(!err) {
                        db.run(`INSERT INTO teachers (user_id, employee_id, faculty_type) VALUES (?, ?, ?)`,
                            [this.lastID, 'EMP-998', 'permanent'],
                            function(err) {
                                if(!err) {
                                    const teacherId = this.lastID;
                                    // Assign classes
                                    db.run(`INSERT INTO classes (subject_name, subject_code, program, semester, credit_hours, teacher_id) VALUES (?, ?, ?, ?, ?, ?)`,
                                        ['Web Engineering', 'CS-301', 'BSCS', 6, 3, teacherId]);
                                    db.run(`INSERT INTO classes (subject_name, subject_code, program, semester, credit_hours, teacher_id) VALUES (?, ?, ?, ?, ?, ?)`,
                                        ['Software Project Management', 'SE-402', 'BSSE', 8, 3, teacherId]);
                                }
                            }
                        );
                    }
                }
            );

            // Student
            const studentPassword = await bcrypt.hash('student123', salt);
            db.run(`INSERT INTO users (username, email, password, role) VALUES (?, ?, ?, ?)`,
                ['Ali Hassan', 'ali@fcet.edu.pk', studentPassword, 'student'],
                function(err) {
                    if(!err) {
                        db.run(`INSERT INTO students (user_id, roll_number, program, semester, cgpa) VALUES (?, ?, ?, ?, ?)`,
                            [this.lastID, '3400002312', 'BSCS', 6, 3.84]);
                    }
                }
            );

            // Exams
            db.run(`INSERT INTO exams (exam_name, session, status) VALUES (?, ?, ?)`, ['Spring 2026 Mid', 'Spring 2026', 'published']);
            db.run(`INSERT INTO exams (exam_name, session, status) VALUES (?, ?, ?)`, ['Spring 2026 Final', 'Spring 2026', 'pending']);

            // Notifications
            db.run(`INSERT INTO notifications (date, type, message, target_role) VALUES (?, ?, ?, ?)`, ['2026-05-15', 'Exam', 'Final Term Datesheet uploaded for BSCS Semester 6.', 'all']);
        }
    });
}

module.exports = db;
