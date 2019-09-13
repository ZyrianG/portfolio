const burger = document.querySelector('.burger');
const nav = document.querySelector('.nav-links');
const navLinks = document.querySelectorAll('.nav-link');

const navToggle = () => { 
    burger.addEventListener('click', () => {
        // Toggle Nav
        nav.classList.toggle('nav-active');

        // Animation
        navLinks.forEach((link, index) => {
            if (link.style.animation) {
                link.style.animation = '';
            } else {
                link.style.animation = `navLinkFade 0.5s ease forwards ${index / 5 + 0.2}s`;
            }
        });

        burger.classList.toggle('toggle');
    });
};

const navOutsideClick = () => {
    document.addEventListener('click', (event) => {
        if (event.target.closest('.nav')) return;
        if (event.target.closest('.burger')) return;

         nav.classList.remove('nav-active');
    });
};

navToggle();