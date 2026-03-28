/**
 * Rambla Properties - Centralized Mobile Logic
 * Handles animation restoration, counter triggers, and smooth transitions on mobile.
 */

document.addEventListener('DOMContentLoaded', () => {
    const isMobile = window.innerWidth <= 991;

    // 1. Zoom-on-Scroll Restoration
    const initZoomObserver = () => {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('smooth-zoom');
                    // Add the class manually to ensure CSS transition kicks in
                    entry.target.style.opacity = '1';
                    entry.target.style.transform = 'scale(1)';
                }
            });
        }, { threshold: 0.15 });

        document.querySelectorAll('.zoom-target').forEach(el => {
            // Set initial state for JS-based reveal
            el.style.opacity = '0';
            el.style.transform = 'scale(0.92)';
            el.style.transition = 'opacity 1.2s ease-out, transform 1.2s ease-out';
            observer.observe(el);
        });
    };

    // 2. Counter Animation Parity
    const initCounterObserver = () => {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting && !entry.target.dataset.animated) {
                    animateCounter(entry.target);
                    entry.target.dataset.animated = "true";
                }
            });
        }, { threshold: 0.1 }); // More sensitive trigger

        // Target both the simplified mobile counters and any others
        document.querySelectorAll('.counter-number, [id^="projects-delivered"], .h4.text-white.dex-hide, .h3.text-white:last-child').forEach(el => {
            if (el.innerText.match(/\d+/)) {
                observer.observe(el);
            }
        });
    };

    const animateCounter = (el) => {
        const text = el.innerText;
        const match = text.match(/(\d+)/);
        if (!match) return;
        
        const target = parseInt(match[0]);
        const suffix = text.replace(match[0], '');
        
        let current = 0;
        const duration = 1500;
        const startTime = performance.now();
        
        const update = (now) => {
            const elapsed = now - startTime;
            const progress = Math.min(elapsed / duration, 1);
            // Ease out quad
            const easedProgress = progress * (2 - progress);
            
            current = Math.floor(easedProgress * target);
            el.innerText = current + suffix;
            
            if (progress < 1) {
                requestAnimationFrame(update);
            } else {
                el.innerText = target + suffix;
            }
        };
        requestAnimationFrame(update);
    };

    // 3. Execution Section Parity (Image reveal on scroll)
    const initExecutionObserver = () => {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const img = entry.target.querySelector('img');
                    if (img) {
                        img.style.transform = 'scale(1)';
                        img.style.opacity = '1';
                    }
                }
            });
        }, { threshold: 0.3 });

        document.querySelectorAll('.image-text-wrap').forEach(el => {
            const img = el.querySelector('img');
            if (img) {
                img.style.transform = 'scale(0.95) translateY(10px)';
                img.style.opacity = '0';
                img.style.transition = 'all 0.8s cubic-bezier(0.2, 0.8, 0.2, 1)';
                observer.observe(el);
            }
        });
    };

    // Initialize all
    initZoomObserver();
    initCounterObserver();
    initExecutionObserver();
    
    // Cleanup Webflow IX2 conflicts on mobile
    if (isMobile) {
        document.querySelectorAll('[style*="opacity: 0"], [style*="opacity:0"]').forEach(el => {
            // Only reset if it's a major container likely to cause "white space"
            if (el.classList.contains('project-box') || 
                el.classList.contains('member-collection-item') ||
                el.classList.contains('services-animation-details-wrap')) {
                el.style.opacity = '1';
                el.style.transform = 'none';
            }
        });
        
        // Ensure entrance animations are still elegant
        const entranceObserver = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.style.opacity = '1';
                    entry.target.style.transform = 'translateY(0)';
                }
            });
        }, { threshold: 0.1 });

        document.querySelectorAll('.project-box, .member-collection-item').forEach(el => {
            el.style.opacity = '0';
            el.style.transform = 'translateY(20px)';
            el.style.transition = 'opacity 0.8s ease-out, transform 0.8s ease-out';
            entranceObserver.observe(el);
        });
    }
});
