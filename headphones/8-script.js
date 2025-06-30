document.addEventListener('DOMContentLoaded', function () {
    const hamburger = document.querySelector('.hamburger');
    const nav = document.querySelector('.nav');
    const navLinks = document.querySelectorAll('.nav-link');
    const backdrop = document.querySelector('.nav-backdrop');

    function closeMenu() {
        hamburger.classList.remove('active');
        nav.classList.remove('open');
        hamburger.setAttribute('aria-expanded', 'false');
        if (backdrop) {
            backdrop.style.display = 'none';
            backdrop.style.opacity = '0';
            backdrop.style.pointerEvents = 'none';
        }
    }

    hamburger.addEventListener('click', function () {
        const isOpen = hamburger.classList.toggle('active');
        nav.classList.toggle('open');
        hamburger.setAttribute('aria-expanded', isOpen ? 'true' : 'false');
        if (backdrop) {
            if (isOpen) {
                backdrop.style.display = 'block';
                setTimeout(() => {
                    backdrop.style.opacity = '1';
                    backdrop.style.pointerEvents = 'auto';
                }, 10);
            } else {
                backdrop.style.opacity = '0';
                backdrop.style.pointerEvents = 'none';
                setTimeout(() => {
                    backdrop.style.display = 'none';
                }, 300);
            }
        }
    });

    navLinks.forEach(link => {
        link.addEventListener('click', function () {
            if (window.innerWidth <= 480) {
                closeMenu();
            }
        });
    });

    if (backdrop) {
        backdrop.addEventListener('click', closeMenu);
    }

    document.addEventListener('keydown', function (e) {
        if (e.key === 'Escape' && nav.classList.contains('open')) {
            closeMenu();
        }
    });
}); 