// GSAP Animations 
document.addEventListener('DOMContentLoaded', () => {
    
    // Register GSAP plugins
    gsap.registerPlugin(ScrollTrigger);

    // Hero Section Animations
    const heroTl = gsap.timeline({ delay: 0.5 });
    
    heroTl
        .from('.hero-content h1', {
            duration: 1,
            y: 100,
            opacity: 0,
            ease: 'power3.out'
        })
        .from('.hero-subtitle', {
            duration: 0.8,
            y: 50,
            opacity: 0,
            ease: 'power2.out'
        }, '-=0.6')
        .from('.hero-description', {
            duration: 0.8,
            y: 30,
            opacity: 0,
            ease: 'power2.out'
        }, '-=0.4')
        .from('.hero-buttons .btn-primary', {
            duration: 0.6,
            x: -50,
            opacity: 0,
            ease: 'power2.out'
        }, '-=0.3')
        .from('.hero-buttons .btn-secondary', {
            duration: 0.6,
            x: 50,
            opacity: 0,
            ease: 'power2.out'
        }, '-=0.5')
        .from('.hero-image img', {
            duration: 1.2,
            scale: 0.8,
            opacity: 0,
            ease: 'power3.out'
        }, '-=1');

    // Navigation Animation on Scroll
    ScrollTrigger.create({
        trigger: '.hero',
        start: 'bottom center',
        onToggle: self => {
            gsap.to('.navbar', {
                duration: 0.3,
                y: self.isActive ? -100 : 0,
                ease: 'power2.out'
            });
        }
    });

    // Section Animations
    gsap.utils.toArray('section:not(.hero)').forEach(section => {
        const sectionTitle = section.querySelector('.section-title');
        
        if (sectionTitle) {
            gsap.from(sectionTitle, {
                duration: 1,
                y: 50,
                opacity: 0,
                ease: 'power3.out',
                scrollTrigger: {
                    trigger: sectionTitle,
                    start: 'top 80%',
                    end: 'bottom 20%',
                    toggleActions: 'play none none none'
                }
            });
        }
    });

    // Skills Animation
    gsap.utils.toArray('.skill-category').forEach((card, index) => {
        gsap.from(card, {
            duration: 0.8,
            y: 60,
            opacity: 0,
            delay: index * 0.2,
            ease: 'power2.out',
            scrollTrigger: {
                trigger: card,
                start: 'top 85%',
                toggleActions: 'play none none none'
            }
        });

        // Skill tags animation
        const skillTags = card.querySelectorAll('.skill-tag');
        gsap.from(skillTags, {
            duration: 0.5,
            scale: 0,
            opacity: 0,
            stagger: 0.1,
            ease: 'back.out(1.7)',
            scrollTrigger: {
                trigger: card,
                start: 'top 75%',
                toggleActions: 'play none none none'
            }
        });
    });

    // Projects Animation
    gsap.utils.toArray('.project-card').forEach((card) => {
        const tl = gsap.timeline({
            scrollTrigger: {
                trigger: card,
                start: 'top 80%',
                toggleActions: 'play none none none'
            }
        });

        tl.from(card, {
            duration: 0.8,
            y: 80,
            opacity: 0,
            ease: 'power3.out'
        })
        .from(card.querySelector('.project-image'), {
            duration: 1,
            scale: 1.3,
            ease: 'power2.out'
        }, '-=0.8')
        .from(card.querySelectorAll('.project-tech span'), {
            duration: 0.4,
            y: 20,
            opacity: 0,
            stagger: 0.1,
            ease: 'power2.out'
        }, '-=0.3');
    });

    // Timeline Animation
    gsap.utils.toArray('.timeline-item').forEach((item, index) => {
        const isEven = index % 2 === 0;
        
        gsap.from(item.querySelector('.timeline-content'), {
            duration: 0.8,
            x: isEven ? -100 : 100,
            opacity: 0,
            ease: 'power3.out',
            scrollTrigger: {
                trigger: item,
                start: 'top 80%',
                toggleActions: 'play none none none'
            }
        });
    });

    // Stats Counter Animation
    ScrollTrigger.create({
        trigger: '.about-stats',
        start: 'top 70%',
        onEnter: () => {
            gsap.utils.toArray('.stat-item').forEach((stat, index) => {
                gsap.from(stat, {
                    duration: 0.6,
                    scale: 0.8,
                    opacity: 0,
                    delay: index * 0.2,
                    ease: 'back.out(1.7)'
                });
            });
        }
    });

    // Contact Form Animation
    const formElements = document.querySelectorAll('.form-group');
    gsap.from(formElements, {
        duration: 0.6,
        y: 30,
        opacity: 0,
        stagger: 0.1,
        ease: 'power2.out',
        scrollTrigger: {
            trigger: '.contact-form',
            start: 'top 80%',
            toggleActions: 'play none none none'
        }
    });

    // Parallax Effect for Hero Background
    gsap.to('.hero::before', {
        yPercent: -50,
        ease: 'none',
        scrollTrigger: {
            trigger: '.hero',
            start: 'top bottom',
            end: 'bottom top',
            scrub: true
        }
    });

    // Smooth reveal animation for text content
    gsap.utils.toArray('.about-text p, .contact-info p').forEach(paragraph => {
        gsap.from(paragraph, {
            duration: 0.8,
            y: 30,
            opacity: 0,
            ease: 'power2.out',
            scrollTrigger: {
                trigger: paragraph,
                start: 'top 90%',
                toggleActions: 'play none none none'
            }
        });
    });

    // Button hover animations
    gsap.utils.toArray('.btn-primary, .btn-secondary').forEach(button => {
        button.addEventListener('mouseenter', () => {
            gsap.to(button, {
                duration: 0.3,
                scale: 1.05,
                ease: 'power2.out'
            });
        });

        button.addEventListener('mouseleave', () => {
            gsap.to(button, {
                duration: 0.3,
                scale: 1,
                ease: 'power2.out'
            });
        });
    });
});
