// Enhanced scroll animations
document.addEventListener('DOMContentLoaded', function() {
    // Initialize scroll reveal animations
    const sections = document.querySelectorAll('.reveal');
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('active');
                entry.target.classList.add('fade-in');
            }
        });
    }, { 
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    });
    
    sections.forEach(section => {
        observer.observe(section);
    });
    
    // Horizontal table navigation
    const tableNavButtons = document.querySelectorAll('.table-nav-btn');
    const tableContainers = document.querySelectorAll('.horizontal-table-container');
    
    tableNavButtons.forEach(button => {
        button.addEventListener('click', function() {
            const targetTable = this.getAttribute('data-table');
            
            // Update active button
            tableNavButtons.forEach(btn => btn.classList.remove('active'));
            this.classList.add('active');
            
            // Show target table, hide others
            tableContainers.forEach(container => {
                if (container.id === targetTable) {
                    container.classList.add('active');
                } else {
                    container.classList.remove('active');
                }
            });
        });
    });
    
    // Add hover effect to table rows
    const tableRows = document.querySelectorAll('.table-row:not(.header-row)');
    tableRows.forEach(row => {
        row.addEventListener('mouseenter', function() {
            this.style.backgroundColor = 'rgba(100, 255, 218, 0.05)';
        });
        
        row.addEventListener('mouseleave', function() {
            this.style.backgroundColor = '';
        });
    });
    
    // Animated face in logo
    const faceCircle = document.querySelector('.face-circle');
    setInterval(() => {
        faceCircle.style.transform = `scale(${1 + Math.random() * 0.05})`;
        setTimeout(() => {
            faceCircle.style.transform = 'scale(1)';
        }, 300);
    }, 5000);
    
    // Update status indicator
    const statusDot = document.querySelector('.status-dot');
    const statusText = document.querySelector('.status-indicator span');
    
    const statusMessages = [
        "Face Recognition Active",
        "Scanning for Faces",
        "Processing Images",
        "Attendance Updated",
        "Database Synchronized"
    ];
    
    let statusIndex = 0;
    setInterval(() => {
        statusIndex = (statusIndex + 1) % statusMessages.length;
        statusText.textContent = statusMessages[statusIndex];
        
        // Add a quick blink to the dot
        statusDot.style.opacity = '0.3';
        setTimeout(() => {
            statusDot.style.opacity = '1';
        }, 200);
    }, 4000);
    
    // Add click animation to cards
    const cards = document.querySelectorAll('.feature-card, .overview-card, .metric-card, .risk-card, .budget-item');
    cards.forEach(card => {
        card.addEventListener('click', function() {
            this.style.transform = 'translateY(-5px) scale(1.02)';
            setTimeout(() => {
                this.style.transform = '';
            }, 300);
        });
    });
    
    // Add data labels for responsive table cells
    if (window.innerWidth <= 768) {
        const headerCells = document.querySelectorAll('.header-row .table-cell');
        const tableCells = document.querySelectorAll('.table-row:not(.header-row) .table-cell');
        
        if (headerCells.length > 0) {
            // Get header labels
            const headerLabels = Array.from(headerCells).map(cell => cell.textContent);
            
            // Apply data labels to each cell
            tableCells.forEach((cell, index) => {
                const rowIndex = Math.floor(index / headerLabels.length);
                const colIndex = index % headerLabels.length;
                cell.setAttribute('data-label', headerLabels[colIndex]);
            });
        }
    }
    
    // Add parallax effect to background
    window.addEventListener('scroll', function() {
        const scrolled = window.pageYOffset;
        const faceOverlay = document.querySelector('.face-scan-overlay');
        
        if (faceOverlay) {
            faceOverlay.style.transform = `translateY(${scrolled * 0.02}px) rotate(${scrolled * 0.001}deg)`;
        }
    });
    
    // Initialize first table as active
    if (tableContainers.length > 0) {
        tableContainers[0].classList.add('active');
    }
});