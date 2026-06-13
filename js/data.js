// js/data.js
// ==========================================
// COMPLETE INTEGRATED DATA FROM ALL FILES
// ==========================================

const CampusData = {
    // ==========================================
    // 1. USERS (Admin, Teachers, Students)
    // ==========================================
    users: [
        // ==========================================
        // PERMANENT FACULTY (From Faculty Contact.pdf & Faculty information.xlsx)
        // ==========================================
        // Assistant Professors
        {
            role: 'teacher',
            login_id: 'EMP-001',
            password: 'teacher123',
            username: 'Dr. Sohail Raza',
            email: 'sohail.raza@fcet.edu.pk',
            faculty_type: 'permanent',
            designation: 'Assistant Professor',
            contact: '3007602222',
            teacher_id: 1
        },
        {
            role: 'teacher',
            login_id: 'EMP-002',
            password: 'teacher123',
            username: 'Dr. Zahid Hussain Qaisar',
            email: 'zahid.hussain@fcet.edu.pk',
            faculty_type: 'permanent',
            designation: 'Assistant Professor',
            contact: '3455437652',
            teacher_id: 2
        },
        {
            role: 'teacher',
            login_id: 'EMP-003',
            password: 'teacher123',
            username: 'Dr. Wasif Akbar',
            email: 'wasif.akbar@fcet.edu.pk',
            faculty_type: 'permanent',
            designation: 'Assistant Professor',
            contact: '3116156216',
            teacher_id: 3
        },
        {
            role: 'teacher',
            login_id: 'EMP-004',
            password: 'teacher123',
            username: 'Dr. Muhammad Naveed Yasir',
            email: 'naveed.yasir@fcet.edu.pk',
            faculty_type: 'permanent',
            designation: 'Assistant Professor',
            contact: '3008100533',
            teacher_id: 4
        },
        {
            role: 'teacher',
            login_id: 'EMP-005',
            password: 'teacher123',
            username: 'Dr. Inam Illahi',
            email: 'inam.illahi@fcet.edu.pk',
            faculty_type: 'permanent',
            designation: 'Assistant Professor',
            contact: '3006331057',
            teacher_id: 5
        },
        {
            role: 'teacher',
            login_id: 'EMP-006',
            password: 'teacher123',
            username: 'Dr. Shahzad Sarwar Bhatti',
            email: 'shahzad.bhatti@fcet.edu.pk',
            faculty_type: 'permanent',
            designation: 'Assistant Professor',
            contact: '3006335397',
            teacher_id: 6
        },
        {
            role: 'teacher',
            login_id: 'EMP-007',
            password: 'teacher123',
            username: 'Dr. Rubia Fatima',
            email: 'rubia.fatima@fcet.edu.pk',
            faculty_type: 'permanent',
            designation: 'Assistant Professor',
            contact: '',
            teacher_id: 7
        },
        {
            role: 'teacher',
            login_id: 'EMP-008',
            password: 'teacher123',
            username: 'Dr. Samina Naz',
            email: 'samina.naz@fcet.edu.pk',
            faculty_type: 'permanent',
            designation: 'Assistant Professor',
            contact: '3326220301',
            teacher_id: 8
        },
        {
            role: 'teacher',
            login_id: 'EMP-009',
            password: 'teacher123',
            username: 'Dr. Beenish Raza',
            email: 'beenish.raza@fcet.edu.pk',
            faculty_type: 'permanent',
            designation: 'Assistant Professor',
            contact: '',
            teacher_id: 9
        },
        {
            role: 'teacher',
            login_id: 'EMP-010',
            password: 'teacher123',
            username: 'Dr. Hira Nazir',
            email: 'hira.nazir@fcet.edu.pk',
            faculty_type: 'permanent',
            designation: 'Assistant Professor',
            contact: '3017747874',
            teacher_id: 10
        },
        // Lecturers
        {
            role: 'teacher',
            login_id: 'EMP-011',
            password: 'teacher123',
            username: 'Mr. Rana Saleem',
            email: 'rana.saleem@fcet.edu.pk',
            faculty_type: 'permanent',
            designation: 'Lecturer',
            contact: '3002021340',
            teacher_id: 11
        },
        {
            role: 'teacher',
            login_id: 'EMP-012',
            password: 'teacher123',
            username: 'Mr. Jasim Shah',
            email: 'jasim.shah@fcet.edu.pk',
            faculty_type: 'permanent',
            designation: 'Lecturer',
            contact: '',
            teacher_id: 12
        },
        {
            role: 'teacher',
            login_id: 'EMP-013',
            password: 'teacher123',
            username: 'Dr. Zia Ur Rehman',
            email: 'zia.rehman@fcet.edu.pk',
            faculty_type: 'permanent',
            designation: 'Lecturer',
            contact: '03346059876',
            teacher_id: 13
        },
        {
            role: 'teacher',
            login_id: 'EMP-014',
            password: 'teacher123',
            username: 'Mr. M. Arslan',
            email: 'm.arslan@fcet.edu.pk',
            faculty_type: 'permanent',
            designation: 'Lecturer',
            contact: '',
            teacher_id: 14
        },
        {
            role: 'teacher',
            login_id: 'EMP-015',
            password: 'teacher123',
            username: 'Mr. M. Manshah',
            email: 'm.manshah@fcet.edu.pk',
            faculty_type: 'permanent',
            designation: 'Lecturer',
            contact: '3003829395',
            teacher_id: 15
        },
        {
            role: 'teacher',
            login_id: 'EMP-016',
            password: 'teacher123',
            username: 'Ms. Afshan Almas',
            email: 'afshan.almas@fcet.edu.pk',
            faculty_type: 'permanent',
            designation: 'Lecturer',
            contact: '',
            teacher_id: 16
        },
        {
            role: 'teacher',
            login_id: 'EMP-017',
            password: 'teacher123',
            username: 'Ms. Sadia Ramzan',
            email: 'sadia.ramzan@fcet.edu.pk',
            faculty_type: 'permanent',
            designation: 'Lecturer',
            contact: '',
            teacher_id: 17
        },
        {
            role: 'teacher',
            login_id: 'EMP-018',
            password: 'teacher123',
            username: 'Mr. Mirza Murad Baig',
            email: 'mirza.baig@fcet.edu.pk',
            faculty_type: 'permanent',
            designation: 'Lecturer',
            contact: '',
            teacher_id: 18
        },
        {
            role: 'teacher',
            login_id: 'EMP-019',
            password: 'teacher123',
            username: 'Mr. Kamran Abid',
            email: 'kamran.abid@fcet.edu.pk',
            faculty_type: 'permanent',
            designation: 'Lecturer',
            contact: '03126156509',
            teacher_id: 19
        },
        {
            role: 'teacher',
            login_id: 'EMP-020',
            password: 'teacher123',
            username: 'Ms. Iqra Iqbal Khan',
            email: 'iqra.khan@fcet.edu.pk',
            faculty_type: 'permanent',
            designation: 'Lecturer',
            contact: '',
            teacher_id: 20
        },
        {
            role: 'teacher',
            login_id: 'EMP-021',
            password: 'teacher123',
            username: 'Mr. Zahid Aziz',
            email: 'zahid.aziz@fcet.edu.pk',
            faculty_type: 'permanent',
            designation: 'Lecturer',
            contact: '',
            teacher_id: 21
        },
        {
            role: 'teacher',
            login_id: 'EMP-022',
            password: 'teacher123',
            username: 'Ms. Sana Tariq',
            email: 'sana.tariq@fcet.edu.pk',
            faculty_type: 'permanent',
            designation: 'Lecturer',
            contact: '',
            teacher_id: 22
        },
        {
            role: 'teacher',
            login_id: 'EMP-023',
            password: 'teacher123',
            username: 'Mr. Syed M. Waqas Shah',
            email: 'waqas.shah@fcet.edu.pk',
            faculty_type: 'permanent',
            designation: 'Lecturer',
            contact: '',
            teacher_id: 23
        },
        // ==========================================
        // VISITING FACULTY
        // ==========================================
        {
            role: 'teacher',
            login_id: 'VIS-001',
            password: 'teacher123',
            username: 'Ms. Farzeen Khan',
            email: 'farzeen.khan@fcet.edu.pk',
            faculty_type: 'visiting',
            designation: 'Visiting Faculty',
            contact: '03106022280',
            teacher_id: 24
        },
        {
            role: 'teacher',
            login_id: 'VIS-002',
            password: 'teacher123',
            username: 'Mr. Syed Zain Ul Abadin',
            email: 'zain.abadin@fcet.edu.pk',
            faculty_type: 'visiting',
            designation: 'Visiting Faculty',
            contact: '03137611669',
            teacher_id: 25
        },
        {
            role: 'teacher',
            login_id: 'VIS-003',
            password: 'teacher123',
            username: 'Ms. Rozina Riaz',
            email: 'rozina.riaz@fcet.edu.pk',
            faculty_type: 'visiting',
            designation: 'Visiting Faculty',
            contact: '03040077855',
            teacher_id: 26
        },
        // ==========================================
        // STUDENTS - BSCS, BSIT, BSSE (From CREDENTIALS.md)
        // ==========================================
        {
            role: 'student',
            login_id: '3400002312',
            password: 'student123',
            username: 'Muhammad Hassan',
            name: 'Muhammad Hassan',
            father_name: 'Muhammad Saleem',
            email: 'hassan.m@fcet.edu.pk',
            cnic: '32304-1111111-1',
            program: 'BSCS',
            semester: 6,
            shift: 'Morning',
            cgpa: 3.84,
            student_id: 101
        },
        {
            role: 'student',
            login_id: '3400002313',
            password: 'student123',
            username: 'Fatima Khan',
            name: 'Fatima Khan',
            father_name: 'Arshad Khan',
            email: 'fatima.k@fcet.edu.pk',
            cnic: '32304-2222222-2',
            program: 'BSCS',
            semester: 6,
            shift: 'Morning',
            cgpa: 3.65,
            student_id: 102
        },
        {
            role: 'student',
            login_id: '3400002314',
            password: 'student123',
            username: 'Usman Ali',
            name: 'Usman Ali',
            father_name: 'Liaqat Ali',
            email: 'usman.ali@fcet.edu.pk',
            cnic: '32304-3333333-3',
            program: 'BSCS',
            semester: 6,
            shift: 'Morning',
            cgpa: 3.42,
            student_id: 103
        },
        {
            role: 'student',
            login_id: '3400002315',
            password: 'student123',
            username: 'Ayesha Malik',
            name: 'Ayesha Malik',
            father_name: 'Tariq Malik',
            email: 'ayesha.m@fcet.edu.pk',
            cnic: '32304-4444444-4',
            program: 'BSIT',
            semester: 6,
            shift: 'Morning',
            cgpa: 3.55,
            student_id: 104
        },
        {
            role: 'student',
            login_id: '3400002316',
            password: 'student123',
            username: 'Ali Raza',
            name: 'Ali Raza',
            father_name: 'Sajid Raza',
            email: 'ali.raza@fcet.edu.pk',
            cnic: '32304-5555555-5',
            program: 'BSSE',
            semester: 4,
            shift: 'Morning',
            cgpa: 3.20,
            student_id: 105
        },
        // STUDENTS - BS Cyber Security 6th Evening (From Award Sheet)
        // ==========================================
        {
            role: 'student',
            login_id: 'ECTE231122101',
            password: 'student123',
            username: 'Muhammad Shahzaib',
            name: 'Muhammad Shahzaib',
            father_name: 'Zulfqar Ali',
            email: 'shaahkhan8@gmail.com',
            cnic: '32303-8587665-7',
            program: 'BS Cyber Security',
            semester: 6,
            shift: 'Evening',
            cgpa: 3.55,
            student_id: 1
        },
        {
            role: 'student',
            login_id: 'ECTE231122102',
            password: 'student123',
            username: 'Misbah Bibi',
            name: 'Misbah Bibi',
            father_name: 'Allah wasaya',
            email: 'jamfaisal6677@gmail.com',
            cnic: '32304-5429946-0',
            program: 'BS Cyber Security',
            semester: 6,
            shift: 'Evening',
            cgpa: 3.70,
            student_id: 2
        },
        {
            role: 'student',
            login_id: 'ECTE231122103',
            password: 'student123',
            username: 'Romaisa Khan',
            name: 'Romaisa Khan',
            father_name: 'Naveed ur Rehman',
            email: 'khanromi459@gmail.com',
            cnic: '3230413113334',
            program: 'BS Cyber Security',
            semester: 6,
            shift: 'Evening',
            cgpa: 3.73,
            student_id: 3
        },
        {
            role: 'student',
            login_id: 'ECTE231122104',
            password: 'student123',
            username: 'Javed Iqbal',
            name: 'Javed Iqbal',
            father_name: 'Muhammad Iqbal',
            email: 'javeedgirchani@gmail.com',
            cnic: '324022678506-3',
            program: 'BS Cyber Security',
            semester: 6,
            shift: 'Evening',
            cgpa: 3.41,
            student_id: 4
        },
        {
            role: 'student',
            login_id: 'ECTE231122106',
            password: 'student123',
            username: 'Muhammad Sanawar Ali',
            name: 'Muhammad Sanawar Ali',
            father_name: 'Abdul Ghaffar',
            email: 'mrsanawar124@gmail.com',
            cnic: '32304-2066221-1',
            program: 'BS Cyber Security',
            semester: 6,
            shift: 'Evening',
            cgpa: 3.09,
            student_id: 5
        },
        {
            role: 'student',
            login_id: 'ECTE231122107',
            password: 'student123',
            username: 'Hira Zafar',
            name: 'Hira Zafar',
            father_name: 'M Zafar',
            email: 'teathyun6@gmail.com',
            cnic: '36603-5253666-4',
            program: 'BS Cyber Security',
            semester: 6,
            shift: 'Evening',
            cgpa: 3.69,
            student_id: 6
        },
        {
            role: 'student',
            login_id: 'ECTE231122110',
            password: 'student123',
            username: 'Khansa Aamir',
            name: 'Khansa Aamir',
            father_name: 'Aamir Mumtaz',
            email: 'khansaaamir2004@gmail.com',
            cnic: '36302-8211288-6',
            program: 'BS Cyber Security',
            semester: 6,
            shift: 'Evening',
            cgpa: 3.59,
            student_id: 7
        },
        {
            role: 'student',
            login_id: 'ECTE231122111',
            password: 'student123',
            username: 'Eman Razaq',
            name: 'Eman Razaq',
            father_name: 'Muhammad Razaq',
            email: 'emanrazaq071@gmail.com',
            cnic: '32303-9797599-8',
            program: 'BS Cyber Security',
            semester: 6,
            shift: 'Evening',
            cgpa: 3.23,
            student_id: 8
        },
        {
            role: 'student',
            login_id: 'ECTE231122112',
            password: 'student123',
            username: 'Muhammad Basit',
            name: 'Muhammad Basit',
            father_name: 'Allah Dad',
            email: 'malikbasit87074@gmail.com',
            cnic: '3230254683165',
            program: 'BS Cyber Security',
            semester: 6,
            shift: 'Evening',
            cgpa: 3.74,
            student_id: 9
        },
        {
            role: 'student',
            login_id: 'ECTE231122116',
            password: 'student123',
            username: 'Khuzaima Khalil',
            name: 'Khuzaima Khalil',
            father_name: 'Khalil ur Rehman',
            email: 'ameliazack54@gmail.com',
            cnic: '3230132039230',
            program: 'BS Cyber Security',
            semester: 6,
            shift: 'Evening',
            cgpa: 3.35,
            student_id: 10
        },
        {
            role: 'student',
            login_id: 'ECTE231122118',
            password: 'student123',
            username: 'Allah Nawaz',
            name: 'Allah Nawaz',
            father_name: 'Muhammad Hanif',
            email: 'allahnawazblouch63@gmail.com',
            cnic: '323035086443-1',
            program: 'BS Cyber Security',
            semester: 6,
            shift: 'Evening',
            cgpa: 3.16,
            student_id: 11
        },
        {
            role: 'student',
            login_id: 'ECTE231122119',
            password: 'student123',
            username: 'Muhammad Talha Zafar',
            name: 'Muhammad Talha Zafar',
            father_name: 'Zafar Ahmad',
            email: 'tzafar2004@gmail.com',
            cnic: '36302-9386805-1',
            program: 'BS Cyber Security',
            semester: 6,
            shift: 'Evening',
            cgpa: 3.41,
            student_id: 12
        },
        {
            role: 'student',
            login_id: 'ECTE231122120',
            password: 'student123',
            username: 'Ghulam Hussain',
            name: 'Ghulam Hussain',
            father_name: 'Azhar Hussain Khan',
            email: 'g.hussain1381@gmail.com',
            cnic: '36102-2366558-3',
            program: 'BS Cyber Security',
            semester: 6,
            shift: 'Evening',
            cgpa: 2.51,
            student_id: 13
        },
        {
            role: 'student',
            login_id: 'ECTE231122121',
            password: 'student123',
            username: 'Muhammad Zahid',
            name: 'Muhammad Zahid',
            father_name: 'Khadim Hussain',
            email: 'muhammadalijk7861125@gmail.com',
            cnic: '36302-5638029-3',
            program: 'BS Cyber Security',
            semester: 6,
            shift: 'Evening',
            cgpa: 3.30,
            student_id: 14
        },
        {
            role: 'student',
            login_id: 'ECTE231122122',
            password: 'student123',
            username: 'Muhammad Rayyan',
            name: 'Muhammad Rayyan',
            father_name: 'Malik Bashir Ahmad',
            email: 'mrayyan2074@gmail.com',
            cnic: '36302-3433264-9',
            program: 'BS Cyber Security',
            semester: 6,
            shift: 'Evening',
            cgpa: 2.99,
            student_id: 15
        },
        {
            role: 'student',
            login_id: 'ECTE231122123',
            password: 'student123',
            username: 'Malik Saad Habib',
            name: 'Malik Saad Habib',
            father_name: 'Malik Muhammad khalid',
            email: 'maliksaadhabib69@gmail.com',
            cnic: '32303-9284269-3',
            program: 'BS Cyber Security',
            semester: 6,
            shift: 'Evening',
            cgpa: 3.36,
            student_id: 16
        },
        {
            role: 'student',
            login_id: 'ECTE231122124',
            password: 'student123',
            username: 'Muhammad Imran',
            name: 'Muhammad Imran',
            father_name: 'Fazal Ahmad',
            email: 'imr79099@gmail.com',
            cnic: '32303-9338287-7',
            program: 'BS Cyber Security',
            semester: 6,
            shift: 'Evening',
            cgpa: 3.24,
            student_id: 17
        },
        {
            role: 'student',
            login_id: 'ECTE231122125',
            password: 'student123',
            username: 'Rashid Ali',
            name: 'Rashid Ali',
            father_name: 'Mubarik Ali',
            email: 'mrashid78655545@gmail.com',
            cnic: '3230345922879',
            program: 'BS Cyber Security',
            semester: 6,
            shift: 'Evening',
            cgpa: 2.86,
            status: 'Probation',
            student_id: 18
        },
        {
            role: 'student',
            login_id: 'ECTE231122126',
            password: 'student123',
            username: 'Muhammad Adnan Ali',
            name: 'Muhammad Adnan Ali',
            father_name: 'Muhammad Ramzan Ali',
            email: 'adnanalimalik755@gmail.com',
            cnic: '36304-4131338-9',
            program: 'BS Cyber Security',
            semester: 6,
            shift: 'Evening',
            cgpa: 2.98,
            student_id: 19
        },
        {
            role: 'student',
            login_id: 'ECTE231122128',
            password: 'student123',
            username: 'Hafiz Matti Ur Rehman',
            name: 'Hafiz Matti Ur Rehman',
            father_name: 'Shabbir Ahmad',
            email: 'muttiurrehman650@gmail.com',
            cnic: '36303-2473162-7',
            program: 'BS Cyber Security',
            semester: 6,
            shift: 'Evening',
            cgpa: 3.42,
            student_id: 20
        },
        {
            role: 'student',
            login_id: 'ECTE231122130',
            password: 'student123',
            username: 'Daneyal Maqsood',
            name: 'Daneyal Maqsood',
            father_name: 'Maqsood Ahmad',
            email: 'daneyalmaqsood131@gmail.com',
            cnic: '36602-3851956-9',
            program: 'BS Cyber Security',
            semester: 6,
            shift: 'Evening',
            cgpa: 2.57,
            student_id: 21
        },
        {
            role: 'student',
            login_id: 'ECTE231122131',
            password: 'student123',
            username: 'Sharjeel Saqib',
            name: 'Sharjeel Saqib',
            father_name: 'Numan Saqib',
            email: 'sharjeelsaqib7890@gmail.com',
            cnic: '35104-0512516-9',
            program: 'BS Cyber Security',
            semester: 6,
            shift: 'Evening',
            cgpa: 3.80,
            student_id: 22
        },
        {
            role: 'student',
            login_id: 'ECTE231122133',
            password: 'student123',
            username: 'M. Hannan Haider',
            name: 'M. Hannan Haider',
            father_name: 'Touqir Hussain',
            email: 'sraza0452@gmail.com',
            cnic: '32303-5167615-1',
            program: 'BS Cyber Security',
            semester: 6,
            shift: 'Evening',
            cgpa: 3.32,
            student_id: 23
        },
        {
            role: 'student',
            login_id: 'ECTE231122134',
            password: 'student123',
            username: 'Muneeb Ur Rehman',
            name: 'Muneeb Ur Rehman',
            father_name: 'Naveed Akram',
            email: 'mnuzh.family1256@gmail.com',
            cnic: '36302-8727072-5',
            program: 'BS Cyber Security',
            semester: 6,
            shift: 'Evening',
            cgpa: 3.10,
            student_id: 24
        },
        {
            role: 'student',
            login_id: 'ECTE231122135',
            password: 'student123',
            username: 'Hafiz Hamid Ali',
            name: 'Hafiz Hamid Ali',
            father_name: 'Muhammad Zakriya',
            email: 'hamidrajpoot03106127@gmail.com',
            cnic: '32304-7351399-7',
            program: 'BS Cyber Security',
            semester: 6,
            shift: 'Evening',
            cgpa: 2.97,
            student_id: 25
        },
        {
            role: 'student',
            login_id: 'ECTE231122136',
            password: 'student123',
            username: 'Aurang Zaib',
            name: 'Aurang Zaib',
            father_name: 'Muhammad Siddique',
            email: 'zaibbuzdar3@gmail.com',
            cnic: '32101-2689484-1',
            program: 'BS Cyber Security',
            semester: 6,
            shift: 'Evening',
            cgpa: 3.17,
            student_id: 26
        },
        {
            role: 'student',
            login_id: 'ECTE231122137',
            password: 'student123',
            username: 'Muhammad Mursaleen',
            name: 'Muhammad Mursaleen',
            father_name: 'Abdul Hameed',
            email: 'malikmursaleen3739@gmail.com',
            cnic: '36304-1044971-9',
            program: 'BS Cyber Security',
            semester: 6,
            shift: 'Evening',
            cgpa: 3.35,
            student_id: 27
        },
        {
            role: 'student',
            login_id: 'ECTE231122139',
            password: 'student123',
            username: 'Abdullah Hamid',
            name: 'Abdullah Hamid',
            father_name: 'Mohyuddin Ahmad Ali',
            email: 'hamidabdullah270@gmail.com',
            cnic: '3630262003509',
            program: 'BS Cyber Security',
            semester: 6,
            shift: 'Evening',
            cgpa: 3.39,
            student_id: 28
        },
        {
            role: 'student',
            login_id: 'ECTE231122140',
            password: 'student123',
            username: 'Badar Ahmad',
            name: 'Badar Ahmad',
            father_name: 'Muhammad Habib',
            email: 'badarmanais5@gmail.com',
            cnic: '36602-6547125-1',
            program: 'BS Cyber Security',
            semester: 6,
            shift: 'Evening',
            cgpa: 3.32,
            student_id: 29
        },
        {
            role: 'student',
            login_id: 'ECTE231122141',
            password: 'student123',
            username: 'Mehak Siddiqui',
            name: 'Mehak Siddiqui',
            father_name: 'M Abid Hussain Siddiqui',
            email: 'angelmehak1319@gmail.com',
            cnic: '36302-8563228-8',
            program: 'BS Cyber Security',
            semester: 6,
            shift: 'Evening',
            cgpa: 3.28,
            student_id: 30
        },
        {
            role: 'student',
            login_id: 'ECTE231122142',
            password: 'student123',
            username: 'Muhammad Hussain Shahzad',
            name: 'Muhammad Hussain Shahzad',
            father_name: 'Shahzad Ahmad Shami',
            email: 'hussainshi12345@gmail.com',
            cnic: '36302-5093313-1',
            program: 'BS Cyber Security',
            semester: 6,
            shift: 'Evening',
            cgpa: 3.25,
            student_id: 31
        },
        {
            role: 'student',
            login_id: 'ECTE231122143',
            password: 'student123',
            username: 'Malik Shoaib Khan',
            name: 'Malik Shoaib Khan',
            father_name: 'Muhammad Hussain Nasir',
            email: 'shaoibkhan8034@gmail.com',
            cnic: '36303-6240039-5',
            program: 'BS Cyber Security',
            semester: 6,
            shift: 'Evening',
            cgpa: 3.38,
            student_id: 32
        },
        {
            role: 'student',
            login_id: 'ECTE231122145',
            password: 'student123',
            username: 'Muhammad Arif',
            name: 'Muhammad Arif',
            father_name: 'Rana Abdul Hameed',
            email: 'ranaarifnoon66@gmail.com',
            cnic: '36304-0684059-1',
            program: 'BS Cyber Security',
            semester: 6,
            shift: 'Evening',
            cgpa: 3.29,
            student_id: 33
        },
        {
            role: 'student',
            login_id: 'ECTE231122146',
            password: 'student123',
            username: 'Waleed Saleem',
            name: 'Waleed Saleem',
            father_name: 'Saleen',
            email: 'waleedxaleem@gmail.com',
            cnic: '3630256093155',
            program: 'BS Cyber Security',
            semester: 6,
            shift: 'Evening',
            cgpa: 3.31,
            student_id: 34
        },
        {
            role: 'student',
            login_id: 'ECTE231122147',
            password: 'student123',
            username: 'M. Hamad Khalid',
            name: 'M. Hamad Khalid',
            father_name: 'Khalid',
            email: 'hammadkhalid1267@gmail.com',
            cnic: '36302-1238555-7',
            program: 'BS Cyber Security',
            semester: 6,
            shift: 'Evening',
            cgpa: 3.40,
            student_id: 35
        },
        {
            role: 'student',
            login_id: 'ECTE231122148',
            password: 'student123',
            username: 'Asad Muneer',
            name: 'Asad Muneer',
            father_name: 'Munir Ahmed',
            email: 'asadmunir7890@gmail.com',
            cnic: '36302-9910378-5',
            program: 'BS Cyber Security',
            semester: 6,
            shift: 'Evening',
            cgpa: 3.35,
            student_id: 36
        },
        {
            role: 'student',
            login_id: 'ECTE231122150',
            password: 'student123',
            username: 'Faizan Ali Chohan',
            name: 'Faizan Ali Chohan',
            father_name: 'Amjad Ali',
            email: 'faizanchohan115@gmail.com',
            cnic: '32304-9064759-5',
            program: 'BS Cyber Security',
            semester: 6,
            shift: 'Evening',
            cgpa: 3.30,
            student_id: 37
        },
        {
            role: 'student',
            login_id: 'ECTE231122152',
            password: 'student123',
            username: 'Muhammad Abdullah',
            name: 'Muhammad Abdullah',
            father_name: 'Hafiz Muhammad Abdul Ghafoor Abbasi',
            email: 'abbasigg888@gmail.com',
            cnic: '36302-9973380-7',
            program: 'BS Cyber Security',
            semester: 6,
            shift: 'Evening',
            cgpa: 3.33,
            student_id: 38
        },
        {
            role: 'student',
            login_id: 'ECTE231122153',
            password: 'student123',
            username: 'Mahrukh Chodry',
            name: 'Mahrukh Chodry',
            father_name: 'Zulfiqar Naseer',
            email: 'mahjaff547@gmail.com',
            cnic: '36302-5256027-8',
            program: 'BS Cyber Security',
            semester: 6,
            shift: 'Evening',
            cgpa: 3.35,
            student_id: 39
        },
        {
            role: 'student',
            login_id: 'ECTE231122154',
            password: 'student123',
            username: 'Shayan Ahmad',
            name: 'Shayan Ahmad',
            father_name: 'Muhammad Ismail',
            email: 'shayanahmadarbi@gmail.com',
            cnic: '3630417618503',
            program: 'BS Cyber Security',
            semester: 6,
            shift: 'Evening',
            cgpa: 3.31,
            student_id: 40
        },
        {
            role: 'student',
            login_id: 'ECTE231122155',
            password: 'student123',
            username: 'Muhammad Aftab',
            name: 'Muhammad Aftab',
            father_name: 'Muhammad Ramzan',
            email: 'jaamjamaftab@gmail.com',
            cnic: '32304-5826561-5',
            program: 'BS Cyber Security',
            semester: 6,
            shift: 'Evening',
            cgpa: 3.28,
            student_id: 41
        }
    ],

    // ==========================================
    // 2. CLASSES / SUBJECTS (From Course Allocation)
    // ==========================================
    classes: [
        // BSIT 7th Semester
        { subject_name: 'Virtual System and Services', subject_code: 'IT-401', program: 'BSIT', semester: 7, credit_hours: 4, shift: 'Morning', teacher_id: 'EMP-012' },
        { subject_name: 'Advance OOP with Java', subject_code: 'IT-403', program: 'BSIT', semester: 7, credit_hours: 3, shift: 'Morning', teacher_id: 'EMP-012' },
        { subject_name: 'Telecommunication Systems', subject_code: 'IT-405', program: 'BSIT', semester: 7, credit_hours: 3, shift: 'Morning', teacher_id: 'EMP-006' },
        { subject_name: 'Pakistan Studies', subject_code: 'PK-407', program: 'BSIT', semester: 7, credit_hours: 2, shift: 'Morning', teacher_id: null },
        { subject_name: 'Entrepreneurship', subject_code: 'MG-409', program: 'BSIT', semester: 7, credit_hours: 3, shift: 'Morning', teacher_id: null },
        { subject_name: 'Final Year Project - I', subject_code: 'IT-402', program: 'BSIT', semester: 7, credit_hours: 3, shift: 'Morning', teacher_id: null },
        
        // BS Cyber Security 3rd Semester (Fall 2024-28)
        { subject_name: 'Civics and Community Engagement', subject_code: 'SOCI-2101', program: 'BS Cyber Security', semester: 3, credit_hours: 2, shift: 'Morning', teacher_id: null },
        { subject_name: 'Professional Practices', subject_code: 'COSC-2116', program: 'BS Cyber Security', semester: 3, credit_hours: 2, shift: 'Morning', teacher_id: 'EMP-015' },
        { subject_name: 'Data Structure', subject_code: 'COSC-2106', program: 'BS Cyber Security', semester: 3, credit_hours: 4, shift: 'Morning', teacher_id: 'EMP-010' },
        { subject_name: 'Software Engineering', subject_code: 'COSC-2110', program: 'BS Cyber Security', semester: 3, credit_hours: 3, shift: 'Morning', teacher_id: 'VIS-001' },
        { subject_name: 'Cyber Security', subject_code: 'CYSE-2131', program: 'BS Cyber Security', semester: 3, credit_hours: 3, shift: 'Morning', teacher_id: 'EMP-013' },
        { subject_name: 'Computer Organization & Assembly Language', subject_code: 'COSC-2111', program: 'BS Cyber Security', semester: 3, credit_hours: 3, shift: 'Morning', teacher_id: null },
        
        // BS Cyber Security 5th Semester (Fall 2023-27)
        { subject_name: 'Operating Systems', subject_code: 'COSC-3112', program: 'BS Cyber Security', semester: 5, credit_hours: 3, shift: 'Both', teacher_id: 'EMP-016' },
        { subject_name: 'Information Assurance', subject_code: 'CYSE-3132', program: 'BS Cyber Security', semester: 5, credit_hours: 3, shift: 'Both', teacher_id: null },
        { subject_name: 'Network Security', subject_code: 'CYSE-3133', program: 'BS Cyber Security', semester: 5, credit_hours: 3, shift: 'Both', teacher_id: 'EMP-013' },
        { subject_name: 'Linear Algebra', subject_code: 'MATH-3182', program: 'BS Cyber Security', semester: 5, credit_hours: 3, shift: 'Both', teacher_id: null },
        
        // BS Cyber Security 6th Semester (From Timetable)
        { subject_name: 'Wireless and Mobile Security', subject_code: 'CYSE-4XXX', program: 'BS Cyber Security', semester: 6, credit_hours: 3, shift: 'Evening', teacher_id: 'EMP-013' }
    ],

    // ==========================================
    // 3. NOTIFICATIONS
    // ==========================================
    notifications: [
        { id: 1, date: '2026-06-15', type: 'Exam', message: 'Final Term Datesheet uploaded for BS Cyber Security Semester 6 Evening.' },
        { id: 2, date: '2026-06-10', type: 'Result', message: 'Spring 2026 Mid Term Result is now available for all programs.' },
        { id: 3, date: '2026-06-05', type: 'Fee', message: 'Fee submission deadline extended to July 15, 2026.' },
        { id: 4, date: '2026-05-28', type: 'Admin', message: 'Gazette generated for Fall 2025 Final Examinations.' },
        { id: 5, date: '2026-05-20', type: 'Exam', message: 'Wireless and Mobile Security practical exams scheduled for June 25, 2026.' },
        { id: 6, date: '2026-05-15', type: 'Admin', message: 'Faculty meeting scheduled for May 30, 2026 regarding exam preparations.' }
    ],

    // ==========================================
    // 4. STUDENT RESULTS (From 5th and 6th Semester Result Files)
    // ==========================================
    results: [
        // BSCS, BSIT, BSSE Semester Results
        { student_id: '3400002312', roll_number: '3400002312', name: 'Muhammad Hassan', program: 'BSCS', semester: 6, sgpa: 3.62, cgpa: 3.84, status: 'Promoted', remarks: '' },
        { student_id: '3400002313', roll_number: '3400002313', name: 'Fatima Khan', program: 'BSCS', semester: 6, sgpa: 3.70, cgpa: 3.65, status: 'Promoted', remarks: '' },
        { student_id: '3400002314', roll_number: '3400002314', name: 'Usman Ali', program: 'BSCS', semester: 6, sgpa: 3.40, cgpa: 3.42, status: 'Promoted', remarks: '' },
        { student_id: '3400002315', roll_number: '3400002315', name: 'Ayesha Malik', program: 'BSIT', semester: 6, sgpa: 3.50, cgpa: 3.55, status: 'Promoted', remarks: '' },
        { student_id: '3400002316', roll_number: '3400002316', name: 'Ali Raza', program: 'BSSE', semester: 4, sgpa: 3.10, cgpa: 3.20, status: 'Promoted', remarks: '' },

        // BS Cyber Security 6th Semester Results
        { student_id: 'ECTE231122101', roll_number: 'ECTE231122101', name: 'Muhammad Shahzaib', program: 'BS Cyber Security', semester: 6, sgpa: 3.34, cgpa: 3.61, status: 'Promoted', remarks: '' },
        { student_id: 'ECTE231122102', roll_number: 'ECTE231122102', name: 'Misbah Bibi', program: 'BS Cyber Security', semester: 6, sgpa: 3.65, cgpa: 3.70, status: 'Promoted', remarks: '' },
        { student_id: 'ECTE231122103', roll_number: 'ECTE231122103', name: 'Romaisa Khan', program: 'BS Cyber Security', semester: 6, sgpa: 3.71, cgpa: 3.73, status: 'Promoted', remarks: '' },
        { student_id: 'ECTE231122104', roll_number: 'ECTE231122104', name: 'Javed Iqbal', program: 'BS Cyber Security', semester: 6, sgpa: 3.53, cgpa: 3.38, status: 'Promoted', remarks: '' },
        { student_id: 'ECTE231122106', roll_number: 'ECTE231122106', name: 'Muhammad Sanawar Ali', program: 'BS Cyber Security', semester: 6, sgpa: 3.08, cgpa: 3.09, status: 'Promoted', remarks: '' },
        { student_id: 'ECTE231122107', roll_number: 'ECTE231122107', name: 'Hira Zafar', program: 'BS Cyber Security', semester: 6, sgpa: 3.73, cgpa: 3.68, status: 'Promoted', remarks: '' },
        { student_id: 'ECTE231122110', roll_number: 'ECTE231122110', name: 'Khansa Aamir', program: 'BS Cyber Security', semester: 6, sgpa: 3.29, cgpa: 3.67, status: 'Promoted', remarks: '' },
        { student_id: 'ECTE231122111', roll_number: 'ECTE231122111', name: 'Eman Razaq', program: 'BS Cyber Security', semester: 6, sgpa: 3.09, cgpa: 3.26, status: 'Promoted', remarks: '' },
        { student_id: 'ECTE231122112', roll_number: 'ECTE231122112', name: 'Muhammad Basit', program: 'BS Cyber Security', semester: 6, sgpa: 3.79, cgpa: 3.73, status: 'Promoted', remarks: '' },
        { student_id: 'ECTE231122116', roll_number: 'ECTE231122116', name: 'Khuzaima Khalil', program: 'BS Cyber Security', semester: 6, sgpa: 3.46, cgpa: 3.32, status: 'Promoted', remarks: '' },
        { student_id: 'ECTE231122118', roll_number: 'ECTE231122118', name: 'Allah Nawaz', program: 'BS Cyber Security', semester: 6, sgpa: 2.97, cgpa: 3.21, status: 'Promoted', remarks: '' },
        { student_id: 'ECTE231122119', roll_number: 'ECTE231122119', name: 'Muhammad Talha Zafar', program: 'BS Cyber Security', semester: 6, sgpa: 3.36, cgpa: 3.42, status: 'Promoted', remarks: '' },
        { student_id: 'ECTE231122120', roll_number: 'ECTE231122120', name: 'Ghulam Hussain', program: 'BS Cyber Security', semester: 6, sgpa: 1.63, cgpa: 2.73, status: 'Dropped', remarks: 'Low SGPA' },
        { student_id: 'ECTE231122121', roll_number: 'ECTE231122121', name: 'Muhammad Zahid', program: 'BS Cyber Security', semester: 6, sgpa: 2.99, cgpa: 3.38, status: 'Promoted', remarks: '' },
        { student_id: 'ECTE231122122', roll_number: 'ECTE231122122', name: 'Muhammad Rayyan', program: 'BS Cyber Security', semester: 6, sgpa: 2.44, cgpa: 3.14, status: 'Promoted', remarks: '' },
        { student_id: 'ECTE231122123', roll_number: 'ECTE231122123', name: 'Muhammad Saad Habib', program: 'BS Cyber Security', semester: 6, sgpa: 2.95, cgpa: 3.46, status: 'Promoted', remarks: '' },
        { student_id: 'ECTE231122124', roll_number: 'ECTE231122124', name: 'Muhammad Imran', program: 'BS Cyber Security', semester: 6, sgpa: 3.06, cgpa: 3.29, status: 'Promoted', remarks: '' },
        { student_id: 'ECTE231122125', roll_number: 'ECTE231122125', name: 'Rashid Ali', program: 'BS Cyber Security', semester: 6, sgpa: 1.95, cgpa: 3.10, status: 'Probation', remarks: 'Low SGPA' },
        { student_id: 'ECTE231122126', roll_number: 'ECTE231122126', name: 'Muhammad Adnan Ali', program: 'BS Cyber Security', semester: 6, sgpa: 2.94, cgpa: 2.99, status: 'Promoted', remarks: '' },
        { student_id: 'ECTE231122128', roll_number: 'ECTE231122128', name: 'Hafiz Matti Ur Rehman', program: 'BS Cyber Security', semester: 6, sgpa: 3.06, cgpa: 3.51, status: 'Promoted', remarks: '' },
        { student_id: 'ECTE231122130', roll_number: 'ECTE231122130', name: 'Daneyal Maqsood', program: 'BS Cyber Security', semester: 6, sgpa: 2.72, cgpa: 2.53, status: 'Promoted', remarks: '' },
        { student_id: 'ECTE231122131', roll_number: 'ECTE231122131', name: 'Sharjeel Saqib', program: 'BS Cyber Security', semester: 6, sgpa: 3.80, cgpa: 3.80, status: 'Promoted', remarks: '' },
        { student_id: 'ECTE231122133', roll_number: 'ECTE231122133', name: 'M. Hannan Haider', program: 'BS Cyber Security', semester: 6, sgpa: 3.04, cgpa: 3.39, status: 'Promoted', remarks: '' },
        { student_id: 'ECTE231122134', roll_number: 'ECTE231122134', name: 'Muneeb Ur Rehman', program: 'BS Cyber Security', semester: 6, sgpa: 2.88, cgpa: 3.15, status: 'Promoted', remarks: '' },
        { student_id: 'ECTE231122135', roll_number: 'ECTE231122135', name: 'Hafiz Hamid Ali', program: 'BS Cyber Security', semester: 6, sgpa: 2.84, cgpa: 3.00, status: 'Promoted', remarks: '' },
        { student_id: 'ECTE231122136', roll_number: 'ECTE231122136', name: 'Aurang Zaib', program: 'BS Cyber Security', semester: 6, sgpa: 2.77, cgpa: 3.27, status: 'Promoted', remarks: '' },
        { student_id: 'ECTE231122137', roll_number: 'ECTE231122137', name: 'Muhammad Mursaleen', program: 'BS Cyber Security', semester: 6, sgpa: 3.13, cgpa: 3.41, status: 'Promoted', remarks: '' },
        { student_id: 'ECTE231122139', roll_number: 'ECTE231122139', name: 'Abdullah Hamid', program: 'BS Cyber Security', semester: 6, sgpa: 3.25, cgpa: 3.43, status: 'Promoted', remarks: '' },
        { student_id: 'ECTE231122140', roll_number: 'ECTE231122140', name: 'Badar Ahmad', program: 'BS Cyber Security', semester: 6, sgpa: 3.18, cgpa: 3.37, status: 'Promoted', remarks: '' },
        
        // BS Cyber Security 5th Semester Results
        { student_id: 'ECTE231122101', roll_number: 'ECTE231122101', name: 'Muhammad Shahzaib', program: 'BS Cyber Security', semester: 5, sgpa: 3.50, cgpa: 3.55, status: 'Promoted', remarks: '' },
        { student_id: 'ECTE231122102', roll_number: 'ECTE231122102', name: 'Misbah Bibi', program: 'BS Cyber Security', semester: 5, sgpa: 3.90, cgpa: 3.70, status: 'Promoted', remarks: '' },
        { student_id: 'ECTE231122103', roll_number: 'ECTE231122103', name: 'Romaisa Khan', program: 'BS Cyber Security', semester: 5, sgpa: 3.90, cgpa: 3.73, status: 'Promoted', remarks: '' }
    ],

    // ==========================================
    // 5. TIMETABLE (From EUM-CS&ET-Timetable-Spring-2026.pdf)
    // ==========================================
    timetable: [
        // BS Cyber Security 6th Evening - Wireless and Mobile Security
        { day: 'Monday', program: 'BS Cyber Security', semester: 6, shift: 'Evening', time: '1:30 - 2:20', lab: '12:30 - 1:30', subject: 'Wireless and Mobile Security', teacher: 'Dr. Zia Ur Rehman', room: 'BOT-B1-F-104' },
        { day: 'Monday', program: 'BS Cyber Security', semester: 6, shift: 'Evening', time: '2:20 - 3:10', lab: '', subject: 'Secure Software Design and Development', teacher: 'Mr. Usman Haider', room: 'BOT-B1-F-104' },
        { day: 'Monday', program: 'BS Cyber Security', semester: 6, shift: 'Evening', time: '3:10 - 4:00', lab: '', subject: 'HCI & Computer Graphics', teacher: 'Ms. Samia Nasir', room: 'BOT-B1-F-104' },
        { day: 'Tuesday', program: 'BS Cyber Security', semester: 6, shift: 'Evening', time: '1:30 - 2:20', lab: '', subject: 'Wireless and Mobile Security', teacher: 'Dr. Zia Ur Rehman', room: 'BOT-B1-F-104' },
        { day: 'Tuesday', program: 'BS Cyber Security', semester: 6, shift: 'Evening', time: '2:20 - 3:10', lab: '', subject: 'Secure Software Design and Development', teacher: 'Mr. Usman Haider', room: 'BOT-B1-F-104' },
        { day: 'Tuesday', program: 'BS Cyber Security', semester: 6, shift: 'Evening', time: '3:10 - 4:00', lab: '', subject: 'HCI & Computer Graphics', teacher: 'Ms. Samia Nasir', room: 'BOT-B1-F-104' },
        
        // BS Cyber Security 4th Semester Morning
        { day: 'Monday', program: 'BS Cyber Security', semester: 4, shift: 'Morning', time: '11:00 - 11:50', lab: '', subject: 'Artificial Intelligence', teacher: 'Dr. Samina Naz', room: 'CLB-B1-G-Software Engineering Lab' },
        { day: 'Tuesday', program: 'BS Cyber Security', semester: 4, shift: 'Morning', time: '8:30 - 11:00', lab: 'Lab', subject: 'Computer Networks', teacher: 'Mr. Zahid Aziz', room: 'CLB-B1-G-Software Engineering Lab' },
        
        // BS Cyber Security 4th Semester Morning Section-B
        { day: 'Wednesday', program: 'BS Cyber Security', semester: 4, shift: 'Morning', time: '10:00 - 11:00', lab: '', subject: 'Information Security', teacher: 'Mr. Zia Ur Rehman', room: 'CLB-B1-G-Computing2 Lab' },
        { day: 'Thursday', program: 'BS Cyber Security', semester: 4, shift: 'Morning', time: '12:40 - 1:30', lab: '', subject: 'Information Security', teacher: 'Mr. Zia Ur Rehman', room: 'CLB-B1-G-Computing2 Lab' },
        
        // BS Cyber Security 5th Semester
        { day: 'Monday', program: 'BS Cyber Security', semester: 5, shift: 'Morning', time: '8:30 - 9:20', lab: '', subject: 'Linear Algebra', teacher: 'Ms. Malyca Ali', room: 'BOT-B1-F-104' },
        { day: 'Monday', program: 'BS Cyber Security', semester: 5, shift: 'Morning', time: '9:20 - 10:10', lab: '', subject: 'Vulnerability Assessment', teacher: 'Dr. Zahid Hussain Qaisar', room: 'BOT-B1-F-104' },
        
        // BSIT 8th (2.5) Semester
        { day: 'Monday', program: 'BSIT', semester: 8, shift: 'Morning', time: '11:00 - 12:00', lab: '', subject: 'Virtual System and Services', teacher: '', room: 'CTB-B2-G-03' },
        { day: 'Tuesday', program: 'BSIT', semester: 8, shift: 'Morning', time: '9:45 - 11:00', lab: '', subject: 'Virtual System and Services', teacher: '', room: 'CTB-B2-G-03' },
        
        // BS Data Science 3rd Evening
        { day: 'Tuesday', program: 'BS Data Science', semester: 3, shift: 'Evening', time: '1:30 - 2:45', lab: '', subject: 'Professional Practices', teacher: '', room: 'CLB-B1-G-Virtual Reality Lab' }
    ],

    // ==========================================
    // 6. COURSE ALLOCATION (From Full-V3-EUM-Course-Allocation_Fall_2025.xlsx)
    // ==========================================
    courseAllocation: [
        // BSIT 7th Semester
        { course_code: 'IT-401', course_title: 'Virtual System and Services', credit_hours: '4 (3-1)', program: 'BSIT', semester: 7, shift: 'Morning' },
        { course_code: 'IT-403', course_title: 'Advance OOP with Java', credit_hours: '3 (3-0)', program: 'BSIT', semester: 7, shift: 'Morning' },
        { course_code: 'IT-405', course_title: 'Telecommunication Systems', credit_hours: '3 (3-0)', program: 'BSIT', semester: 7, shift: 'Morning' },
        { course_code: 'PK-407', course_title: 'Pakistan Studies', credit_hours: '2 (2-0)', program: 'BSIT', semester: 7, shift: 'Morning' },
        { course_code: 'MG-409', course_title: 'Entrepreneurship', credit_hours: '3 (3-0)', program: 'BSIT', semester: 7, shift: 'Morning' },
        { course_code: 'IT-402', course_title: 'Final Year Project - I', credit_hours: '3 (0-3)', program: 'BSIT', semester: 7, shift: 'Morning' },
        
        // BS Cyber Security 3rd Semester
        { course_code: 'SOCI-2101', course_title: 'Civics and Community Engagement', credit_hours: '2 (2-0)', program: 'BS Cyber Security', semester: 3, shift: 'Morning' },
        { course_code: 'COSC-2116', course_title: 'Professional Practices', credit_hours: '2 (2-0)', program: 'BS Cyber Security', semester: 3, shift: 'Morning' },
        { course_code: 'COSC-2106', course_title: 'Data Structure', credit_hours: '4 (3-1)', program: 'BS Cyber Security', semester: 3, shift: 'Morning' },
        { course_code: 'COSC-2110', course_title: 'Software Engineering', credit_hours: '3 (3-0)', program: 'BS Cyber Security', semester: 3, shift: 'Morning' },
        { course_code: 'CYSE-2131', course_title: 'Cyber Security', credit_hours: '3 (2-1)', program: 'BS Cyber Security', semester: 3, shift: 'Morning' },
        { course_code: 'COSC-2111', course_title: 'Computer Organization & Assembly Language', credit_hours: '3 (2-1)', program: 'BS Cyber Security', semester: 3, shift: 'Morning' },
        
        // BS Cyber Security 5th Semester
        { course_code: 'COSC-3112', course_title: 'Operating Systems', credit_hours: '3 (2-1)', program: 'BS Cyber Security', semester: 5, shift: 'Both' },
        { course_code: 'CYSE-3132', course_title: 'Information Assurance', credit_hours: '3 (2-1)', program: 'BS Cyber Security', semester: 5, shift: 'Both' },
        { course_code: 'CYSE-3133', course_title: 'Network Security', credit_hours: '3 (2-1)', program: 'BS Cyber Security', semester: 5, shift: 'Both' },
        { course_code: 'MATH-3182', course_title: 'Linear Algebra', credit_hours: '3 (3-0)', program: 'BS Cyber Security', semester: 5, shift: 'Both' },
        { course_code: 'CYSE-31xx', course_title: 'Domain Elective 1 / Theory of Automata', credit_hours: '3 (3-0)', program: 'BS Cyber Security', semester: 5, shift: 'Both' },
        { course_code: 'CYSE-31xx', course_title: 'Domain Elective 2 / Hardware Security', credit_hours: '3 (2-1)', program: 'BS Cyber Security', semester: 5, shift: 'Both' }
    ],

    // ==========================================
    // 7. LAB SCHEDULES (From Sitting Plan)
    // ==========================================
    labSchedules: [
        { lab_name: 'Cyber Security Lab', shift: 'Morning', day: 'Monday', time: '8:30 - 11:00', subject: 'Artificial Intelligence', class: 'BSCybS-4th-A', teacher: 'Dr. Samina Naz' },
        { lab_name: 'Cyber Security Lab', shift: 'Morning', day: 'Tuesday', time: '8:30 - 11:00', subject: 'Computer Networks', class: 'BSCybS-4th-A', teacher: 'Mr. Zia Ur Rehman' },
        { lab_name: 'Cyber Security Lab', shift: 'Morning', day: 'Wednesday', time: '8:30 - 11:00', subject: 'Information Security', class: 'BSCybS-4th-A', teacher: 'Mr. Syed Atta ur Rehman' },
        { lab_name: 'Cyber Security Lab', shift: 'Morning', day: 'Monday', time: '11:30 - 2:00', subject: 'Object Oriented Programming', class: 'BSCybS-2nd-A', teacher: 'Dr. Zahid Hussain Qaisar' },
        { lab_name: 'Cyber Security Lab', shift: 'Morning', day: 'Tuesday', time: '11:30 - 2:00', subject: 'Object Oriented Programming', class: 'BSCybS-2nd-B', teacher: 'Dr. Zahid Hussain Qaisar' },
        { lab_name: 'Cyber Security Lab', shift: 'Morning', day: 'Wednesday', time: '11:30 - 2:00', subject: 'Database Systems', class: 'BSCybS-2nd-A', teacher: 'Dr. Hira Nazeer' },
        { lab_name: 'Cyber Security Lab', shift: 'Morning', day: 'Thursday', time: '11:30 - 2:00', subject: 'Database Systems', class: 'BSCybS-2nd-B', teacher: 'Dr. Hira Nazeer' },
        
        // Evening Lab Schedules
        { lab_name: 'Cyber Security Lab', shift: 'Evening', day: 'Monday', time: '2:00 - 4:30', subject: 'Computer Networks', class: 'BSCybS-4th-A', teacher: '' },
        { lab_name: 'Cyber Security Lab', shift: 'Evening', day: 'Tuesday', time: '2:00 - 4:30', subject: 'Artificial Intelligence', class: 'BSCybS-4th-A', teacher: '' },
        { lab_name: 'Cyber Security Lab', shift: 'Evening', day: 'Wednesday', time: '2:00 - 4:30', subject: 'ICT', class: 'BSCybS-1st-A', teacher: '' },
        { lab_name: 'Cyber Security Lab', shift: 'Evening', day: 'Thursday', time: '2:00 - 4:30', subject: 'Information Security', class: 'BSCybS-4th-A', teacher: '' },
        { lab_name: 'Cyber Security Lab', shift: 'Evening', day: 'Friday', time: '2:00 - 4:30', subject: 'Applied Physics', class: 'BSCybS-1st-A', teacher: '' }
    ],

    // ==========================================
    // 8. GRADING SYSTEM (From GRADING SYSTEM.pdf)
    // ==========================================
    gradingSystem: [
        { marks_range: '80 & Above', grade: 'A', gp: '4.00' },
        { marks_range: '79', grade: 'B+', gp: '3.90' },
        { marks_range: '78', grade: 'B+', gp: '3.90' },
        { marks_range: '77', grade: 'B+', gp: '3.80' },
        { marks_range: '76', grade: 'B+', gp: '3.70' },
        { marks_range: '75', grade: 'B+', gp: '3.70' },
        { marks_range: '74', grade: 'B', gp: '3.60' },
        { marks_range: '73', grade: 'B', gp: '3.50' },
        { marks_range: '72', grade: 'B', gp: '3.50' },
        { marks_range: '71', grade: 'B', gp: '3.40' },
        { marks_range: '70', grade: 'B', gp: '3.30' },
        { marks_range: '69', grade: 'B', gp: '3.30' },
        { marks_range: '68', grade: 'B', gp: '3.20' },
        { marks_range: '67', grade: 'B', gp: '3.10' },
        { marks_range: '66', grade: 'B', gp: '3.10' },
        { marks_range: '65', grade: 'B', gp: '3.00' },
        { marks_range: '64', grade: 'C+', gp: '2.90' },
        { marks_range: '63', grade: 'C+', gp: '2.90' },
        { marks_range: '62', grade: 'C+', gp: '2.80' },
        { marks_range: '61', grade: 'C+', gp: '2.70' },
        { marks_range: '60', grade: 'C+', gp: '2.70' },
        { marks_range: '59', grade: 'C', gp: '2.60' },
        { marks_range: '58', grade: 'C', gp: '2.50' },
        { marks_range: '57', grade: 'C', gp: '2.50' },
        { marks_range: '56', grade: 'C', gp: '2.40' },
        { marks_range: '55', grade: 'C', gp: '2.30' },
        { marks_range: '54', grade: 'C', gp: '2.30' },
        { marks_range: '53', grade: 'C', gp: '2.20' },
        { marks_range: '52', grade: 'C', gp: '2.10' },
        { marks_range: '51', grade: 'C', gp: '2.10' },
        { marks_range: '50', grade: 'C', gp: '2.00' }
    ],

    // ==========================================
    // 9. FACULTY WORKLOAD (From Workload_Fall_2025)
    // ==========================================
    facultyWorkload: [
        { teacher_id: 1, name: 'Dr. Sohail Raza', designation: 'Assistant Professor', workload: 12, extra_load: 0 },
        { teacher_id: 2, name: 'Dr. Zahid Hussain Qaisar', designation: 'Assistant Professor', workload: 14, extra_load: 0 },
        { teacher_id: 3, name: 'Dr. Wasif Akbar', designation: 'Assistant Professor', workload: 12, extra_load: 0 },
        { teacher_id: 4, name: 'Dr. Muhammad Naveed Yasir', designation: 'Assistant Professor', workload: 12, extra_load: 0 },
        { teacher_id: 5, name: 'Dr. Inam Illahi', designation: 'Assistant Professor', workload: 12, extra_load: 0 },
        { teacher_id: 6, name: 'Dr. Shahzad Sarwar Bhatti', designation: 'Assistant Professor', workload: 12, extra_load: 0 },
        { teacher_id: 7, name: 'Dr. Rubia Fatima', designation: 'Assistant Professor', workload: 12, extra_load: 0 },
        { teacher_id: 8, name: 'Dr. Samina Naz', designation: 'Assistant Professor', workload: 12, extra_load: 0 },
        { teacher_id: 9, name: 'Dr. Beenish Raza', designation: 'Assistant Professor', workload: 12, extra_load: 0 },
        { teacher_id: 10, name: 'Dr. Hira Nazir', designation: 'Assistant Professor', workload: 12, extra_load: 0 },
        { teacher_id: 11, name: 'Mr. Rana Saleem', designation: 'Lecturer', workload: 12, extra_load: 0 },
        { teacher_id: 12, name: 'Mr. Jasim Shah', designation: 'Lecturer', workload: 12, extra_load: 0 },
        { teacher_id: 13, name: 'Dr. Zia Ur Rehman', designation: 'Lecturer', workload: 12, extra_load: 0 },
        { teacher_id: 14, name: 'Mr. M. Arslan', designation: 'Lecturer', workload: 12, extra_load: 0 },
        { teacher_id: 15, name: 'Mr. M. Manshah', designation: 'Lecturer', workload: 12, extra_load: 0 },
        { teacher_id: 16, name: 'Ms. Afshan Almas', designation: 'Lecturer', workload: 12, extra_load: 0 },
        { teacher_id: 17, name: 'Ms. Sadia Ramzan', designation: 'Lecturer', workload: 12, extra_load: 0 },
        { teacher_id: 18, name: 'Mr. Mirza Murad Baig', designation: 'Lecturer', workload: 12, extra_load: 0 },
        { teacher_id: 19, name: 'Mr. Kamran Abid', designation: 'Lecturer', workload: 12, extra_load: 0 },
        { teacher_id: 20, name: 'Ms. Iqra Iqbal Khan', designation: 'Lecturer', workload: 12, extra_load: 0 },
        { teacher_id: 21, name: 'Mr. Zahid Aziz', designation: 'Lecturer', workload: 12, extra_load: 0 },
        { teacher_id: 22, name: 'Ms. Sana Tariq', designation: 'Lecturer', workload: 12, extra_load: 0 },
        { teacher_id: 23, name: 'Mr. Syed M. Waqas Shah', designation: 'Lecturer', workload: 12, extra_load: 0 }
    ],

    // ==========================================
    // 10. ROOM ALLOCATION (From Room Details for SAP)
    // ==========================================
    roomAllocation: [
        { room_name: 'CTB-B1-F-104', building: 'CTB Block1', floor: 'Ground Floor', capacity: '30+', morning_8_30: 'BSIT-1st-M-A', morning_11_00: '', evening_11_00: 'BSIT-1st-E-A', evening_1_30: 'BSIT-2nd-E-A' },
        { room_name: 'CTB-B1-F-103', building: 'CTB Block1', floor: 'Ground Floor', capacity: '30+', morning_8_30: 'BSCS-1st-M-A', morning_11_00: '', evening_11_00: 'BSCS-1st-E-A', evening_1_30: 'BSCS-2nd-E-A' },
        { room_name: 'CTB-B2-F-105', building: 'CTB Block2', floor: '1st Floor', capacity: '30+', morning_8_30: 'BSSE-1st-M-A', morning_11_00: '', evening_11_00: 'BSSE-1st-E-A', evening_1_30: 'BSSE-2nd-E-A' },
        { room_name: 'CLB-B1-G-Artificial Intelligence Lab', building: 'CLB B1', floor: 'Ground Floor', capacity: '20+', morning_8_30: 'BSAI-1st-M-A', morning_11_00: '', evening_11_00: 'BSAI-1st-E-A', evening_1_30: 'BSAI-2nd-E-A' },
        { room_name: 'CLB-B1-G-Augmented and Virtual Reality Lab', building: 'CLB B1', floor: 'Ground Floor', capacity: '20+', morning_8_30: 'BSDS-1st-M-A', morning_11_00: '', evening_11_00: 'BSDS-1st-E-A', evening_1_30: 'BSDS-2nd-E-A' },
        { room_name: 'CTB-B2-F-106', building: 'CTB Block2', floor: '1st Floor', capacity: '30+', morning_8_30: 'BSCybSec-1st-M-A', morning_11_00: '', evening_11_00: 'BSCybSec-1st-E-A', evening_1_30: 'BSCybSec-2nd-E-A' },
        { room_name: 'BOT-B1-F-101', building: 'Botany Dept', floor: '1st Floor', capacity: '30+', morning_8_30: 'BSIT-5th-M-A', morning_11_00: 'BSIT-3rd-M-A', evening_11_00: '', evening_1_30: 'BSIT-5th-E-A' },
        { room_name: 'BOT-B1-F-102', building: 'Botany Dept', floor: '1st Floor', capacity: '30+', morning_8_30: 'BSCS-5th-M-A', morning_11_00: 'BSIT-3rd-M-B', evening_11_00: '', evening_1_30: 'BSCS-5th-E-A' },
        { room_name: 'BOT-B1-F-103', building: 'Botany Dept', floor: '1st Floor', capacity: '30+', morning_8_30: 'BSSE-5th-M-A', morning_11_00: 'BSIT-3rd-M-C', evening_11_00: '', evening_1_30: 'BSSE-5th-E-A' }
    ],

    // ==========================================
    // 11. PROGRAMS SUMMARY (From Sheet3)
    // ==========================================
    programsSummary: [
        { program: 'BSIT', morning_1st: 1, morning_3rd: 4, morning_5th: 1, morning_5th_2_5: 1, morning_7th: 1, morning_7th_2_5: 1, morning_total: 9, evening_1st: 1, evening_2nd: 1, evening_3rd: 2, evening_5th: 1, evening_6th: 1, evening_7th: 1, evening_total: 7, total: 16 },
        { program: 'BSCS', morning_1st: 1, morning_3rd: 3, morning_5th: 1, morning_total: 5, evening_1st: 1, evening_2nd: 1, evening_3rd: 2, evening_5th: 1, evening_total: 5, total: 10 },
        { program: 'BSSE', morning_1st: 1, morning_3rd: 2, morning_5th: 1, morning_total: 4, evening_1st: 1, evening_2nd: 1, evening_3rd: 1, evening_5th: 1, evening_total: 4, total: 8 },
        { program: 'BSAI', morning_1st: 1, morning_3rd: 2, morning_5th: 1, morning_total: 4, evening_1st: 1, evening_2nd: 1, evening_3rd: 2, evening_5th: 1, evening_total: 5, total: 9 },
        { program: 'BSDS', morning_1st: 1, morning_3rd: 2, morning_4th: 1, morning_5th: 1, morning_total: 5, evening_1st: 1, evening_2nd: 1, evening_3rd: 1, evening_5th: 1, evening_total: 4, total: 9 },
        { program: 'BSCybSec', morning_1st: 1, morning_3rd: 2, morning_5th: 1, morning_total: 4, evening_1st: 1, evening_2nd: 1, evening_3rd: 1, evening_5th: 1, evening_total: 4, total: 8 }
    ]
};

// Export for use in other files
if (typeof module !== 'undefined' && module.exports) {
    module.exports = CampusData;
}