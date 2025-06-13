window.addEventListener('DOMContentLoaded', () => {
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const words = entry.target.querySelectorAll('.word');
                words.forEach((word, index) => {
                    setTimeout(() => word.classList.add('active'), index * 100);
                });
                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.2 });

    function wrapWords(el) {
        const words = el.textContent.trim().split(/\s+/);
        el.innerHTML = words.map(word => `<span class="word">${word}</span>`).join(' ');
    }

    document.querySelectorAll('.word-reveal').forEach(el => {
        wrapWords(el);
        requestAnimationFrame(() => observer.observe(el));
    });
});
