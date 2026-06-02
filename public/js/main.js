// main.js - Common scripts for the Smart Examination System

document.addEventListener('DOMContentLoaded', () => {
    // Theme Toggle
    const themeToggle = document.getElementById('theme-toggle');
    const prefersDarkScheme = window.matchMedia('(prefers-color-scheme: dark)');
    
    // Check for saved theme preference or use OS default
    const currentTheme = localStorage.getItem('theme') || (prefersDarkScheme.matches ? 'dark' : 'light');
    if (currentTheme === 'dark') {
        document.body.setAttribute('data-theme', 'dark');
        if (themeToggle) {
            themeToggle.innerHTML = '<i class="ph ph-sun"></i>';
        }
    }

    if (themeToggle) {
        themeToggle.addEventListener('click', () => {
            let theme = document.body.getAttribute('data-theme');
            if (theme === 'dark') {
                document.body.removeAttribute('data-theme');
                localStorage.setItem('theme', 'light');
                themeToggle.innerHTML = '<i class="ph ph-moon"></i>';
            } else {
                document.body.setAttribute('data-theme', 'dark');
                localStorage.setItem('theme', 'dark');
                themeToggle.innerHTML = '<i class="ph ph-sun"></i>';
            }
        });
    }

    // Sidebar Collapse
    const sidebarToggle = document.getElementById('sidebar-toggle');
    const sidebar = document.getElementById('sidebar');
    
    if (sidebarToggle && sidebar) {
        sidebarToggle.addEventListener('click', () => {
            sidebar.classList.toggle('collapsed');
        });
    }

    // Navbar Scroll Effect
    const navbar = document.querySelector('.navbar');
    if (navbar) {
        window.addEventListener('scroll', () => {
            if (window.scrollY > 50) {
                navbar.classList.add('scrolled');
            } else {
                navbar.classList.remove('scrolled');
            }
        });
    }
});

// Utility function to simulate loading
function simulateLoading(btnElement, defaultText, loadingText = 'Processing...', time = 1500) {
    const originalHtml = btnElement.innerHTML;
    btnElement.innerHTML = `<i class="ph-bold ph-spinner animate-spin"></i> ${loadingText}`;
    btnElement.disabled = true;
    
    return new Promise(resolve => {
        setTimeout(() => {
            btnElement.innerHTML = originalHtml;
            btnElement.disabled = false;
            resolve();
        }, time);
    });
}

// Toast Notification System
function showToast(message, type = 'success') {
    // Create toast container if it doesn't exist
    let toastContainer = document.getElementById('toast-container');
    if (!toastContainer) {
        toastContainer = document.createElement('div');
        toastContainer.id = 'toast-container';
        toastContainer.style.cssText = `
            position: fixed;
            bottom: 20px;
            right: 20px;
            z-index: 9999;
            display: flex;
            flex-direction: column;
            gap: 10px;
        `;
        document.body.appendChild(toastContainer);
    }

    // Create toast element
    const toast = document.createElement('div');
    const colors = {
        success: 'var(--success)',
        error: 'var(--danger)',
        info: 'var(--primary)',
        warning: 'var(--warning)'
    };
    const icons = {
        success: 'ph-check-circle',
        error: 'ph-x-circle',
        info: 'ph-info',
        warning: 'ph-warning'
    };

    toast.style.cssText = `
        background: var(--bg-card);
        color: var(--text-main);
        border-left: 4px solid ${colors[type]};
        padding: 1rem 1.5rem;
        border-radius: var(--radius-md);
        box-shadow: var(--shadow-lg);
        display: flex;
        align-items: center;
        gap: 10px;
        min-width: 250px;
        animation: slideInRight 0.3s ease forwards;
        border-top: 1px solid var(--border-color);
        border-right: 1px solid var(--border-color);
        border-bottom: 1px solid var(--border-color);
    `;

    toast.innerHTML = `
        <i class="ph-fill ${icons[type]}" style="color: ${colors[type]}; font-size: 1.25rem;"></i>
        <span style="font-weight: 500; font-size: 0.9rem;">${message}</span>
    `;

    toastContainer.appendChild(toast);

    // Remove toast after 3 seconds
    setTimeout(() => {
        toast.style.animation = 'fadeOut 0.3s ease forwards';
        setTimeout(() => toast.remove(), 300);
    }, 3000);
}

function computeStats(db) {
    return {
        totalStudents: db.users.filter(u => u.role === 'student').length,
        totalTeachers: db.users.filter(u => u.role === 'teacher').length,
        resultsPublished: db.results.filter(r => r.status === 'published').length,
        totalClasses: db.classes.length
    };
}

// Add animation keyframes if not already added
if (!document.getElementById('toast-styles')) {
    const style = document.createElement('style');
    style.id = 'toast-styles';
    style.innerHTML = `
        @keyframes slideInRight {
            from { transform: translateX(100%); opacity: 0; }
            to { transform: translateX(0); opacity: 1; }
        }
        @keyframes fadeOut {
            from { opacity: 1; }
            to { opacity: 0; }
        }
    `;
    document.head.appendChild(style);
}

const FAKE_DB_KEY = 'smartExamFakeDatabase';

function initFakeDatabase() {
    const stored = localStorage.getItem(FAKE_DB_KEY);
    const defaultDatabase = {
        users: [
            {
                role: 'student',
                login_id: '3400002312',
                password: 'student123',
                username: 'Ali Hassan',
                email: 'ali@fcet.edu.pk',
                program: 'BSCS',
                semester: 6,
                cgpa: 3.84,
                reference_id: '3400002312',
                student_id: 1
            },
            {
                role: 'student',
                login_id: '3400002313',
                password: 'student123',
                username: 'Sara Khan',
                email: 'sara@fcet.edu.pk',
                program: 'BSCS',
                semester: 6,
                cgpa: 3.45,
                reference_id: '3400002313',
                student_id: 2
            },
            {
                role: 'student',
                login_id: '3400002314',
                password: 'student123',
                username: 'Usman Tariq',
                email: 'usman@fcet.edu.pk',
                program: 'BSCS',
                semester: 6,
                cgpa: 2.98,
                reference_id: '3400002314',
                student_id: 3
            },
            {
                role: 'teacher',
                login_id: 'EMP-998',
                password: 'teacher123',
                username: 'Dr. Ahmed Raza',
                email: 'ahmed@fcet.edu.pk',
                faculty_type: 'permanent',
                reference_id: 'EMP-998',
                teacher_id: 1
            },
            {
                role: 'admin',
                login_id: 'admin@fcet.edu.pk',
                password: 'admin123',
                username: 'Super Admin',
                email: 'admin@fcet.edu.pk'
            }
        ],
        classes: [
            {
                subject_name: 'Web Engineering',
                subject_code: 'CS-301',
                program: 'BSCS',
                semester: 6,
                credit_hours: 3,
                teacher_id: 'EMP-998'
            },
            {
                subject_name: 'Software Project Management',
                subject_code: 'SE-402',
                program: 'BSSE',
                semester: 8,
                credit_hours: 3,
                teacher_id: 'EMP-998'
            },
            {
                subject_name: 'Artificial Intelligence',
                subject_code: 'CS-305',
                program: 'BSCS',
                semester: 6,
                credit_hours: 4,
                teacher_id: 'EMP-998'
            },
            {
                subject_name: 'Computer Networks',
                subject_code: 'CS-311',
                program: 'BSCS',
                semester: 6,
                credit_hours: 4,
                teacher_id: 'EMP-998'
            }
        ],
        notifications: [
            { id: 1, date: '2026-05-15', type: 'Exam', message: 'Final Term Datesheet uploaded for BSCS Semester 6.' },
            { id: 2, date: '2026-05-10', type: 'Result', message: 'Spring 2026 Mid Term Result is now available.' },
            { id: 3, date: '2026-05-05', type: 'Fee', message: 'Fee submission deadline extended to June 15, 2026.' },
            { id: 4, date: '2026-04-28', type: 'Admin', message: 'Gazette generated for Fall 2025 Final.' }
        ],
        results: [
            { student_id: '3400002312', roll_number: '3400002312', username: 'Ali Hassan', program: 'BSCS', semester: 6, cgpa: 3.84, status: 'published' },
            { student_id: '3400002313', roll_number: '3400002313', username: 'Sara Khan', program: 'BSCS', semester: 6, cgpa: 3.45, status: 'published' },
            { student_id: '3400002314', roll_number: '3400002314', username: 'Usman Tariq', program: 'BSCS', semester: 6, cgpa: 2.98, status: 'pending' }
        ],
        timetable: [
            { day: 'Monday', program: 'BS Cyber-Security 6th Semester Morning', time: '8:30 - 9:20', lab: '12:00 - 1:00', subject: 'Wireless and Mobile Security', room: 'BOT-B1-F-104' },
            { day: 'Monday', program: 'BS IT 8th (2.5) Semester Morning', time: '11:00 - 12:00', lab: '', subject: 'Virtual System and Services', room: 'CTB-B2-G-03' },
            { day: 'Monday', program: 'BS Cyber-Security 6th Semester Evening', time: '1:30 - 2:20', lab: '12:30 - 1:30', subject: 'Wireless and Mobile Security', room: 'BOT-B1-F-104' },
            { day: 'Monday', program: 'BS IT 7th Semester Evening (A)', time: '11:00 - 12:15', lab: '', subject: 'Virtual System and Services', room: 'Not Given' },
            { day: 'Tuesday', program: 'BS Cyber-Security 6th Semester Morning', time: '8:30 - 9:20', lab: '', subject: 'Wireless and Mobile Security', room: 'BOT-B1-F-104' },
            { day: 'Tuesday', program: 'BS IT 8th (2.5) Semester Morning (A)', time: '9:45 - 11:00', lab: '', subject: 'Virtual System and Services', room: 'CTB-B2-G-03' },
            { day: 'Tuesday', program: 'BS Cyber-Security 6th Semester Evening', time: '1:30 - 2:20', lab: '', subject: 'Wireless and Mobile Security', room: 'BOT-B1-F-104' },
            { day: 'Tuesday', program: 'BS Data Science 3rd Evening (A)', time: '1:30 - 2:45', lab: '', subject: 'Professional Practices', room: 'CLB-B1-G-Virtual Reality Lab' },
            { day: 'Wednesday', program: 'BS Cyber-Security 4th Semester Morning (B)', time: '10:00 - 11:00', lab: '', subject: 'Information Security', room: 'CLB-B1-G-Computing2 Lab' },
            { day: 'Wednesday', program: 'BS IT 8th (2.5) Semester Morning (A)', time: '8:30 - 9:45', lab: '', subject: 'Virtual System and Services', room: 'CTB-B2-G-03' },
            { day: 'Wednesday', program: 'BS IT 7th Semester Evening (A)', time: '12:15 - 1:30', lab: '', subject: 'Virtual System and Services', room: 'Not Given' },
            { day: 'Thursday', program: 'BS Software Engineering 4th Semester Morning (A)', time: '11:00 - 11:50', lab: '', subject: 'Professional Practices', room: 'CTB-B2-G-06' },
            { day: 'Thursday', program: 'BS Cyber-Security 4th Semester Morning (B)', time: '12:40 - 1:30', lab: '', subject: 'Information Security', room: 'CLB-B1-G-Computing2 Lab' },
            { day: 'Friday', program: 'BS Software Engineering 4th Semester Morning (A)', time: '11:00 - 11:50', lab: '', subject: 'Professional Practices', room: 'CTB-B2-G-06' },
            { day: 'Friday', program: 'BS Cyber-Security 4th Semester Morning (B)', time: '12:40 - 1:30', lab: '', subject: 'Information Security', room: 'CLB-B1-G-Computing2 Lab' }
        ],
        courseAllocation: [
            { course_code: 'IT-401', course_title: 'Virtual System and Services', credit_hours: '4 (3-1)', program: 'BSIT 7th' },
            { course_code: 'IT-403', course_title: 'Advance OOP with Java', credit_hours: '3 (3-0)', program: 'BSIT 7th' },
            { course_code: 'IT-405', course_title: 'Telecommunication Systems', credit_hours: '3 (3-0)', program: 'BSIT 7th' },
            { course_code: 'PK-407', course_title: 'Pakistan Studies', credit_hours: '2 (2-0)', program: 'BSIT 7th' }
        ],
        stats: {
            totalStudents: 0,
            totalTeachers: 0,
            resultsPublished: 0,
            totalClasses: 0
        }
    };

    if (stored) {
        try {
            const parsed = JSON.parse(stored);
            const db = { ...defaultDatabase, ...parsed };
            ['users', 'classes', 'notifications', 'results', 'timetable', 'courseAllocation'].forEach(key => {
                if (!Array.isArray(db[key])) db[key] = defaultDatabase[key];
            });
            db.stats = computeStats(db);
            saveFakeDatabase(db);
            return db;
        } catch {
            localStorage.removeItem(FAKE_DB_KEY);
        }
    }

    const db = defaultDatabase;
    db.stats = computeStats(db);
    localStorage.setItem(FAKE_DB_KEY, JSON.stringify(db));
    return db;
}

function saveFakeDatabase(db) {
    db.stats = computeStats(db);
    localStorage.setItem(FAKE_DB_KEY, JSON.stringify(db));
}

function decodeToken(token) {
    if (!token) return null;
    try {
        const decoded = atob(token);
        return JSON.parse(decoded);
    } catch {
        return null;
    }
}

function getCurrentUser(token) {
    const payload = decodeToken(token);
    if (!payload) return null;
    const db = initFakeDatabase();
    return db.users.find(u => u.role === payload.role && u.login_id === payload.login_id) || null;
}

function fakeResponse(responseData, status = 200) {
    return {
        ok: status >= 200 && status < 300,
        status,
        json: async () => responseData,
        text: async () => JSON.stringify(responseData)
    };
}

async function fakeFetch(endpoint, options = {}) {
    const db = initFakeDatabase();
    const url = new URL(endpoint, 'https://example.com');
    const path = url.pathname;
    const method = (options.method || 'GET').toUpperCase();
    const body = options.body ? JSON.parse(options.body) : null;
    const authToken = options.headers?.Authorization?.replace('Bearer ', '') || localStorage.getItem('token');
    const currentUser = getCurrentUser(authToken);

    await new Promise(resolve => setTimeout(resolve, 300));

    if (path === '/api/auth/login' && method === 'POST') {
        const { id, password, role } = body || {};
        let user;
        if (role === 'student') {
            user = db.users.find(u => u.role === 'student' && (u.login_id === id || u.email === id));
        } else if (role === 'teacher') {
            user = db.users.find(u => u.role === 'teacher' && (u.login_id === id || u.email === id));
        } else {
            user = db.users.find(u => u.role === 'admin' && (u.login_id === id || u.email === id || u.username === id));
        }

        if (!user || user.password !== password) {
            return fakeResponse({ error: 'Invalid credentials' }, 401);
        }

        const token = btoa(JSON.stringify({ login_id: user.login_id, role: user.role }));
        localStorage.setItem('token', token);
        localStorage.setItem('currentUser', JSON.stringify(user));

        return fakeResponse({ message: 'Login successful', token, user }, 200);
    }

    if (path === '/api/auth/register' && method === 'POST') {
        const { role, name, email, password, reference_id, program } = body || {};
        if (!role || !name || !email || !password || !reference_id) {
            return fakeResponse({ error: 'Missing registration fields' }, 400);
        }

        if (db.users.some(u => u.email === email || u.login_id === reference_id)) {
            return fakeResponse({ error: 'User already exists' }, 400);
        }

        const newUser = {
            role,
            login_id: reference_id,
            password,
            username: name,
            email,
            reference_id
        };

        if (role === 'student') {
            newUser.program = program || 'BSCS';
            newUser.semester = 1;
            newUser.cgpa = 0.0;
            newUser.student_id = db.users.length + 1;
        }

        if (role === 'teacher') {
            newUser.faculty_type = 'permanent';
            newUser.teacher_id = db.users.length + 1;
        }

        db.users.push(newUser);
        saveFakeDatabase(db);

        return fakeResponse({ message: 'Registration successful. Please sign in.' }, 201);
    }

    if (path === '/api/student/results' && method === 'GET') {
        if (!currentUser || currentUser.role !== 'student') {
            return fakeResponse({ error: 'Unauthorized' }, 401);
        }
        const results = db.results.filter(r => r.roll_number === currentUser.login_id);
        return fakeResponse(results, 200);
    }

    if (path === '/api/teacher/dashboard' && method === 'GET') {
        if (!currentUser || currentUser.role !== 'teacher') {
            return fakeResponse({ error: 'Unauthorized' }, 401);
        }
        const classes = db.classes.filter(c => c.teacher_id === currentUser.login_id);
        return fakeResponse({ teacher: currentUser, classes, timetable: db.timetable }, 200);
    }

    if (path === '/api/admin/details' && method === 'GET') {
        if (!currentUser || currentUser.role !== 'admin') {
            return fakeResponse({ error: 'Unauthorized' }, 401);
        }
        const students = db.users.filter(u => u.role === 'student');
        const teachers = db.users.filter(u => u.role === 'teacher');
        return fakeResponse({
            stats: computeStats(db),
            students,
            teachers,
            classes: db.classes,
            timetable: db.timetable,
            courseAllocation: db.courseAllocation,
            notifications: db.notifications,
            results: db.results
        }, 200);
    }

    if (path === '/api/admin/stats' && method === 'GET') {
        if (!currentUser || currentUser.role !== 'admin') {
            return fakeResponse({ error: 'Unauthorized' }, 401);
        }
        return fakeResponse(computeStats(db), 200);
    }

    if (!currentUser) {
        return fakeResponse({ error: 'Unauthorized' }, 401);
    }

    if (path === '/api/student/dashboard' && currentUser.role === 'student') {
        const student = {
            ...currentUser,
            user_name: currentUser.username,
            program: currentUser.program || 'BSCS',
            semester: currentUser.semester || 1,
            cgpa: currentUser.cgpa || 0.0
        };
        return fakeResponse({ student, notifications: db.notifications }, 200);
    }

    if (path === '/api/teacher/classes' && currentUser.role === 'teacher') {
        const classes = db.classes.filter(c => c.teacher_id === currentUser.login_id);
        return fakeResponse(classes, 200);
    }

    if (path === '/api/admin/stats' && currentUser.role === 'admin') {
        return fakeResponse(db.stats, 200);
    }

    if (path === '/api/public/search' && method === 'GET') {
        const roll = url.searchParams.get('roll_number');
        const student = db.results.find(r => r.roll_number === roll);
        if (!student) return fakeResponse({ error: 'Result not found' }, 404);
        return fakeResponse(student, 200);
    }

    return fakeResponse({ error: 'Endpoint not found' }, 404);
}

async function apiFetch(endpoint, options = {}) {
    // This app uses a browser-side fake backend for GitHub Pages / static hosting.
    // The Node backend in server.js is only used for local/server deployments.
    const noServer = true;

    if (noServer) {
        return fakeFetch(endpoint, options);
    }

    const token = localStorage.getItem('token');
    const headers = {
        'Content-Type': 'application/json',
        ...options.headers
    };
    if (token) headers['Authorization'] = `Bearer ${token}`;

    try {
        const res = await fetch(endpoint, { ...options, headers });
        if (res.status === 401 || res.status === 403) {
            localStorage.removeItem('token');
            window.location.href = 'login.html';
        }
        return res;
    } catch {
        return fakeFetch(endpoint, options);
    }
}


