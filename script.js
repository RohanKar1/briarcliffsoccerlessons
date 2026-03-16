const toggle = document.querySelector('.menu-toggle');
const nav = document.querySelector('.nav');

if (toggle && nav) {
  toggle.addEventListener('click', () => {
    nav.classList.toggle('open');
    toggle.setAttribute('aria-expanded', nav.classList.contains('open') ? 'true' : 'false');
  });

  nav.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => {
      nav.classList.remove('open');
      toggle.setAttribute('aria-expanded', 'false');
    });
  });
}
