import './sculpt-viewer.css';

const models = [
  { name: 'Zombonaut', url: '/assets/models/zombonaut.glb', rotation: [0, 0, 0] },
  { name: 'Mother Maggot', url: '/assets/models/mother-maggot.glb', rotation: [0, Math.PI, 0] },
  { name: 'Big Boi', url: '/assets/models/big-boi.glb', rotation: [0, 0, 0] },
];

export function setupSculptViewer() {
  const launch = document.createElement('button');
  launch.type = 'button'; launch.className = 'button button-accent sculpt-launch';
  launch.textContent = '3D-Modelle erkunden ↗'; launch.hidden = true;
  launch.setAttribute('aria-haspopup', 'dialog');
  document.querySelector('.gallery-heading').append(launch);
  const dialog = document.createElement('dialog');
  dialog.className = 'sculpt-dialog'; dialog.setAttribute('aria-labelledby', 'sculpt-title');
  dialog.innerHTML = `
    <header class="sculpt-header"><div><p>ZBRUSH / DIGITALE SKULPTUREN</p><h2 id="sculpt-title">Von allen Seiten.</h2></div><button class="sculpt-close" type="button" aria-label="3D-Viewer schließen">Schließen ×</button></header>
    <div class="sculpt-models" role="group" aria-label="3D-Modell auswählen"></div>
    <div class="sculpt-stage"><div class="sculpt-canvas" tabindex="0" role="group" aria-label="Drehbare 3D-Skulptur" aria-describedby="sculpt-help"></div><p class="sculpt-status" role="status" aria-live="polite"></p></div>
    <footer class="sculpt-footer"><div><p id="sculpt-help">Ziehen zum Drehen · Scrollen oder zwei Finger zum Zoomen.</p><p class="sculpt-keyboard">Tastatur: Pfeiltasten drehen, + / − zoomen, 0 setzt zurück.</p></div><div class="sculpt-controls" role="group" aria-label="Ansicht steuern"><button type="button" data-view="in" aria-label="Vergrößern">+</button><button type="button" data-view="out" aria-label="Verkleinern">−</button><button type="button" data-view="reset">Ansicht zurücksetzen</button></div></footer>
    <p class="sculpt-credit">In ZBrush gesculptet von Mario Göttling · Interaktive Formstudien</p>`;
  document.body.append(dialog);
  const host = dialog.querySelector('.sculpt-canvas');
  const status = dialog.querySelector('.sculpt-status');
  const controls = [...dialog.querySelectorAll('[data-view]')];
  let engine, generation = 0, request, selected = 0, returnFocus;
  function message(text) { status.textContent = text; status.hidden = !text; }
  function setReady(ready) { controls.forEach(button => { button.disabled = !ready; }); host.setAttribute('aria-busy', String(!ready)); }
  const buttons = models.map((model, index) => {
    const button = document.createElement('button');
    button.type = 'button'; button.textContent = model.name;
    button.addEventListener('click', () => load(index));
    dialog.querySelector('.sculpt-models').append(button);
    return button;
  });
  async function load(index) {
    selected = index;
    const token = ++generation;
    request?.abort(); request = new AbortController();
    const signal = request.signal;
    buttons.forEach((button, i) => button.setAttribute('aria-pressed', String(i === index)));
    host.setAttribute('aria-label', `${models[index].name} – drehbare 3D-Skulptur`);
    setReady(false); message(`${models[index].name} wird geladen …`);
    engine?.clear();
    try {
      // No renderer, decoder or model download until the visitor opens the viewer.
      const { createSculptRenderer } = await import('./sculpt-renderer.js');
      if (token !== generation || !dialog.open) return;
      engine ||= createSculptRenderer(host, () => { generation++; request?.abort(); setReady(false); message('Die 3D-Ansicht wurde unterbrochen. Wähle ein Modell, um sie neu zu laden.'); engine?.dispose(); engine = null; });
      const currentEngine = engine;
      const response = await fetch(models[index].url, { signal });
      if (!response.ok) throw new Error('Model download failed');
      const bytes = await response.arrayBuffer();
      if (token !== generation || !dialog.open) return;
      await currentEngine.load(bytes, models[index].rotation, () => token === generation && dialog.open);
      if (token !== generation || !dialog.open) return;
      setReady(true); message('');
    } catch (error) {
      if (token !== generation || error.name === 'AbortError') return;
      message('Die 3D-Ansicht konnte nicht geladen werden. Wähle das Modell erneut oder schließe das Fenster und schau dir die Bilder an.');
    }
  }
  launch.addEventListener('click', () => {
    returnFocus = document.activeElement;
    dialog.showModal(); document.body.classList.add('dialog-open');
    dialog.querySelector('.sculpt-close').focus(); load(selected);
  });
  controls.forEach(button => button.addEventListener('click', () => engine?.action(button.dataset.view)));
  dialog.querySelector('.sculpt-close').addEventListener('click', () => dialog.close());
  dialog.addEventListener('click', event => { if (event.target === dialog) dialog.close(); });
  dialog.addEventListener('close', () => {
    generation++; request?.abort(); engine?.dispose(); engine = null;
    message(''); document.body.classList.remove('dialog-open'); returnFocus?.focus({ preventScroll: true });
  });
  return { showCategory(category) { launch.hidden = category !== '3d'; } };
}
