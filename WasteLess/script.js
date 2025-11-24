// Main JavaScript file for WasteLess

document.addEventListener('DOMContentLoaded', function() {
    // Initialize any global functionality
    
    // Smooth scrolling for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            if (this.getAttribute('href') === '#') {
                e.preventDefault();
                return;
            }
            
            if (this.getAttribute('href').startsWith('#')) {
                e.preventDefault();
                document.querySelector(this.getAttribute('href')).scrollIntoView({
                    behavior: 'smooth'
                });
            }
        });
    });
    
    // Initialize tooltips for icons
    const initTooltips = () => {
        const tooltipElements = document.querySelectorAll('[data-tooltip]');
        tooltipElements.forEach(el => {
            const tooltipText = el.getAttribute('data-tooltip');
            const tooltip = document.createElement('div');
            tooltip.className = 'tooltip hidden absolute z-50 bg-gray-800 text-white text-xs rounded py-1 px-2 bottom-full left-1/2 transform -translate-x-1/2 mb-2';
            tooltip.textContent = tooltipText;
            el.appendChild(tooltip);
            
            el.addEventListener('mouseenter', () => {
                tooltip.classList.remove('hidden');
            });
            
            el.addEventListener('mouseleave', () => {
                tooltip.classList.add('hidden');
            });
        });
    };
    
    // Initialize after feather icons are loaded
    feather.replace({
        onReady: initTooltips
    });
    
    // Detect if user has reduced motion preference
    const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (reducedMotion) {
        document.documentElement.style.setProperty('--animation-duration', '0.001s');
    }
    
    // Track current page for analytics (placeholder)
    console.log(`Current page: ${window.location.pathname}`);
});