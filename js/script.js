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

function getDatabase() {
    if (typeof CampusData !== 'undefined') {
        const db = CampusData;
        db.stats = computeStats(db);
        return db;
    }
    return { users: [], classes: [], notifications: [], results: [], timetable: [], courseAllocation: [], stats: {} };
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
    const db = getDatabase();
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

function getCoursesAndMarksForStudent(student, db) {
    const program = student.program || 'BSCS';
    const semester = student.semester || 6;
    let studentCourses = [];

    // Filter from data.js classes
    if (db.classes) {
        studentCourses = db.classes.filter(c => c.program.toLowerCase() === program.toLowerCase() && c.semester === semester);
    }

    // Default courses if empty
    if (studentCourses.length === 0) {
        if (program.toUpperCase() === 'BSCS') {
            studentCourses = [
                { subject_name: 'Web Engineering', subject_code: 'CS-301', credit_hours: 3 },
                { subject_name: 'Artificial Intelligence', subject_code: 'CS-305', credit_hours: 4 },
                { subject_name: 'Software Project Management', subject_code: 'SE-402', credit_hours: 3 },
                { subject_name: 'Computer Networks', subject_code: 'CS-311', credit_hours: 4 },
                { subject_name: 'Technical Writing & Presentation', subject_code: 'HU-201', credit_hours: 3 }
            ];
        } else if (program.toUpperCase().includes('CYBER') || program.toUpperCase() === 'BSCYS') {
            studentCourses = [
                { subject_name: 'Wireless and Mobile Security', subject_code: 'CYSE-421', credit_hours: 3 },
                { subject_name: 'Secure Software Design', subject_code: 'CYSE-422', credit_hours: 3 },
                { subject_name: 'HCI & Computer Graphics', subject_code: 'CYSE-423', credit_hours: 3 },
                { subject_name: 'Information Security', subject_code: 'CYSE-424', credit_hours: 3 },
                { subject_name: 'Professional Practices', subject_code: 'COSC-2116', credit_hours: 2 }
            ];
        } else if (program.toUpperCase() === 'BSIT') {
            studentCourses = [
                { subject_name: 'Virtual System and Services', subject_code: 'IT-401', credit_hours: 4 },
                { subject_name: 'Advance OOP with Java', subject_code: 'IT-403', credit_hours: 3 },
                { subject_name: 'Telecommunication Systems', subject_code: 'IT-405', credit_hours: 3 },
                { subject_name: 'Information Security', subject_code: 'IT-407', credit_hours: 3 },
                { subject_name: 'Entrepreneurship', subject_code: 'MG-409', credit_hours: 3 }
            ];
        } else {
            studentCourses = [
                { subject_name: 'Course 1', subject_code: 'SUB-101', credit_hours: 3 },
                { subject_name: 'Course 2', subject_code: 'SUB-102', credit_hours: 3 },
                { subject_name: 'Course 3', subject_code: 'SUB-103', credit_hours: 3 },
                { subject_name: 'Course 4', subject_code: 'SUB-104', credit_hours: 3 },
                { subject_name: 'Course 5', subject_code: 'SUB-105', credit_hours: 3 }
            ];
        }
    }

    // Generate deterministic marks based on roll number hash and SGPA
    const sgpa = student.sgpa || 3.0;
    const rollNum = student.roll_number || '3400002312';
    let hash = 0;
    for (let i = 0; i < rollNum.length; i++) {
        hash += rollNum.charCodeAt(i);
    }

    const totalCredits = studentCourses.reduce((sum, c) => sum + (c.credit_hours || 3), 0);
    const gpas = [];
    let remainingGPPoints = sgpa * totalCredits;

    for (let i = 0; i < studentCourses.length; i++) {
        const course = studentCourses[i];
        const credits = course.credit_hours || 3;
        let gpa;
        if (i === studentCourses.length - 1) {
            gpa = Math.min(4.0, Math.max(0.0, remainingGPPoints / credits));
        } else {
            const variation = (((hash + i) % 11) - 5) * 0.1;
            gpa = Math.min(4.0, Math.max(0.0, sgpa + variation));
            remainingGPPoints -= gpa * credits;
        }
        gpas.push(gpa);
    }

    return studentCourses.map((course, idx) => {
        const gpa = parseFloat(gpas[idx].toFixed(2));
        let grade = 'B';
        let obtainedMarks = 75;
        if (gpa >= 4.0) { grade = 'A+'; obtainedMarks = 90 + (hash % 10); }
        else if (gpa >= 3.8) { grade = 'A'; obtainedMarks = 85 + (hash % 5); }
        else if (gpa >= 3.5) { grade = 'B+'; obtainedMarks = 80 + (hash % 5); }
        else if (gpa >= 3.0) { grade = 'B'; obtainedMarks = 75 + (hash % 4); }
        else if (gpa >= 2.5) { grade = 'C+'; obtainedMarks = 70 + (hash % 4); }
        else if (gpa >= 2.0) { grade = 'C'; obtainedMarks = 60 + (hash % 10); }
        else if (gpa >= 1.0) { grade = 'D'; obtainedMarks = 50 + (hash % 10); }
        else { grade = 'F'; obtainedMarks = 40 + (hash % 10); }

        const mid = Math.round(obtainedMarks * 0.3);
        const final = obtainedMarks - mid;

        return {
            code: course.subject_code || course.course_code,
            name: course.subject_name || course.course_title,
            creditHours: course.credit_hours || 3,
            mid,
            final,
            obtained: obtainedMarks,
            grade,
            gpa
        };
    });
}

// Expose helper globally
window.getCoursesAndMarksForStudent = getCoursesAndMarksForStudent;

async function fakeFetch(endpoint, options = {}) {
    const db = getDatabase();
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
        }

        if (!user || user.password !== password) {
            return fakeResponse({ error: 'Invalid credentials' }, 401);
        }

        const token = btoa(JSON.stringify({ login_id: user.login_id, role: user.role }));
        localStorage.setItem('token', token);
        localStorage.setItem('currentUser', JSON.stringify(user));

        return fakeResponse({ message: 'Login successful', token, user }, 200);
    }

    if (path === '/api/student/results' && method === 'GET') {
        if (!currentUser || currentUser.role !== 'student') {
            return fakeResponse({ error: 'Unauthorized' }, 401);
        }
        const studentResult = db.results.find(r => r.roll_number === currentUser.login_id);
        if (!studentResult) return fakeResponse([], 200);
        const marks = getCoursesAndMarksForStudent(studentResult, db);
        return fakeResponse(marks, 200);
    }

    if (path === '/api/teacher/dashboard' && method === 'GET') {
        if (!currentUser || currentUser.role !== 'teacher') {
            return fakeResponse({ error: 'Unauthorized' }, 401);
        }
        // Find teacher courses
        const classes = db.classes.filter(c => c.teacher_id === currentUser.login_id);
        return fakeResponse({ teacher: currentUser, classes, timetable: db.timetable }, 200);
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
        const studentResult = db.results.find(r => r.roll_number === currentUser.login_id) || {};
        return fakeResponse({ student, studentResult, notifications: db.notifications }, 200);
    }

    if (path === '/api/teacher/classes' && currentUser.role === 'teacher') {
        const classes = db.classes.filter(c => c.teacher_id === currentUser.login_id);
        return fakeResponse(classes, 200);
    }

    if (path === '/api/public/search' && method === 'GET') {
        const roll = url.searchParams.get('roll_number');
        const studentResult = db.results.find(r => r.roll_number === roll);
        if (!studentResult) return fakeResponse({ error: 'Result not found' }, 404);
        
        // Add dynamic marks detail
        const marksDetail = getCoursesAndMarksForStudent(studentResult, db);
        return fakeResponse({ ...studentResult, username: studentResult.name, marks: marksDetail }, 200);
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


