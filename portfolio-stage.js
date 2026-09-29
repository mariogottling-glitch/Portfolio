import './portfolio-stage.css';

export function createPortfolioStage(projects) {
  const gallery = document.querySelector('#project-gallery');
  gallery.classList.add('spotlight-gallery');
  const strip = document.createElement('div');
  strip.className = 'project-selector';
  strip.innerHTML = `<div class="project-selector-heading"><p>Projekt auswählen <span>· Vorschau wechseln</span></p><div class="project-strip-controls"><button type="button" aria-label="Vorherige Projektvorschauen" aria-controls="project-previews">←</button><button type="button" aria-label="Weitere Projektvorschauen" aria-controls="project-previews">→</button></div></div><div class="project-previews" id="project-previews" role="group" aria-label="Projektvorschauen"></div>`;
  gallery.after(strip);
  const rail = strip.querySelector('.project-previews');
  const controls = [...strip.querySelectorAll('.project-strip-controls button')];
  const remembered = new Map();
  let matching = [];
  let active;
  let hoverTimer;
  let selectionAnimation;
  const reduced = matchMedia('(prefers-reduced-motion: reduce)');

  const buttons = new Map(projects.map(project => {
    const title = project.querySelector('h3').textContent;
    const isVideo = project.dataset.media === 'video';
    project.setAttribute('aria-label', `${title} – ${isVideo ? 'Video ansehen' : 'Projekt im Detail ansehen'}`);
    project.querySelector('.project-open').textContent = isVideo ? 'Video ansehen ↗' : 'Projekt ansehen ↗';
    const source = project.querySelector('.project-image img');
    source.sizes = '(max-width: 800px) calc(100vw - 40px), 65vw';
    const button = document.createElement('button');
    button.type = 'button';
    button.className = 'project-preview';
    button.setAttribute('aria-label', `${title} hervorheben`);
    button.setAttribute('aria-controls', gallery.id);
    const image = source.cloneNode();
    image.alt = '';
    image.sizes = '200px';
    image.loading = 'lazy';
    const label = document.createElement('span');
    label.className = 'project-preview-title';
    label.textContent = title;
    const affordance = document.createElement('span');
    affordance.className = 'project-preview-open';
    affordance.textContent = '↗';
    affordance.setAttribute('aria-hidden', 'true');
    button.append(image, label, affordance);
    button.addEventListener('click', () => select(project));
    button.addEventListener('focus', () => select(project));
    button.addEventListener('pointerenter', event => {
      clearTimeout(hoverTimer);
      if (event.pointerType === 'mouse' && matchMedia('(hover:hover)').matches) {
        hoverTimer = setTimeout(() => select(project), 120);
      }
    });
    button.addEventListener('pointerleave', () => clearTimeout(hoverTimer));
    return [project, button];
  }));

  function select(project) {
    if (!matching.includes(project) || active === project) return;
    clearTimeout(hoverTimer);
    selectionAnimation?.cancel();
    active = project;
    remembered.set(project.dataset.category, project);
    projects.forEach(item => {
      item.hidden = item !== active;
      buttons.get(item).setAttribute('aria-pressed', String(item === active));
    });
    project.querySelector('.project-image img').loading = 'eager';
    if (!reduced.matches && project.animate) {
      selectionAnimation = project.animate([{opacity:.45}, {opacity:1}], {duration:240, easing:'ease-out'});
    }
  }
  function updateControls() {
    const overflow = rail.scrollWidth - rail.clientWidth;
    controls[0].disabled = rail.scrollLeft < 2;
    controls[1].disabled = rail.scrollLeft >= overflow - 2;
    strip.querySelector('.project-strip-controls').hidden = overflow < 2;
  }
  controls.forEach((button, index) => button.addEventListener('click', () => {
    rail.scrollBy({left: (index ? 1 : -1) * rail.clientWidth * .75, behavior: reduced.matches ? 'instant' : 'smooth'});
  }));
  rail.addEventListener('scroll', updateControls, {passive:true});
  if ('ResizeObserver' in window) new ResizeObserver(updateControls).observe(rail);
  else window.addEventListener('resize', updateControls);
  reduced.addEventListener('change', () => { if (reduced.matches) selectionAnimation?.cancel(); });

  return {
    show(category) {
      clearTimeout(hoverTimer);
      matching = projects.filter(project => project.dataset.category === category);
      rail.replaceChildren(...matching.map(project => buttons.get(project)));
      rail.scrollLeft = 0;
      active = null;
      const selection = remembered.get(category) || matching[0];
      select(selection);
      requestAnimationFrame(() => {
        const button = buttons.get(selection);
        // Keep a previously selected project in view when returning to a category.
        if (button) rail.scrollLeft = Math.max(0, button.offsetLeft - rail.offsetLeft - 12);
        updateControls();
      });
      return matching.length;
    }
  };
}
