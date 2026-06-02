# 🔐 Smart Examination Result Portal — Login Credentials

## 📍 Access Your Deployed Site

**Live URL:** https://ranaarifdev.github.io/smart-examination-result-portal/

---

## 👨‍🎓 Student Login Credentials

Use these credentials to access the **Student Dashboard**:

| Roll Number | Username | Email | Password | Program | Semester |
|:---|:---|:---|:---|:---|:---|
| `3400002312` | Muhammad Hassan | `hassan.m@fcet.edu.pk` | `student123` | BSCS | 6 |
| `3400002313` | Fatima Khan | `fatima.k@fcet.edu.pk` | `student123` | BSCS | 6 |
| `3400002314` | Usman Ali | `usman.ali@fcet.edu.pk` | `student123` | BSCS | 6 |
| `3400002315` | Ayesha Malik | `ayesha.m@fcet.edu.pk` | `student123` | BSIT | 6 |
| `3400002316` | Ali Raza | `ali.raza@fcet.edu.pk` | `student123` | BSSE | 4 |

**Dashboard Features:**
- View semester results and CGPA
- Track attendance percentage
- Check notifications
- Download result cards (PDF)
- View timetable and course allocation

---

## 👨‍🏫 Teacher Login Credentials

Use these credentials to access the **Teacher Dashboard**:

| Employee ID | Name | Email | Password | Specialization |
|:---|:---|:---|:---|:---|
| `EMP-001` | Dr. Zia Ur Rehman | `zia.rehman@fcet.edu.pk` | `teacher123` | Wireless & Mobile Security |
| `EMP-002` | Dr. Muhammad Rafiq | `rafiq.m@fcet.edu.pk` | `teacher123` | Virtual Systems & Services |
| `EMP-003` | Dr. Hina Khalid | `hina.khalid@fcet.edu.pk` | `teacher123` | Professional Practices |

**Dashboard Features:**
- View assigned classes (Web Engineering, Software Project Management)
- See enrolled students per class
- View student marks
- Enter sessional marks (future implementation)
- Track attendance (future implementation)

---

## 🔐 Admin Login Credentials

Use these credentials to access the **Admin Dashboard**:

| Email | Username | Password |
|:---|:---|:---|
| `admin@fcet.edu.pk` | Super Admin | `admin123` |

**Dashboard Features:**
- View system statistics (total students, teachers, published results)
- Manage recently registered users
- View all student and teacher data
- Access timetable and course allocation data
- Monitor exam status
- Generate gazettes and reports (future implementation)
- Send notices and announcements (future implementation)

---

## 📊 Available Data in Admin Dashboard

The admin dashboard displays:

### Students Table
- All registered students with roll numbers
- Academic program and semester
- Current CGPA

### Teachers Table
- All faculty members with employment IDs
- Faculty type (permanent/contractual)
- Contact information

### Timetable
- Class schedules by day and time
- Program-wise course allocation
- Classroom/lab locations

### Course Allocation
- All offered courses with course codes
- Credit hours information
- Program-wise course assignments

### Notifications
- System-wide notifications
- Exam schedules and deadlines
- Fee submission notices

---

## 🚀 Quick Start Guide

### 1. Access the Portal
- Go to: https://ranaarifdev.github.io/smart-examination-result-portal/
- Or click on the main dashboard link

### 2. Select Your Role
- Choose **Student**, **Teacher**, or **Admin**
- Use the credentials from above

### 3. Login
- Use your **Roll Number** (students), **Employee ID** (teachers), or **Email** (admin)
- Enter your **password**
- Click **Sign In**

### 4. Explore
- Your personalized dashboard loads
- Data is fetched from the browser-based fake backend
- All changes are stored in browser local storage

---

## 💾 Data Storage

- **Frontend**: Browser `localStorage` (session-based)
- **Data Persistence**: Lasts during your browser session
- **Clearing Cache**: Will reset the database to defaults
- **For Production**: Connect to a Node.js backend server with SQLite/PostgreSQL

---

## 🖥️ Local Development

To run the full Node.js backend locally:

```bash
cd "D:\websites projects\Campus Management system"
npm install
npm start
```

Access at `http://localhost:3000`

Same credentials work for the local server.

---

## 🔄 GitHub Pages vs Local Server

| Feature | GitHub Pages | Local Server |
|:---|:---|:---|
| **Hosting** | Free (GitHub) | Your machine |
| **Backend** | Browser-only fake API | Full Node.js + SQLite |
| **Data Persistence** | Browser localStorage | SQLite database |
| **Features Available** | Core dashboards + static pages | All features + admin controls |
| **Best For** | Demo, portfolio, static preview | Full production use |

---

## 📝 Notes

1. **Demo Data**: All credentials have sample data pre-loaded
2. **Password Format**: Simple passwords for demo purposes (use bcrypt in production)
3. **JWT Tokens**: Auto-generated on login and stored in localStorage
4. **No Real Email**: Email verification is not implemented in demo mode
5. **API Mock**: All API calls are intercepted and responded to by `public/js/main.js`

---

## 🛠️ For Developers

### Project Structure
```
smart-examination-result-portal/
├── public/                    # Static frontend (GitHub Pages)
│   ├── index.html            # Landing page
│   ├── pages/                # Dashboard pages
│   │   ├── login.html
│   │   ├── signup.html
│   │   ├── student-dashboard.html
│   │   ├── teacher-dashboard.html
│   │   └── admin-dashboard.html
│   ├── css/                  # Stylesheets
│   ├── js/                   # Frontend logic
│   │   └── main.js           # Fake backend + shared logic
│   └── downloads/            # Sample documents
├── server.js                 # Node.js Express server
├── db.js                     # SQLite schema + seed data
├── package.json
└── README.md
```

### Key Files

- **main.js**: Contains `apiFetch()`, `fakeFetch()`, and `initFakeDatabase()`
- **server.js**: Express routes for production deployment
- **db.js**: SQLite tables and initial data seed

---

## ❓ Troubleshooting

| Issue | Solution |
|:---|:---|
| Can't login | Check username/email and password in tables above |
| Data lost after refresh | Browser cache was cleared; data resets to defaults |
| GitHub Pages not loading | Ensure repo is public; go to Settings → Pages and enable |
| Want to persist data | Deploy Node backend on Render/Railway and connect frontend API |

---

## 📞 Support

For issues or feature requests, open an issue on GitHub:
https://github.com/ranaarifdev/smart-examination-result-portal/issues

---

**Last Updated:** June 3, 2026  
**Status:** ✅ Ready for GitHub Pages deployment
