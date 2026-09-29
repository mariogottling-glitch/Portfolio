// Two registered portraits, one scroll position. The real photo is the fallback.
const hero = document.querySelector('.hero');
const frame = hero?.querySelector('[data-hero-portrait]');
const image = frame?.querySelector('[data-portrait-ai]');
const motion = window.matchMedia('(prefers-reduced-motion: reduce)');

if (frame && image) {
  let ready = false;
  let pendingFrame = 0;
  let start = 0;
  let distance = 1;
  let lastProgress = -1;

  function paint() {
    pendingFrame = 0;
    const position = ready && !motion.matches
      ? Math.max(0, Math.min(1, (window.scrollY - start) / distance)) : 0;
    // Smooth endpoints without an animation loop that lags behind scrolling.
    const progress = position * position * (3 - 2 * position);
    if (progress !== lastProgress) {
      frame.style.setProperty('--portrait-progress', progress.toFixed(4));
      lastProgress = progress;
    }
  }

  function schedule() {
    if (!pendingFrame) pendingFrame = requestAnimationFrame(paint);
  }

  function measure() {
    // Finish while the face is still visible, including the shorter mobile image.
    const bounds = frame.getBoundingClientRect();
    const top = bounds.top + window.scrollY;
    start = Math.max(0, top - window.innerHeight * 0.5);
    distance = Math.max(80, Math.min(bounds.height * 0.55, window.innerHeight * 0.36));
    schedule();
  }

  function configure() {
    hero.classList.toggle('has-ai-portrait', ready && !motion.matches);
    measure();
  }

  async function activate() {
    if (!image.naturalWidth) return;
    try { await image.decode(); } catch { return; }
    ready = true;
    configure();
  }

  image.addEventListener('load', activate);
  image.addEventListener('error', () => { ready = false; configure(); });
  window.addEventListener('scroll', schedule, { passive: true });
  window.addEventListener('resize', measure, { passive: true });
  window.addEventListener('pageshow', measure);
  motion.addEventListener('change', configure);
  if ('ResizeObserver' in window) new ResizeObserver(measure).observe(hero);
  document.fonts?.ready.then(measure);
  if (image.complete) activate();
  configure();
}
