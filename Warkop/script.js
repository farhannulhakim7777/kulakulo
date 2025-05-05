document.addEventListener('DOMContentLoaded', function () {
    // Mobile Navigation Toggle
    const navToggle = document.getElementById('nav-toggle');
    const navbar = document.getElementById('navbar');

    navToggle.addEventListener('click', () => {
        navbar.classList.toggle('active');
    });

    // Close navbar when clicking a link (mobile)
    const navLinks = document.querySelectorAll('.navbar a');
    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            navbar.classList.remove('active');
        });
    });

    // Scroll Reveal Animation (if ScrollReveal is loaded)
    if (typeof ScrollReveal !== 'undefined') {
        const sr = ScrollReveal({
            origin: 'top',
            distance: '60px',
            duration: 800,
            delay: 60,
        });

        sr.reveal('.hero-content', {});
        sr.reveal('.location-info', { delay: 200 });
        sr.reveal('.map', { delay: 300 });
        sr.reveal('.menu-card', { interval: 100 });
        sr.reveal('.about-card', { interval: 200 });
    }
});

// const navToggle = document.querySelector('.nav-toggle');
// const navbar = document.querySelector('.navbar');

// navToggle.addEventListener('click', () => {
//     navbar.classList.toggle('active');
// });
