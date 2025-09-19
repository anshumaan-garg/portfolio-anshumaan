document.addEventListener('DOMContentLoaded', () => {
    const mobileMenuBtn = document.querySelector('.mobile-menu-btn');
    const navLinks = document.querySelector('.nav-links');
    
    if (mobileMenuBtn) {  // Check if button exists
        mobileMenuBtn.addEventListener('click', (e) => {
            e.stopPropagation();  // Prevent document click from firing
            navLinks.classList.toggle('active');
            const icon = mobileMenuBtn.querySelector('i');
            icon.classList.toggle('fa-bars');
            icon.classList.toggle('fa-times');
        });
    }

    // Close menu when clicking anywhere else
    document.addEventListener('click', (e) => {
        if (navLinks.classList.contains('active') && !e.target.closest('.navbar')) {
            navLinks.classList.remove('active');
            const icon = mobileMenuBtn.querySelector('i');
            if (icon.classList.contains('fa-times')) {
                icon.classList.replace('fa-times', 'fa-bars');
            }
        }
    });

    // Prevent menu from staying open on resize
    window.addEventListener('resize', () => {
        if (window.innerWidth > 768 && navLinks.classList.contains('active')) {
            navLinks.classList.remove('active');
            const icon = mobileMenuBtn.querySelector('i');
            icon.classList.replace('fa-times', 'fa-bars');
        }
    });

    // Ensure all links, including "Work Experience," are visible
    navLinks.querySelectorAll('a').forEach(link => {
        link.style.display = 'block';
    });
});