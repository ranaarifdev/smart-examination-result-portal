<p align="center">
  <img src="https://img.shields.io/badge/Node.js-339933?style=for-the-badge&logo=nodedotjs&logoColor=white" alt="Node.js"/>
  <img src="https://img.shields.io/badge/Express.js-000000?style=for-the-badge&logo=express&logoColor=white" alt="Express.js"/>
  <img src="https://img.shields.io/badge/SQLite-003B57?style=for-the-badge&logo=sqlite&logoColor=white" alt="SQLite"/>
  <img src="https://img.shields.io/badge/JWT-000000?style=for-the-badge&logo=jsonwebtokens&logoColor=white" alt="JWT"/>
  <img src="https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white" alt="HTML5"/>
  <img src="https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white" alt="CSS3"/>
  <img src="https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black" alt="JavaScript"/>
</p>

# 🎓 Smart Examination Result Portal

> A secure, full-stack campus management and evaluation platform for the **Faculty of Computing and Emerging Technology (FCET)**, Emerson University Multan.

---

## 📋 Table of Contents

- [About](#about)
- [Features](#features)
- [Screenshots](#screenshots)
- [Tech Stack](#tech-stack)
- [Architecture](#architecture)
- [Database ERD](#database-erd)
- [Getting Started](#getting-started)
- [API Endpoints](#api-endpoints)
- [Default Credentials](#default-credentials)
- [Project Structure](#project-structure)
- [SDG Alignment](#sdg-alignment)
- [License](#license)

---

## 📖 About

Traditional educational grading systems are plagued by slow feedback cycles, human calculation errors, and administrative bottlenecks. The **Smart Examination Result Portal** digitizes the entire academic evaluation lifecycle for FCET, Emerson University Multan.

It introduces three distinct role-based modules — **Students**, **Teachers**, and **Administrators** — to streamline operations from marks submission to official result card generation.

### Key Highlights:
- 🔒 **Secure Authentication** — JWT tokens + bcrypt password hashing
- 📊 **Automated GPA/CGPA** — Zero calculation errors
- 🖨️ **PDF Result Cards** — Official layout with QR verification codes
- 🤖 **CAPTCHA Protection** — Prevents bot attacks on result queries
- 📱 **Fully Responsive** — Premium UI on desktop, tablet, and mobile
- 💰 **Zero Hosting Cost** — SQLite3 serverless database

---

## ✨ Features

### 🌐 Public Portal
| Feature | Description |
|---------|-------------|
| Quick Result Search | Search by Roll Number with program and session filters |
| CAPTCHA Security | 5-character alphanumeric verification to block bots |
| PDF Result Card | Official print-ready card with QR verification code |
| Auto GPA Calculation | Midterm (30%) + Final (70%) with distinction badges |

### 🎒 Student Dashboard
| Feature | Description |
|---------|-------------|
| CGPA Tracker | Real-time cumulative GPA with evaluation ratings |
| Attendance Monitor | Semester attendance percentage tracking |
| Fee Status | All-clear or pending status indicator |
| Notifications | Live exam announcements and datesheet alerts |
| Marks Preview | Inline tabular current semester grades |

### 👨‍🏫 Teacher Portal
| Feature | Description |
|---------|-------------|
| Class Roster | Auto-detects assigned courses with details |
| Student Lists | Enrolled students with real-time class size counters |
| Marks Entry | Direct marks input connected to result database |

### 🛡️ Admin Control Panel
| Feature | Description |
|---------|-------------|
| Department Stats | Real-time student, faculty, and results counters |
| User Management | Register students, teachers; audit accounts |
| Result Publishing | Controlled release — draft → published workflow |
| Notifications | Post department-wide exam notices |
| Exam Scheduler | Create and manage exam sessions |

---

## 🛠️ Tech Stack

| Layer | Technology |
|-------|-----------|
| **Frontend** | HTML5, Vanilla CSS (HSL Variables), JavaScript ES6+ |
| **Backend** | Node.js, Express.js v5.2.1 |
| **Database** | SQLite3 (Serverless) |
| **Auth** | JSON Web Tokens (JWT), bcryptjs |
| **Icons** | Phosphor Icons |
| **Fonts** | Google Fonts (Inter) |

---

## 🏗️ Architecture

The application follows a **3-Tier MVC Architecture**:

```
┌──────────────────┐     HTTP API Requests     ┌───────────────────┐
│  Browser Client  │ ◄═══════════════════════► │ Express.js Server │
│ (Student/Teacher)│       JSON Responses       │  (Node.js App)    │
└──────────────────┘                            └───────────────────┘
                                                         │
                                                SQLite Database Queries
                                                         │
                                                         ▼
                                                ┌───────────────────┐
                                                │ SQLite3 Database  │
                                                │  (database.db)    │
                                                └───────────────────┘
```

---

## 🗄️ Database ERD

```
┌───────────┐       1:1       ┌────────────┐        1:N       ┌──────────┐
│  USERS    │◄───────────────►│  STUDENTS  │◄────────────────►│  RESULTS │
├───────────┤                 ├────────────┤                  ├──────────┤
│ PK: id    │                 │ PK: id     │                  │ PK: id         │
│ username  │                 │ FK: user_id│                  │ FK: student_id │
│ email     │                 │ roll_number│                  │ FK: class_id   │
│ password  │                 │ program    │                  │ FK: exam_id    │
│ role      │                 │ semester   │                  │ marks_obtained │
└───────────┘                 │ cgpa       │                  │ status         │
     │                        └────────────┘                  └──────────┘
     │ 1:1                                                         │
     ▼                                                             │
┌───────────┐         1:N                                          │
│  TEACHERS │ ◄──────── ┌──────────┐                               │
├───────────┤           │ CLASSES  │  ◄────────────────────────────┘
│ PK: id    │           ├──────────┤        N:1
│ FK: user_id│          │ PK: id        │
│ employee_id│          │ subject_name  │       ┌──────────────┐
│ faculty_type│         │ subject_code  │       │ NOTIFICATIONS│
└───────────┘           │ program       │       ├──────────────┤
                        │ semester      │       │ PK: id       │
                        │ credit_hours  │       │ date         │
  ┌──────────┐          │ FK: teacher_id│       │ type         │
  │  EXAMS   │          └──────────┘            │ message      │
  ├──────────┤                                  │ target_role  │
  │ PK: id   │                                  └──────────────┘
  │ exam_name│
  │ session  │
  │ status   │
  └──────────┘
```

| Parent Table | Child Table | Relationship | Foreign Key |
|:---|:---|:---|:---|
| `users` | `students` | One-to-One | `students.user_id → users.id` |
| `users` | `teachers` | One-to-One | `teachers.user_id → users.id` |
| `teachers` | `classes` | One-to-Many | `classes.teacher_id → teachers.id` |
| `students` | `results` | One-to-Many | `results.student_id → students.id` |
| `classes` | `results` | One-to-Many | `results.class_id → classes.id` |
| `exams` | `results` | One-to-Many | `results.exam_id → exams.id` |

---

## 🚀 Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) v18+ installed
- [Git](https://git-scm.com/) installed

### Installation

```bash
# 1. Clone the repository
git clone https://github.com/ranaarifdev/smart-examination-result-portal.git

# 2. Navigate to project directory
cd smart-examination-result-portal

# 3. Install dependencies
npm install

# 4. Start the server
npm start
```

### Open in Browser

```
http://localhost:3000
```

> **Note:** The database (`database.db`) is auto-created and seeded with sample data on first startup. No manual database setup is required.

---

## 🧩 Backend Deployment

This project includes a full Node.js backend with SQLite and authentication APIs.

- The backend entry point is `server.js`.
- The SQLite schema and seed data are in `db.js`.
- `Procfile` is included so this app can be deployed on Node-friendly hosts such as Render, Railway, or Heroku.

### Deploy on a Node host

1. Push the repository to GitHub.
2. Connect the repo to your host provider.
3. Use `npm install` and `npm start` as the build/run commands.
4. Ensure the app runs in `NODE_ENV=production` and `PORT` is provided by the host.

> GitHub Pages cannot host the Node backend. Use a server provider for full API and login functionality.

---

## 📡 API Endpoints

| Method | Endpoint | Auth | Description |
|--------|----------|------|-------------|
| `POST` | `/api/auth/login` | ❌ | User login (Student/Teacher/Admin) |
| `POST` | `/api/auth/register` | ❌ | New user registration |
| `GET` | `/api/user/me` | ✅ JWT | Get current authenticated user |
| `GET` | `/api/student/dashboard` | ✅ JWT | Student academic data + notifications |
| `GET` | `/api/student/results` | ✅ JWT | Published exam results for student |
| `GET` | `/api/teacher/classes` | ✅ JWT | Teacher's assigned classes |
| `GET` | `/api/admin/stats` | ✅ JWT | Admin dashboard statistics |
| `GET` | `/api/public/search` | ❌ | Public result lookup by roll number |

---

## 🔑 Default Credentials

The database is pre-seeded with the following test accounts:

| Role | Login ID | Password |
|------|----------|----------|
| **Admin** | `admin@fcet.edu.pk` | `admin123` |
| **Teacher** | `ahmed@fcet.edu.pk` or `EMP-998` | `teacher123` |
| **Student** | `ali@fcet.edu.pk` or `3400002312` | `student123` |

---

## 📁 Project Structure

```
smart-examination-result-portal/
├── public/                          # Frontend static files
│   ├── index.html                   # Homepage — Result search, programs, contact
│   ├── campus_hero.png              # Hero section background image
│   ├── css/
│   │   ├── style.css                # Global styles (HSL design system)
│   │   └── dashboard.css            # Dashboard-specific styles
│   ├── js/
│   │   ├── main.js                  # Central API helper + auth utilities
│   │   └── charts.js                # Dashboard chart/widget logic
│   └── pages/
│       ├── login.html               # Login portal (3 roles)
│       ├── signup.html              # Registration form
│       ├── student-dashboard.html   # Student academic tracker
│       ├── teacher-dashboard.html   # Faculty class management
│       ├── admin-dashboard.html     # Admin control panel
│       └── result.html              # Official PDF result card viewer
├── server.js                        # Express.js server + API routes
├── db.js                            # SQLite3 schema + seed data
├── package.json                     # Node.js dependencies + metadata
├── .gitignore                       # Git ignore rules
├── features_and_functions.txt       # Detailed feature specification
├── project_overview.txt             # Academic project proposal document
└── README.md                        # This file
```

---

## 🌍 SDG Alignment

This project aligns with the United Nations Sustainable Development Goals:

- **SDG 4: Quality Education** — Transparent, instant access to academic performance data empowers students and improves educational outcomes.
- **SDG 9: Industry, Innovation & Infrastructure** — Replacing manual paper-based grading with secure digital infrastructure promotes institutional innovation.

---

## 👥 Team

**Faculty of Computing and Emerging Technology (FCET)**  
Emerson University Multan  
Bosan Road, Multan, Punjab, Pakistan

---

## 📄 License

This project is licensed under the [MIT License](LICENSE).

---

<p align="center">
  Made with ❤️ at Emerson University Multan
</p>
