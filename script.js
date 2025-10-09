// Vercel Speed Insights (versión CDN)
(function() {
    var script = document.createElement('script');
    script.src = 'https://vitals.vercel-insights.com/v1/vitals.js';
    script.onload = function() {
        if (window.vitals) {
            window.vitals.trackCLS(); 
            window.vitals.trackFID();
            window.vitals.trackFCP();
            window.vitals.trackLCP();
            window.vitals.trackTTFB();
        }
    };
    document.head.appendChild(script);
})();

// Navegación móvil
document.addEventListener('DOMContentLoaded', function() {
    const navToggle = document.querySelector('.nav-toggle');
    const navMenu = document.querySelector('.nav-menu');
    const header = document.querySelector('.header');

    // Toggle menú móvil
    navToggle.addEventListener('click', function() {
        navMenu.classList.toggle('active');
        navToggle.classList.toggle('active');
        
        // Prevenir scroll del body cuando el menú está abierto
        if (navMenu.classList.contains('active')) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = '';
        }
    });

    // Cerrar menú al hacer click en un enlace
    document.querySelectorAll('.nav-menu a').forEach(link => {
        link.addEventListener('click', () => {
            navMenu.classList.remove('active');
            navToggle.classList.remove('active');
            document.body.style.overflow = '';
        });
    });

    // Header transparente y efecto del logo al hacer scroll
    let lastScrollY = window.scrollY;
    let isScrollingDown = false;
    
    window.addEventListener('scroll', function() {
        const currentScrollY = window.scrollY;
        
        // Determinar dirección del scroll
        isScrollingDown = currentScrollY > lastScrollY;
        
        // Efecto del header
        if (currentScrollY > 100) {
            header.style.background = 'rgba(10, 10, 10, 0.98)';
        } else {
            header.style.background = 'rgba(10, 10, 10, 0.95)';
        }
        
        // Efecto del logo
        if (currentScrollY > 50 && isScrollingDown) {
            // Scroll hacia abajo: logo sube y se alinea con el header
            header.classList.add('scrolled');
        } else if (currentScrollY <= 50) {
            // Scroll hacia arriba desde la parte superior: logo vuelve a su posición original
            header.classList.remove('scrolled');
        }
        
        lastScrollY = currentScrollY;
    });

    // Smooth scroll para enlaces internos
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                const headerHeight = header.offsetHeight;
                const targetPosition = target.offsetTop - headerHeight;
                
                window.scrollTo({
                    top: targetPosition,
                    behavior: 'smooth'
                });
            }
        });
    });

    // Animaciones al hacer scroll
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, observerOptions);

    // Observar elementos para animaciones
    document.querySelectorAll('.service-card, .about-content, .location-info, .contact-content').forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(30px)';
        el.style.transition = 'all 0.6s ease';
        observer.observe(el);
    });

    // Formulario de contacto
    const contactForm = document.getElementById('contactForm');
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Simular envío del formulario
            const submitBtn = this.querySelector('button[type="submit"]');
            const originalText = submitBtn.textContent;
            
            submitBtn.textContent = 'Enviando...';
            submitBtn.disabled = true;
            
            // Simular delay de envío
            setTimeout(() => {
                // Aquí iría la lógica real de envío del formulario
                showNotification('¡Mensaje enviado con éxito! Te contactaremos pronto.', 'success');
                
                // Resetear formulario
                contactForm.reset();
                
                // Restaurar botón
                submitBtn.textContent = originalText;
                submitBtn.disabled = false;
            }, 2000);
        });
    }

    // Sistema de notificaciones
    function showNotification(message, type = 'info') {
        const notification = document.createElement('div');
        notification.className = `notification notification-${type}`;
        notification.innerHTML = `
            <div class="notification-content">
                <span class="notification-message">${message}</span>
                <button class="notification-close">&times;</button>
            </div>
        `;
        
        // Agregar estilos de notificación
        notification.style.cssText = `
            position: fixed;
            top: 20px;
            right: 20px;
            background: ${type === 'success' ? '#4CAF50' : '#2196F3'};
            color: white;
            padding: 1rem 1.5rem;
            border-radius: 10px;
            box-shadow: 0 5px 15px rgba(0,0,0,0.3);
            z-index: 10000;
            transform: translateX(400px);
            transition: transform 0.3s ease;
            max-width: 300px;
        `;
        
        document.body.appendChild(notification);
        
        // Animar entrada
        setTimeout(() => {
            notification.style.transform = 'translateX(0)';
        }, 100);
        
        // Botón cerrar
        notification.querySelector('.notification-close').addEventListener('click', () => {
            notification.style.transform = 'translateX(400px)';
            setTimeout(() => {
                document.body.removeChild(notification);
            }, 300);
        });
        
        // Auto-remover después de 5 segundos
        setTimeout(() => {
            if (document.body.contains(notification)) {
                notification.style.transform = 'translateX(400px)';
                setTimeout(() => {
                    if (document.body.contains(notification)) {
                        document.body.removeChild(notification);
                    }
                }, 300);
            }
        }, 5000);
    }

    // Efectos hover para las tarjetas de servicios
    document.querySelectorAll('.service-card').forEach(card => {
        card.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-10px) scale(1.02)';
        });
        
        card.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0) scale(1)';
        });
    });

    // Contador animado para las estadísticas
    function animateCounter(element, target, duration = 2000) {
        let start = 0;
        const increment = target / (duration / 16);
        
        function updateCounter() {
            start += increment;
            if (start < target) {
                element.textContent = Math.floor(start) + '+';
                requestAnimationFrame(updateCounter);
            } else {
                element.textContent = target + '+';
            }
        }
        
        updateCounter();
    }

    // Observar estadísticas para animar contadores
    const statsObserver = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const statNumber = entry.target.querySelector('.stat-number');
                const target = parseInt(statNumber.textContent);
                animateCounter(statNumber, target);
                statsObserver.unobserve(entry.target);
            }
        });
    }, { threshold: 0.5 });

    document.querySelectorAll('.stat').forEach(stat => {
        statsObserver.observe(stat);
    });

    // Efecto parallax suave para el hero
    window.addEventListener('scroll', function() {
        const scrolled = window.pageYOffset;
        const hero = document.querySelector('.hero');
        if (hero) {
            const rate = scrolled * -0.5;
            hero.style.transform = `translateY(${rate}px)`;
        }
    });

    // Lazy loading para imágenes
    const imageObserver = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const img = entry.target;
                img.src = img.dataset.src;
                img.classList.remove('lazy');
                imageObserver.unobserve(img);
            }
        });
    });

    document.querySelectorAll('img[data-src]').forEach(img => {
        imageObserver.observe(img);
    });

    // Efecto de escritura para el título principal
    function typeWriter(element, text, speed = 100) {
        let i = 0;
        element.textContent = '';
        
        function type() {
            if (i < text.length) {
                element.textContent += text.charAt(i);
                i++;
                setTimeout(type, speed);
            }
        }
        
        type();
    }

    // Iniciar efecto de escritura cuando el hero esté visible
    const heroObserver = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const heroTitle = entry.target.querySelector('.hero-title');
                if (heroTitle && !heroTitle.classList.contains('typed')) {
                    heroTitle.classList.add('typed');
                    const originalText = heroTitle.textContent;
                    typeWriter(heroTitle, originalText, 150);
                }
            }
        });
    }, { threshold: 0.5 });

    const hero = document.querySelector('.hero');
    if (hero) {
        heroObserver.observe(hero);
    }

    // Preloader
    window.addEventListener('load', function() {
        const preloader = document.querySelector('.preloader');
        if (preloader) {
            preloader.style.opacity = '0';
            setTimeout(() => {
                preloader.style.display = 'none';
            }, 500);
        }
    });

    // Carrusel de imágenes
    initCarousel();

    // Botón de WhatsApp flotante
    const floatingWhatsApp = document.createElement('div');
    floatingWhatsApp.innerHTML = `
        <a href="https://wa.me/34671210269" target="_blank" class="floating-whatsapp">
            <i class="fab fa-whatsapp"></i>
        </a>
    `;
    
    floatingWhatsApp.style.cssText = `
        position: fixed;
        bottom: 30px;
        right: 30px;
        z-index: 1000;
    `;
    
    const floatingWhatsAppLink = floatingWhatsApp.querySelector('.floating-whatsapp');
    floatingWhatsAppLink.style.cssText = `
        display: flex;
        align-items: center;
        justify-content: center;
        width: 60px;
        height: 60px;
        background: #25d366;
        color: white;
        border-radius: 50%;
        text-decoration: none;
        font-size: 2rem;
        box-shadow: 0 5px 15px rgba(37, 211, 102, 0.4);
        transition: all 0.3s ease;
        animation: pulse 2s infinite;
    `;
    
    floatingWhatsAppLink.addEventListener('mouseenter', function() {
        this.style.transform = 'scale(1.1)';
        this.style.boxShadow = '0 8px 25px rgba(37, 211, 102, 0.6)';
    });
    
    floatingWhatsAppLink.addEventListener('mouseleave', function() {
        this.style.transform = 'scale(1)';
        this.style.boxShadow = '0 5px 15px rgba(37, 211, 102, 0.4)';
    });
    
    document.body.appendChild(floatingWhatsApp);
    
    // Animación de pulso para WhatsApp
    const style = document.createElement('style');
    style.textContent = `
        @keyframes pulse {
            0% {
                box-shadow: 0 0 0 0 rgba(37, 211, 102, 0.7);
            }
            70% {
                box-shadow: 0 0 0 10px rgba(37, 211, 102, 0);
            }
            100% {
                box-shadow: 0 0 0 0 rgba(37, 211, 102, 0);
            }
        }
    `;
    document.head.appendChild(style);
});

// Optimización de rendimiento
let ticking = false;

function updateOnScroll() {
    // Aquí irían las actualizaciones que requieren scroll
    ticking = false;
}

function requestTick() {
    if (!ticking) {
        requestAnimationFrame(updateOnScroll);
        ticking = true;
    }
}

window.addEventListener('scroll', requestTick);

// Función del carrusel
function initCarousel() {
    const carousel = document.querySelector('.carousel-container');
    if (!carousel) return;

    const slides = carousel.querySelectorAll('.carousel-slide');
    const indicators = carousel.querySelectorAll('.indicator');
    const prevBtn = carousel.querySelector('.carousel-btn.prev');
    const nextBtn = carousel.querySelector('.carousel-btn.next');
    
    let currentSlide = 0;
    let isTransitioning = false;
    let autoPlayInterval;

    // Función para mostrar slide específico
    function showSlide(index) {
        if (isTransitioning) return;
        
        isTransitioning = true;
        
        // Remover clase active de slide actual
        slides[currentSlide].classList.remove('active');
        indicators[currentSlide].classList.remove('active');
        
        // Actualizar índice
        currentSlide = index;
        if (currentSlide >= slides.length) currentSlide = 0;
        if (currentSlide < 0) currentSlide = slides.length - 1;
        
        // Agregar clase active al nuevo slide
        slides[currentSlide].classList.add('active');
        indicators[currentSlide].classList.add('active');
        
        // Resetear transición después de un delay
        setTimeout(() => {
            isTransitioning = false;
        }, 600);
    }

    // Función para siguiente slide
    function nextSlide() {
        showSlide(currentSlide + 1);
    }

    // Función para slide anterior
    function prevSlide() {
        showSlide(currentSlide - 1);
    }

    // Auto-play del carrusel
    function startAutoPlay() {
        autoPlayInterval = setInterval(nextSlide, 5000); // Cambiar cada 5 segundos
    }

    function stopAutoPlay() {
        clearInterval(autoPlayInterval);
    }

    // Event listeners
    if (nextBtn) {
        nextBtn.addEventListener('click', () => {
            stopAutoPlay();
            nextSlide();
            startAutoPlay();
        });
    }

    if (prevBtn) {
        prevBtn.addEventListener('click', () => {
            stopAutoPlay();
            prevSlide();
            startAutoPlay();
        });
    }

    // Indicadores
    indicators.forEach((indicator, index) => {
        indicator.addEventListener('click', () => {
            stopAutoPlay();
            showSlide(index);
            startAutoPlay();
        });
    });

    // Pausar auto-play al hacer hover
    carousel.addEventListener('mouseenter', stopAutoPlay);
    carousel.addEventListener('mouseleave', startAutoPlay);

    // Touch/swipe support para móviles
    let startX = 0;
    let endX = 0;

    carousel.addEventListener('touchstart', (e) => {
        startX = e.touches[0].clientX;
        stopAutoPlay();
    });

    carousel.addEventListener('touchend', (e) => {
        endX = e.changedTouches[0].clientX;
        const diffX = startX - endX;
        
        if (Math.abs(diffX) > 50) { // Mínimo swipe de 50px
            if (diffX > 0) {
                nextSlide();
            } else {
                prevSlide();
            }
        }
        
        startAutoPlay();
    });

    // Keyboard navigation
    document.addEventListener('keydown', (e) => {
        if (carousel.matches(':hover') || carousel.matches(':focus-within')) {
            if (e.key === 'ArrowLeft') {
                stopAutoPlay();
                prevSlide();
                startAutoPlay();
            } else if (e.key === 'ArrowRight') {
                stopAutoPlay();
                nextSlide();
                startAutoPlay();
            }
        }
    });

    // Iniciar auto-play
    startAutoPlay();

    // Pausar cuando la página no está visible
    document.addEventListener('visibilitychange', () => {
        if (document.hidden) {
            stopAutoPlay();
        } else {
            startAutoPlay();
        }
    });
}
