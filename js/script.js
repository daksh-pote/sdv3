// Universal word reveal animation - works for any element with 'word-reveal' class
const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('active');
            observer.unobserve(entry.target);
        }
    });
}, { threshold: 0.2 });

document.querySelectorAll('.word-reveal').forEach(el => {
    el.innerHTML = el.textContent.split(' ').map(word => `<span class="word">${word}</span>`).join(' ');
    observer.observe(el);
});