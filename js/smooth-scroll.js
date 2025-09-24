// Enhanced Smooth Scrolling Implementation
document.addEventListener('DOMContentLoaded', () => {
    
    // Enhanced smooth scrolling for navigation links
    const navLinks = document.querySelectorAll('a[href^="#"]');
    
    navLinks.forEach(link => {
        link.addEventListener('click', e => {
            e.preventDefault();
            
            const targetId = link.getAttribute('href');
            const targetSection = document.querySelector(targetId);
            
            if (targetSection) {
                // Get navbar height for offset
                const navbarHeight = document.querySelector('.navbar').offsetHeight;
                const targetPosition = targetSection.getBoundingClientRect().top + window.scrollY - navbarHeight;
                
                // Custom smooth scroll with easing
                smoothScrollTo(targetPosition, 1000);
            }
        });
    });
    
    // Custom smooth scroll function with easing
    const smoothScrollTo = (targetY, duration = 800) => {
        const startY = window.scrollY;
        const distance = targetY - startY;
        const startTime = performance.now();
        
        const scroll = currentTime => {
            const elapsed = currentTime - startTime;
            const progress = Math.min(elapsed / duration, 1);
            
            // Easing function (ease-in-out cubic)
            const ease = progress < 0.5 
                ? 4 * progress * progress * progress 
                : 1 - Math.pow(-2 * progress + 2, 3) / 2;
            
            window.scrollTo(0, startY + distance * ease);
            
            if (progress < 1) {
                requestAnimationFrame(scroll);
            }
        };
        
        requestAnimationFrame(scroll);
    };
    
    // Scroll-triggered animations with throttling
    let scrollTimeout;
    
    const handleScroll = () => {
        if (scrollTimeout) {
            cancelAnimationFrame(scrollTimeout);
        }
        
        scrollTimeout = requestAnimationFrame(() => {
            updateScrollProgress();
        });
    };
    
    const updateScrollProgress = () => {
        const scrolled = window.scrollY;
        const maxScroll = document.body.scrollHeight - window.innerHeight;
        const scrollProgress = scrolled / maxScroll;
        
        // Update any scroll-based elements
        document.documentElement.style.setProperty('--scroll-progress', scrollProgress);
    };
    
    // Optimized scroll listener
    let isScrolling = false;
    
    window.addEventListener('scroll', () => {
        if (!isScrolling) {
            requestAnimationFrame(handleScroll);
            isScrolling = true;
        }
        
        setTimeout(() => {
            isScrolling = false;
        }, 16); // ~60fps
    });
    
    // Intersection Observer for lazy loading and animations
    const observerOptions = {
        root: null,
        rootMargin: '50px',
        threshold: 0.1
    };
    
    const fadeInObserver = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animate-fade-in');
                
                // Add staggered animation for child elements
                const children = entry.target.querySelectorAll('.animate-child');
                children.forEach((child, index) => {
                    setTimeout(() => {
                        child.classList.add('animate-fade-in');
                    }, index * 100);
                });
            }
        });
    }, observerOptions);
    
    // Observe elements for fade-in animation
    document.querySelectorAll('.skill-category, .project-card, .timeline-item').forEach(el => {
        fadeInObserver.observe(el);
    });
    
    // Smooth scroll to top button
    const createScrollToTopButton = () => {
        const button = document.createElement('button');
        button.innerHTML = '↑';
        button.className = 'scroll-to-top';
        button.style.cssText = `
            position: fixed;
            bottom: 20px;
            right: 20px;
            width: 50px;
            height: 50px;
            border-radius: 50%;
            background: linear-gradient(135deg, var(--primary-color), var(--secondary-color));
            color: white;
            border: none;
            font-size: 20px;
            cursor: pointer;
            opacity: 0;
            transform: scale(0.8);
            transition: all 0.3s ease;
            z-index: 1000;
        `;
        
        button.addEventListener('click', () => {
            smoothScrollTo(0, 800);
        });
        
        // Show/hide based on scroll position
        window.addEventListener('scroll', () => {
            if (window.scrollY > 300) {
                button.style.opacity = '1';
                button.style.transform = 'scale(1)';
            } else {
                button.style.opacity = '0';
                button.style.transform = 'scale(0.8)';
            }
        });
        
        document.body.appendChild(button);
        return button;
    };
    
    const scrollToTopBtn = createScrollToTopButton();
});

// CSS for additional animations
const additionalStyles = `
    <style>
        .animate-fade-in {
            animation: fadeInUp 0.8s ease-out forwards;
        }
        
        .animate-child {
            opacity: 0;
            transform: translateY(20px);
            transition: all 0.5s ease-out;
        }
        
        .animate-child.animate-fade-in {
            opacity: 1;
            transform: translateY(0);
        }
        
        @keyframes fadeInUp {
            from {
                opacity: 0;
                transform: translateY(30px);
            }
            to {
                opacity: 1;
                transform: translateY(0);
            }
        }
        
        /* Scroll progress indicator */
        .scroll-progress {
            position: fixed;
            top: 0;
            left: 0;
            width: 100%;
            height: 3px;
            background: linear-gradient(90deg, var(--primary-color), var(--secondary-color));
            transform: scaleX(var(--scroll-progress, 0));
            transform-origin: left;
            z-index: 9999;
            transition: transform 0.2s ease;
        }
    </style>
`;

document.head.insertAdjacentHTML('beforeend', additionalStyles);
