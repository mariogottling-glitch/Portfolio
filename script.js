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

const filters = [...document.querySelectorAll('[data-filter]')];
const projects = [...document.querySelectorAll('[data-category]')];
const galleryStatus = document.querySelector('.gallery-status');
function filterGallery(filter) {
  filters.forEach(button => button.setAttribute('aria-pressed', String(button === filter)));
  let count = 0;
  projects.forEach(project => {
    const visible = filter.dataset.filter === 'featured'
      ? project.dataset.featured === 'true'
      : project.dataset.category === filter.dataset.filter;
    project.hidden = !visible;
    if (visible) project.dataset.layout = String(count++ % 4);
  });
  galleryStatus.textContent = `${filter.textContent} / ${String(count).padStart(2, '0')} Arbeiten`;
}
filters.forEach(button => button.addEventListener('click', () => filterGallery(button)));
if (filters.length) filterGallery(filters[0]);

const dialog = document.querySelector('.art-dialog');
let lastArtwork;
document.querySelectorAll('[data-lightbox]').forEach(link => {
  link.addEventListener('click', event => {
    if (event.ctrlKey || event.metaKey || event.shiftKey || event.altKey) return;
    event.preventDefault();
    lastArtwork = link;
    dialog.querySelector('img').src = link.href;
    dialog.querySelector('img').alt = link.querySelector('img').alt;
    dialog.querySelector('h2').textContent = link.querySelector('h3').textContent;
    dialog.querySelector('.dialog-description').textContent = link.querySelector('.project-meta p').textContent;
    dialog.showModal();
    document.body.classList.add('dialog-open');
  });
});
dialog?.querySelector('.dialog-close').addEventListener('click', () => dialog.close());
dialog?.addEventListener('click', event => { if (event.target === dialog) dialog.close(); });
dialog?.addEventListener('close', () => {
  document.body.classList.remove('dialog-open');
  lastArtwork?.focus({ preventScroll: true });
});

// One restrained entrance per heading; all content stays visible without JS.
const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)');
const compactScreen = window.matchMedia('(max-width: 800px)');
const scene = document.querySelector('main');
const headings = [...document.querySelectorAll('main h1, main h2')];
const revealedHeadings = new WeakSet();
const headingAnimations = new Set();
let headingObserver;
let parallaxFrame = 0;

function updateParallax() {
  parallaxFrame = 0;
  if (reducedMotion.matches) return;
  const speed = compactScreen.matches ? 0.035 : 0.08;
  scene.style.setProperty('--scene-y', `${(-window.scrollY * speed).toFixed(1)}px`);
}

function scheduleParallax() {
  if (!reducedMotion.matches && !parallaxFrame) {
    parallaxFrame = requestAnimationFrame(updateParallax);
  }
}

function configureMotion() {
  headingObserver?.disconnect();
  cancelAnimationFrame(parallaxFrame);
  parallaxFrame = 0;
  headingAnimations.forEach(animation => animation.cancel());
  headingAnimations.clear();
  headings.forEach(heading => heading.classList.remove('heading-awaiting'));
  scene.classList.toggle('has-scroll-motion', !reducedMotion.matches);
  if (reducedMotion.matches) {
    scene.style.removeProperty('--scene-y');
    return;
  }
  updateParallax();
  if (!('IntersectionObserver' in window) || !Element.prototype.animate) return;
  headingObserver = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (!entry.isIntersecting) return;
      const heading = entry.target;
      headingObserver.unobserve(heading);
      heading.classList.remove('heading-awaiting');
      revealedHeadings.add(heading);
      const animation = heading.animate([
        { opacity: 0, transform: `translateY(${compactScreen.matches ? 16 : 26}px)` },
        { opacity: 1, transform: 'translateY(0)' }
      ], { duration: 720, easing: 'cubic-bezier(.16,1,.3,1)' });
      headingAnimations.add(animation);
      animation.finished.then(() => headingAnimations.delete(animation), () => headingAnimations.delete(animation));
    });
  }, { threshold: 0.12 });
  headings.forEach(heading => {
    if (revealedHeadings.has(heading)) return;
    heading.classList.add('heading-awaiting');
    headingObserver.observe(heading);
  });
}

window.addEventListener('scroll', scheduleParallax, { passive: true });
compactScreen.addEventListener('change', scheduleParallax);
reducedMotion.addEventListener('change', configureMotion);
configureMotion();
