import './hero-portrait.js';
import { projectDetails } from './project-details.js';
import './navigation.js';
import './design-story.js';
import './tool-preview.js';
import { createPortfolioStage } from './portfolio-stage.js';

const filters = [...document.querySelectorAll('[data-filter]')];
const projects = [...document.querySelectorAll('[data-project]')];
const galleryStatus = document.querySelector('.gallery-status');
const webdesignCta = document.querySelector('#gallery-webdesign-cta');
const galleryHint = document.querySelector('#gallery-hint');
const showMore = document.querySelector('#show-more');
let activeFilter = filters[0];
const portfolioStage = createPortfolioStage(projects);
function renderGallery() {
  const isWebdesign = activeFilter.dataset.filter === 'web';
  webdesignCta.hidden = !isWebdesign;
  galleryHint.hidden = isWebdesign;
  filters.forEach(button => button.setAttribute('aria-pressed', String(button === activeFilter)));
  const count = portfolioStage.show(activeFilter.dataset.filter);
  galleryStatus.textContent = `${String(count).padStart(2, '0')} Projekte / ${activeFilter.textContent}`;
  showMore.hidden = true;
}
filters.forEach(button => button.addEventListener('click', () => { activeFilter = button; renderGallery(); }));
renderGallery();

const dialog = document.querySelector('.project-dialog');
const dialogImage = dialog.querySelector('.dialog-image');
const thumbnails = dialog.querySelector('.case-thumbnails');
const imageNavigation = dialog.querySelector('.image-navigation');
const imageError = dialog.querySelector('.image-error');
let lastProject;
let projectImages = [];
let imageIndex = 0;
function showImage(index) {
  imageIndex = (index + projectImages.length) % projectImages.length;
  const [source, caption] = projectImages[imageIndex];
  imageError.hidden = true;
  dialogImage.alt = caption;
  // Relative URLs preserve local preview proxy routing.
  dialogImage.src = source;
  dialog.querySelector('#image-fallback').setAttribute('href', source);
  dialog.querySelector('#project-caption').textContent = caption;
  dialog.querySelector('#image-position').textContent = `${imageIndex + 1} / ${projectImages.length}`;
  thumbnails.querySelectorAll('button').forEach((button, i) => button.setAttribute('aria-pressed', String(i === imageIndex)));
}
dialogImage.addEventListener('error', () => { imageError.hidden = false; });
dialogImage.addEventListener('load', () => { imageError.hidden = true; });
function openProject(link) {
  lastProject = link;
  const detail = projectDetails[link.dataset.project] || {};
  const title = link.querySelector('h3').textContent;
  const description = link.querySelector('.project-meta p').textContent;
  const preview = link.querySelector('img');
  const category = filters.find(filter => filter.dataset.filter === link.dataset.category).textContent;
  dialog.querySelector('#project-title').textContent = title;
  dialog.querySelector('#project-category').textContent = detail.category || category;
  dialog.querySelector('#project-lead').textContent = detail.lead || description;
  const facts = dialog.querySelector('#project-facts');
  facts.replaceChildren();
  (detail.facts || []).forEach(([label, copy]) => {
    const section = document.createElement('section');
    const heading = document.createElement('h3');
    heading.textContent = label;
    const paragraph = document.createElement('p');
    paragraph.textContent = copy;
    section.append(heading, paragraph);
    facts.append(section);
  });
  facts.hidden = !detail.facts?.length;
  const live = dialog.querySelector('#project-live');
  const projectPage = dialog.querySelector('#project-page');
  const hasProjectPage = link.getAttribute('href').startsWith('/projekte/');
  projectPage.hidden = !hasProjectPage;
  if (hasProjectPage) projectPage.setAttribute('href', link.getAttribute('href'));
  else projectPage.removeAttribute('href');
  live.hidden = !detail.live;
  if (detail.live) live.setAttribute('href', detail.live); else live.removeAttribute('href');
  dialog.querySelector('#project-inquiry').href = `mailto:mariogottling@googlemail.com?subject=${encodeURIComponent(`Projektanfrage – inspiriert von ${title}`)}`;
  projectImages = detail.images || [[preview.getAttribute('src'), detail.caption || preview.alt]];
  thumbnails.replaceChildren();
  imageNavigation.hidden = thumbnails.hidden = projectImages.length < 2;
  if (projectImages.length > 1) projectImages.forEach(([src, alt], i) => {
    const button = document.createElement('button');
    button.type = 'button';
    button.setAttribute('aria-label', alt);
    const image = document.createElement('img'); image.src = src; image.alt = '';
    button.append(image); button.addEventListener('click', () => showImage(i)); thumbnails.append(button);
  });
  showImage(0);
  dialog.showModal(); dialog.scrollTop = 0;
  document.body.classList.add('dialog-open');
}
projects.forEach(link => {
  link.setAttribute('aria-haspopup', 'dialog');
  link.addEventListener('click', event => {
  if (event.ctrlKey || event.metaKey || event.shiftKey || event.altKey) return;
  event.preventDefault(); openProject(link);
  });
});
dialog.querySelector('.dialog-close').addEventListener('click', () => dialog.close());
dialog.addEventListener('click', event => { if (event.target === dialog) dialog.close(); });
dialog.addEventListener('keydown', event => {
  if (projectImages.length < 2 || !['ArrowLeft', 'ArrowRight'].includes(event.key)) return;
  event.preventDefault(); showImage(imageIndex + (event.key === 'ArrowRight' ? 1 : -1));
});
dialog.querySelector('#previous-image').addEventListener('click', () => showImage(imageIndex - 1));
dialog.querySelector('#next-image').addEventListener('click', () => showImage(imageIndex + 1));
dialog.addEventListener('close', () => { document.body.classList.remove('dialog-open'); lastProject?.focus({ preventScroll: true }); });
let touchStart;
dialogImage.addEventListener('touchstart', event => { touchStart = event.changedTouches[0]; }, { passive: true });
dialogImage.addEventListener('touchend', event => {
  if (!touchStart || projectImages.length < 2) return;
  const end = event.changedTouches[0]; const dx = end.clientX - touchStart.clientX; const dy = end.clientY - touchStart.clientY;
  if (Math.abs(dx) > 55 && Math.abs(dx) > Math.abs(dy) * 1.5) showImage(imageIndex + (dx < 0 ? 1 : -1));
  touchStart = null;
}, { passive: true });
document.querySelector('#copy-email').addEventListener('click', async () => {
  const status = document.querySelector('.copy-status');
  try { await navigator.clipboard.writeText('mariogottling@googlemail.com'); status.textContent = 'E-Mail-Adresse kopiert.'; }
  catch { status.textContent = 'Bitte die E-Mail-Adresse markieren und kopieren.'; }
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
