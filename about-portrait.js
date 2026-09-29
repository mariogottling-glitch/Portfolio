import './about-portrait.css';

const portrait = document.querySelector('[data-about-portrait]');
const image = portrait?.querySelector('.about-portrait-ai');
const motion = window.matchMedia('(prefers-reduced-motion: reduce)');

if (portrait && image) {
  const frame = portrait.querySelector('.about-portrait-frame');
  const original = portrait.querySelector('.about-portrait-real');
  const hint = portrait.querySelector('.about-portrait-hint');
  let button;
  let observer;
  let timer;
  let visible = false;
  let revealed = false;
  let failed = false;

  function cancelTimer() {
    clearTimeout(timer);
    timer = undefined;
  }

  function scheduleReveal() {
    cancelTimer();
    if (!button || revealed || !visible || motion.matches || document.hidden) return;
    timer = setTimeout(() => {
      revealed = true;
      button.setAttribute('aria-pressed', 'true');
    }, 900);
  }

  async function activate() {
    if (button || failed || !image.naturalWidth || !original.naturalWidth) return;
    try { await Promise.all([image.decode(), original.decode()]); } catch { return; }
    if (button || failed) return;
    button = document.createElement('button');
    button.type = 'button';
    button.className = 'about-portrait-toggle';
    button.setAttribute('aria-label', 'KI-Porträt von Mario anzeigen');
    button.setAttribute('aria-pressed', 'false');
    portrait.append(button);
    button.append(frame, hint);
    button.addEventListener('click', () => {
      revealed = true;
      cancelTimer();
      button.setAttribute('aria-pressed', String(button.getAttribute('aria-pressed') !== 'true'));
    });
    if ('IntersectionObserver' in window) {
      observer = new IntersectionObserver(([entry]) => {
        visible = entry.isIntersecting && entry.intersectionRatio >= 0.55;
        scheduleReveal();
      }, { threshold: [0, 0.55] });
      observer.observe(frame);
    }
    // Older browsers still receive the manual control without an automatic reveal.
  }

  image.addEventListener('load', activate);
  original.addEventListener('load', activate);
  image.addEventListener('error', () => {
    failed = true;
    cancelTimer();
    observer?.disconnect();
    portrait.classList.add('about-portrait-failed');
    if (button) {
      portrait.append(frame, hint);
      button.remove();
      button = undefined;
    }
  });
  motion.addEventListener('change', scheduleReveal);
  document.addEventListener('visibilitychange', scheduleReveal);
  if (image.complete) activate();
}
