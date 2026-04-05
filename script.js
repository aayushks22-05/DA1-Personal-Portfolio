// ===== THEME TOGGLE =====
const toggle = document.getElementById('theme-toggle');
const html   = document.documentElement;

const savedTheme = localStorage.getItem('theme') || 'dark';
applyTheme(savedTheme);

toggle.addEventListener('click', () => {
    const next = html.getAttribute('data-theme') === 'dark' ? 'light' : 'dark';
    applyTheme(next);
    localStorage.setItem('theme', next);
});

function applyTheme(theme) {
    html.setAttribute('data-theme', theme);
    toggle.textContent = theme === 'dark' ? '☀️' : '🌙';
}

// ===== SCROLL REVEAL =====
const sections = document.querySelectorAll('section');

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
        }
    });
}, { threshold: 0.08 });

sections.forEach(s => observer.observe(s));

// ===== SCROLL TO TOP =====
const scrollBtn = document.getElementById('scroll-top');

window.addEventListener('scroll', () => {
    scrollBtn.classList.toggle('show', window.scrollY > 400);
});

scrollBtn.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
});
