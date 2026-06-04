// js/data.js
// ==========================================
// PASTE YOUR DATA BELOW
// ==========================================

const CampusData = {
    // 1. Users (Admin, Teachers, Students)
    users: [
        // Admin
        {
            role: 'admin',
            login_id: 'admin@fcet.edu.pk',
            password: 'admin123',
            username: 'Super Admin',
            email: 'admin@fcet.edu.pk'
        },
        // Teachers
        {
            role: 'teacher',
            login_id: 'EMP-001',
            password: 'teacher123',
            username: 'Dr. Zia Ur Rehman',
            email: 'zia.rehman@fcet.edu.pk',
            faculty_type: 'permanent',
            teacher_id: 1
        },
        {
            role: 'teacher',
            login_id: 'EMP-002',
            password: 'teacher123',
            username: 'Dr. Muhammad Rafiq',
            email: 'rafiq.m@fcet.edu.pk',
            faculty_type: 'permanent',
            teacher_id: 2
        },
        {
            role: 'teacher',
            login_id: 'EMP-003',
            password: 'teacher123',
            username: 'Dr. Hina Khalid',
            email: 'hina.khalid@fcet.edu.pk',
            faculty_type: 'permanent',
            teacher_id: 3
        },
        // Students
        {
            role: 'student',
            login_id: '3400002312',
            password: 'student123',
            username: 'Muhammad Hassan',
            email: 'hassan.m@fcet.edu.pk',
            program: 'BSCS',
            semester: 6,
            cgpa: 3.84,
            student_id: 1
        },
        {
            role: 'student',
            login_id: '3400002313',
            password: 'student123',
            username: 'Fatima Khan',
            email: 'fatima.k@fcet.edu.pk',
            program: 'BSCS',
            semester: 6,
            cgpa: 3.92,
            student_id: 2
        },
        {
            role: 'student',
            login_id: '3400002314',
            password: 'student123',
            username: 'Usman Ali',
            email: 'usman.ali@fcet.edu.pk',
            program: 'BSCS',
            semester: 6,
            cgpa: 3.56,
            student_id: 3
        },
        {
            role: 'student',
            login_id: '3400002315',
            password: 'student123',
            username: 'Ayesha Malik',
            email: 'ayesha.m@fcet.edu.pk',
            program: 'BSIT',
            semester: 6,
            cgpa: 3.78,
            student_id: 4
        },
        {
            role: 'student',
            login_id: '3400002316',
            password: 'student123',
            username: 'Ali Raza',
            email: 'ali.raza@fcet.edu.pk',
            program: 'BSSE',
            semester: 4,
            cgpa: 3.45,
            student_id: 5
        }
    ],

    // 2. Classes / Subjects
    classes: [
        { subject_name: 'Virtual System and Services', subject_code: 'IT-401', program: 'BSIT', semester: 7, credit_hours: 4, teacher_id: 'EMP-001' },
        { subject_name: 'Advance OOP with Java', subject_code: 'IT-403', program: 'BSIT', semester: 7, credit_hours: 3, teacher_id: 'EMP-002' },
        { subject_name: 'Telecommunication Systems', subject_code: 'IT-405', program: 'BSIT', semester: 7, credit_hours: 3, teacher_id: 'EMP-003' },
        { subject_name: 'Web Technologies', subject_code: 'IT-302', program: 'BSIT', semester: 6, credit_hours: 3, teacher_id: 'EMP-001' },
        { subject_name: 'Enterprise Systems', subject_code: 'IT-304', program: 'BSIT', semester: 6, credit_hours: 3, teacher_id: 'EMP-002' },
        { subject_name: 'Fundamentals of Data Mining', subject_code: 'IT-306', program: 'BSIT', semester: 6, credit_hours: 3, teacher_id: 'EMP-003' },
        { subject_name: 'Programming Fundamentals', subject_code: 'COSC-1102', program: 'BSIT', semester: 1, credit_hours: 4, teacher_id: 'EMP-001' },
        { subject_name: 'Data Structures', subject_code: 'COSC-2106', program: 'BSIT', semester: 3, credit_hours: 4, teacher_id: 'EMP-002' },
        { subject_name: 'Software Engineering', subject_code: 'COSC-2110', program: 'BSIT', semester: 3, credit_hours: 3, teacher_id: 'EMP-003' },
        { subject_name: 'Database Systems', subject_code: 'COSC-1104', program: 'BSIT', semester: 2, credit_hours: 4, teacher_id: 'EMP-001' }
    ],

    // 3. Notifications
    notifications: [
        { id: 1, date: '2026-05-15', type: 'Exam', message: 'Final Term Datesheet uploaded for BSCS Semester 6.' },
        { id: 2, date: '2026-05-10', type: 'Result', message: 'Spring 2026 Mid Term Result is now available.' },
        { id: 3, date: '2026-05-05', type: 'Fee', message: 'Fee submission deadline extended to June 15, 2026.' },
        { id: 4, date: '2026-04-28', type: 'Admin', message: 'Gazette generated for Fall 2025 Final.' }
    ],

    // 4. Student Results
    results: [
        { student_id: '3400002312', roll_number: '3400002312', username: 'Muhammad Hassan', program: 'BSCS', semester: 6, cgpa: 3.84, status: 'published' },
        { student_id: '3400002313', roll_number: '3400002313', username: 'Fatima Khan', program: 'BSCS', semester: 6, cgpa: 3.92, status: 'published' },
        { student_id: '3400002314', roll_number: '3400002314', username: 'Usman Ali', program: 'BSCS', semester: 6, cgpa: 3.56, status: 'published' },
        { student_id: '3400002315', roll_number: '3400002315', username: 'Ayesha Malik', program: 'BSIT', semester: 6, cgpa: 3.78, status: 'published' },
        { student_id: '3400002316', roll_number: '3400002316', username: 'Ali Raza', program: 'BSSE', semester: 4, cgpa: 3.45, status: 'pending' }
    ],

    // 5. Timetable
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

    // 6. Course Allocation
    courseAllocation: [
        { course_code: 'IT-401', course_title: 'Virtual System and Services', credit_hours: '4 (3-1)', program: 'BSIT 7th' },
        { course_code: 'IT-403', course_title: 'Advance OOP with Java', credit_hours: '3 (3-0)', program: 'BSIT 7th' },
        { course_code: 'IT-405', course_title: 'Telecommunication Systems', credit_hours: '3 (3-0)', program: 'BSIT 7th' },
        { course_code: 'PK-407', course_title: 'Pakistan Studies', credit_hours: '2 (2-0)', program: 'BSIT 7th' }
    ]
};
