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

// API Fetch Utility
async function apiFetch(endpoint, options = {}) {
    const token = localStorage.getItem('token');
    const headers = {
        'Content-Type': 'application/json',
        ...options.headers
    };
    if (token) headers['Authorization'] = `Bearer ${token}`;

    const res = await fetch((window.location.protocol === 'file:' ? 'http://localhost:3000' : '') + endpoint, { ...options, headers });
    if (res.status === 401 || res.status === 403) {
        localStorage.removeItem('token');
        window.location.href = 'login.html';
    }
    return res;
}

// Dashboard Initialization
document.addEventListener('DOMContentLoaded', async () => {
    const path = window.location.pathname;

    if (path.includes('student-dashboard.html')) {
        try {
            const res = await apiFetch('/api/student/dashboard');
            const data = await res.json();
            if(data.student) {
                document.querySelector('.page-header h2').innerText = `Welcome back, ${data.student.user_name || 'Student'}! 👋`;
                document.querySelectorAll('.stat-info h2')[0].innerText = data.student.cgpa;
                document.querySelectorAll('.profile-dropdown p')[0].innerText = data.student.user_name || 'Student';
                document.querySelectorAll('.profile-dropdown p')[1].innerText = data.student.program;
            }
        } catch(e) { console.error(e); }
    }

    if (path.includes('admin-dashboard.html')) {
        try {
            const res = await apiFetch('/api/admin/stats');
            const data = await res.json();
            if(data) {
                document.querySelectorAll('.stat-info h2')[0].innerText = data.totalStudents || 0;
                document.querySelectorAll('.stat-info h2')[1].innerText = data.totalTeachers || 0;
                document.querySelectorAll('.stat-info h2')[2].innerText = data.resultsPublished || 0;
            }
        } catch(e) { console.error(e); }
    }
});
