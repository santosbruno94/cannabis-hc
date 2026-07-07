/* =========================================================
   Bruno Leite Advocacia — comportamento compartilhado
   Hamburger, acordeão de FAQ e reveal-on-scroll.
   Cada bloco é tolerante à ausência dos elementos na página.
   ========================================================= */

/* Hamburger menu */
const hamburger = document.getElementById('hamburger');
const navMobile = document.getElementById('nav-mobile');
if (hamburger && navMobile) {
  hamburger.addEventListener('click', () => {
    const open = hamburger.classList.toggle('open');
    navMobile.classList.toggle('open');
    hamburger.setAttribute('aria-expanded', String(open));
    navMobile.setAttribute('aria-hidden', String(!open));
  });
}

/* FAQ accordion */
document.querySelectorAll('.faq-q').forEach(btn => {
  btn.addEventListener('click', () => {
    const item = btn.closest('.faq-item');
    const isOpen = item.classList.contains('open');
    document.querySelectorAll('.faq-item.open').forEach(i => {
      i.classList.remove('open');
      i.querySelector('.faq-q').setAttribute('aria-expanded', 'false');
    });
    if (!isOpen) {
      item.classList.add('open');
      btn.setAttribute('aria-expanded', 'true');
    }
  });
});

/* Reveal on scroll */
const observer = new IntersectionObserver((entries) => {
  entries.forEach(e => {
    if (e.isIntersecting) {
      e.target.classList.add('visible');
      observer.unobserve(e.target);
    }
  });
}, { threshold: 0.1 });
document.querySelectorAll('.reveal').forEach(el => observer.observe(el));
