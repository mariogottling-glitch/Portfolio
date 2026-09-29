const story = document.querySelector('.design-story');

if (story) {
  const steps = [...story.querySelectorAll('.story-step')];
  const buttons = steps.map(step => step.querySelector('button'));
  const caption = story.querySelector('.story-caption');
  const captions = ['Alles beginnt mit deiner Idee.', 'Ein klarer Plan. Für beide.', 'Deine Idee bekommt Charakter.', 'Jetzt fehlt nur deine Idee.'];
  const desktop = matchMedia('(min-width: 801px)');
  const reducedMotion = matchMedia('(prefers-reduced-motion: reduce)');
  let manualSelection = false;
  let queued = false;

  function select(index) {
    story.dataset.stage = String(index);
    buttons.forEach((button, i) => button.setAttribute('aria-pressed', String(i === index)));
    steps.forEach((step, i) => step.classList.toggle('is-active', i === index));
    caption.textContent = captions[index];
  }

  buttons.forEach((button, index) => {
    button.disabled = false;
    button.setAttribute('aria-controls', 'story-visual');
    button.addEventListener('click', () => {
      manualSelection = true;
      select(index);
    });
  });
  story.classList.add('is-interactive');
  select(0);

  function updateFromScroll() {
    queued = false;
    // Touch and reduced-motion visitors choose their own illustration.
    if (!desktop.matches || reducedMotion.matches) return;
    if (manualSelection) return;
    const bounds = story.getBoundingClientRect();
    if (bounds.bottom < 0 || bounds.top > innerHeight) return;
    const readingLine = innerHeight * 0.55;
    let closest = 0;
    let distance = Infinity;
    steps.forEach((step, i) => {
      const rect = step.getBoundingClientRect();
      const nextDistance = Math.abs(rect.top + rect.height / 2 - readingLine);
      if (nextDistance < distance) { closest = i; distance = nextDistance; }
    });
    select(closest);
  }
  function scheduleUpdate() {
    if (queued) return;
    queued = true;
    requestAnimationFrame(updateFromScroll);
  }
  window.addEventListener('scroll', scheduleUpdate, { passive: true });
  // Only deliberate navigation releases a clicked scene; layout shifts and
  // browser focus scrolling must not immediately override the selection.
  const resumeScroll = () => { manualSelection = false; };
  window.addEventListener('wheel', resumeScroll, { passive: true });
  window.addEventListener('touchmove', resumeScroll, { passive: true });
  window.addEventListener('pointerdown', event => {
    if (!event.target.closest('.story-step button')) resumeScroll();
  });
  window.addEventListener('keydown', event => {
    if (['PageDown', 'PageUp', 'Home', 'End', 'ArrowDown', 'ArrowUp'].includes(event.key)) resumeScroll();
    if (event.code === 'Space' && !event.target.closest('button, a, input, textarea, select')) resumeScroll();
  });
  window.addEventListener('resize', scheduleUpdate);
  desktop.addEventListener('change', scheduleUpdate);
  reducedMotion.addEventListener('change', scheduleUpdate);
}
