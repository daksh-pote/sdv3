window.addEventListener('DOMContentLoaded', () => {
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                if (entry.target.classList.contains('word-reveal')) {
                    const words = entry.target.querySelectorAll('.word');
                    words.forEach((word, index) => {
                        setTimeout(() => word.classList.add('active'), index * 100);
                    });
                } else {
                    // For fade-in block-level animation
                    entry.target.classList.add('active');
                }

                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.2 });

    function wrapWords(el) {
        const words = el.textContent.trim().split(/\s+/);
        el.innerHTML = words.map(word => `<span class="word">${word}</span>`).join(' ');
    }

    // Setup for both animation types
    document.querySelectorAll('.word-reveal, .fade-in').forEach(el => {
        if (el.classList.contains('word-reveal')) {
            wrapWords(el);
        }
        requestAnimationFrame(() => observer.observe(el));
    });
});