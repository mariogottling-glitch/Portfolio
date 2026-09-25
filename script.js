const menuButton = document.querySelector('.menu-toggle');
const mobileMenu = document.querySelector('.mobile-menu');
const header = document.querySelector('[data-header]');

menuButton?.addEventListener('click', () => {
  const open = menuButton.getAttribute('aria-expanded') === 'true';
  menuButton.setAttribute('aria-expanded', String(!open));
  mobileMenu.classList.toggle('open', !open);
  mobileMenu.setAttribute('aria-hidden', String(open));
  menuButton.textContent = open ? 'Menü' : 'Schließen';
});

mobileMenu?.querySelectorAll('a').forEach((link) => link.addEventListener('click', () => {
  menuButton.setAttribute('aria-expanded', 'false');
  mobileMenu.classList.remove('open');
  mobileMenu.setAttribute('aria-hidden', 'true');
  menuButton.textContent = 'Menü';
}));

window.addEventListener('scroll', () => header.classList.toggle('scrolled', window.scrollY > 12), { passive: true });
