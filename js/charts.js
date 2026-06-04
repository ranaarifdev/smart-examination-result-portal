// charts.js - Chart initializations for dashboards

function initStudentChart() {
    const ctx = document.getElementById('performanceChart');
    if (!ctx) return;

    new Chart(ctx, {
        type: 'line',
        data: {
            labels: ['Sem 1', 'Sem 2', 'Sem 3', 'Sem 4', 'Sem 5'],
            datasets: [{
                label: 'CGPA Progression',
                data: [3.2, 3.4, 3.1, 3.6, 3.8],
                borderColor: '#3b82f6',
                backgroundColor: 'rgba(59, 130, 246, 0.1)',
                borderWidth: 3,
                tension: 0.4,
                fill: true,
                pointBackgroundColor: '#fff',
                pointBorderColor: '#3b82f6',
                pointBorderWidth: 2,
                pointRadius: 5
            }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            plugins: {
                legend: {
                    display: false
                }
            },
            scales: {
                y: {
                    min: 2.0,
                    max: 4.0,
                    grid: {
                        color: 'rgba(0, 0, 0, 0.05)'
                    }
                },
                x: {
                    grid: {
                        display: false
                    }
                }
            }
        }
    });
}

function initAdminCharts() {
    const passRateCtx = document.getElementById('passRateChart');
    if (passRateCtx) {
        new Chart(passRateCtx, {
            type: 'doughnut',
            data: {
                labels: ['Pass', 'Fail', 'Supply'],
                datasets: [{
                    data: [85, 10, 5],
                    backgroundColor: ['#10b981', '#ef4444', '#f59e0b'],
                    borderWidth: 0
                }]
            },
            options: {
                responsive: true,
                maintainAspectRatio: false,
                cutout: '70%',
                plugins: {
                    legend: {
                        position: 'bottom'
                    }
                }
            }
        });
    }

    const programCtx = document.getElementById('programEnrollmentChart');
    if (programCtx) {
        new Chart(programCtx, {
            type: 'bar',
            data: {
                labels: ['CS', 'IT', 'DS', 'SE', 'AI', 'CYS'],
                datasets: [{
                    label: 'Students Enrolled',
                    data: [1200, 850, 600, 950, 500, 400],
                    backgroundColor: '#3b82f6',
                    borderRadius: 5
                }]
            },
            options: {
                responsive: true,
                maintainAspectRatio: false,
                plugins: {
                    legend: {
                        display: false
                    }
                },
                scales: {
                    y: {
                        beginAtZero: true,
                        grid: {
                            color: 'rgba(0, 0, 0, 0.05)'
                        }
                    },
                    x: {
                        grid: {
                            display: false
                        }
                    }
                }
            }
        });
    }
}

document.addEventListener('DOMContentLoaded', () => {
    // Check if Chart.js is loaded
    if (typeof Chart !== 'undefined') {
        initStudentChart();
        initAdminCharts();
    }
});
