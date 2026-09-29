// No YouTube connection until the visitor explicitly loads the player.
export function setupYouTubePlayer(figure) {
  const root = document.createElement('div');
  root.className = 'dialog-youtube';
  root.hidden = true;
  figure.insertBefore(root, figure.querySelector('figcaption'));

  function clear() {
    root.replaceChildren(); // Removing the iframe also stops playback.
    root.hidden = true;
  }

  function show(detail, title) {
    clear();
    const stage = document.createElement('div');
    stage.className = 'youtube-stage';
    const poster = document.createElement('img');
    poster.src = detail.poster;
    poster.alt = '';
    const load = document.createElement('button');
    load.type = 'button';
    load.className = 'button button-accent youtube-load';
    load.textContent = '▶ Video von YouTube laden';
    stage.append(poster, load);

    const note = document.createElement('p');
    note.className = 'youtube-note';
    note.append('Beim Laden wird eine Verbindung zu YouTube hergestellt. Dabei werden Daten an Google übermittelt. ');
    const privacy = document.createElement('a');
    privacy.href = '/datenschutz.html#privacy-youtube';
    privacy.target = '_blank';
    privacy.rel = 'noopener';
    privacy.textContent = 'Datenschutz';
    const direct = document.createElement('a');
    direct.href = `https://www.youtube.com/watch?v=${detail.youtube}`;
    direct.target = '_blank';
    direct.rel = 'noopener';
    direct.textContent = 'Direkt auf YouTube ansehen ↗';
    note.append(privacy, ' · ', direct);

    load.addEventListener('click', () => {
      const frame = document.createElement('iframe');
      frame.title = `${title} – YouTube-Videoplayer`;
      frame.allow = 'autoplay; encrypted-media; fullscreen; picture-in-picture';
      frame.allowFullscreen = true;
      frame.referrerPolicy = 'strict-origin-when-cross-origin';
      frame.src = `https://www.youtube.com/embed/${detail.youtube}?autoplay=1&playsinline=1&rel=0`;
      stage.replaceChildren(frame);
      frame.focus();
    }, { once: true });
    root.append(stage, note);
    root.hidden = false;
  }

  return { show, clear };
}

