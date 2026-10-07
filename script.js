/**
 * DOCUMENTACIÓN DEL SCRIPT
 *
 * 1. IntersectionObserver (Animaciones de Scroll):
 * Utiliza la API IntersectionObserver para detectar cuándo
 * un elemento (con clase '.reveal') entra en la pantalla y 
 * le añade la clase 'is-visible' para activar la animación CSS.
 *
 * 2. Navbar Scroll Effect (Efecto de Navbar):
 * Escucha el evento 'scroll'. Si el usuario baja más de
 * 50px, añade la clase '.scrolled' a la navbar para cambiar
 * su fondo de transparente a sólido.
 *
 * 3. Mobile Nav Toggle (Menú Móvil):
 * Escucha el evento 'click' en el botón hamburguesa.
 * Añade/quita la clase '.nav-active' a los enlaces y
 * la clase '.active' al propio botón (para la animación 'X').
 *
 * 4. Copyright Year (Año en Footer):
 * Actualiza automáticamente el año en el footer.
 */

document.addEventListener("DOMContentLoaded", function() {

    // --- 1. Animación de Scroll (IntersectionObserver) ---
    const elementsToReveal = document.querySelectorAll('.reveal');
    const heroContent = document.querySelector('.fade-in');

    const observerOptions = {
        root: null,
        rootMargin: '0px',
        threshold: 0.1
    };

    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('is-visible');
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    elementsToReveal.forEach(element => {
        observer.observe(element);
    });

    if (heroContent) {
        setTimeout(() => {
            heroContent.classList.add('is-visible');
        }, 100);
    }

    // --- 2. Efecto de Scroll en Navbar (NUEVO) ---
    const navbar = document.getElementById('navbar');
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
    });

    // --- 3. Lógica del Menú Móvil (NUEVO) ---
    const navToggle = document.getElementById('nav-toggle');
    const navLinks = document.getElementById('nav-links');

    if (navToggle) {
        navToggle.addEventListener('click', () => {
            navLinks.classList.toggle('nav-active');
            navToggle.classList.toggle('active');
        });
    }

    // Cierra el menú móvil cuando se hace clic en un enlace (buena práctica)
    document.querySelectorAll('.nav-link').forEach(link => {
        link.addEventListener('click', () => {
            if (navLinks.classList.contains('nav-active')) {
                navLinks.classList.remove('nav-active');
                navToggle.classList.remove('active');
            }
        });
    });


    // --- 4. Actualización de Año en Footer ---
    const yearSpan = document.getElementById('currentYear');
    if (yearSpan) {
        yearSpan.textContent = new Date().getFullYear();
    }

});