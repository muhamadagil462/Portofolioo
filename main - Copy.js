document.addEventListener('DOMContentLoaded', () => {
    // Navbar Toggler untuk Responsivitas
    const navBurger = document.querySelector('.burger');
    const navLinks = document.querySelector('.nav-links');
    const navLinkItems = document.querySelectorAll('.nav-links li');

    navBurger.addEventListener('click', () => {
        // Toggle Nav
        navLinks.classList.toggle('nav-active');

        // Animate Links
        navLinkItems.forEach((link, index) => {
            if (link.style.animation) {
                link.style.animation = '';
            } else {
                link.style.animation = `navLinkFade 0.5s ease forwards ${index / 7 + 0.3}s`;
            }
        });

        // Burger Animation
        navBurger.classList.toggle('toggle');
    });

    // Menutup Navbar saat link diklik
    navLinks.querySelectorAll('a').forEach(link => {
        link.addEventListener('click', () => {
            if (navLinks.classList.contains('nav-active')) {
                navLinks.classList.remove('nav-active');
                navBurger.classList.remove('toggle');
                navLinkItems.forEach(link => {
                    link.style.animation = ''; // Reset animation
                });
            }
        });
    });

    // Navbar Background Change on Scroll
    const navbar = document.querySelector('.navbar');
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
    });

    // Animasi Scroll Reveal (Opsional: menggunakan Intersection Observer API untuk performa lebih baik)
    const sections = document.querySelectorAll('.section');

    const observerOptions = {
        threshold: 0.15 // Persentase elemen yang terlihat untuk memicu animasi
    };

    const sectionObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('fade-in');
                observer.unobserve(entry.target); // Hentikan observasi setelah animasi pertama
            }
        });
    }, observerOptions);

    sections.forEach(section => {
        section.classList.add('hidden-section'); // Sembunyikan secara default
        sectionObserver.observe(section);
    });
});