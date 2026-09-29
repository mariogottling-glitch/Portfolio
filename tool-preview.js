import './tool-preview.css';

const toolSection = document.querySelector('.skills');
const tools = [
  ['Photoshop', 'image', 'Bild & Gestaltung', 'Aus Bildern wird Wirkung.', 'Bildbearbeitung, Composings und der Feinschliff für deinen Auftritt.'],
  ['Illustrator', 'image', 'Bild & Gestaltung', 'Deine Idee. Ein eigenes Zeichen.', 'Logos, klare Formen und Vektorgrafiken, die in jeder Größe funktionieren.'],
  ['InDesign', 'image', 'Bild & Gestaltung', 'Alles findet seinen Platz.', 'Schrift, Bilder und Weißraum werden zu einem stimmigen Layout.'],
  ['After Effects', 'motion', 'Bewegung & Film', 'Gestaltung kommt in Bewegung.', 'Animierte Grafiken und bewegte Typografie geben deiner Botschaft Dynamik.'],
  ['ChatGPT', 'ideas', 'Ideen & Bildwelten', 'Der erste Gedanke wächst.', 'Ideen sortieren, Perspektiven wechseln und Konzepte weiterdenken.'],
  ['Midjourney', 'ideas', 'Ideen & Bildwelten', 'Vorstellungen werden sichtbar.', 'Visuelle Richtungen erkunden und eigenständige Bildwelten entwickeln.'],
  ['Premiere Pro', 'motion', 'Bewegung & Film', 'Aus Momenten wird eine Geschichte.', 'Schnitt, Rhythmus und Ton bringen einzelne Aufnahmen zusammen.'],
  ['Cinema 4D', 'space', 'Form & Raum', 'Deine Idee bekommt Tiefe.', 'Dreidimensionale Formen, Materialien und Licht für neue Perspektiven.'],
  ['ZBrush', 'space', 'Form & Raum', 'Charakter steckt im Detail.', 'Digitale Skulpturen und organische Formen mit eigener Handschrift.'],
];

if (toolSection) {
  const preview = document.createElement('div');
  preview.className = 'tool-preview';
  preview.id = 'tool-preview';
  preview.innerHTML = `
    <div class="tool-preview-copy">
      <p class="tool-preview-category"></p>
      <h3></h3><p class="tool-preview-description"></p>
      <p class="tool-preview-selected"><span aria-hidden="true"></span><span></span></p>
    </div>
    <div class="tool-preview-art" aria-hidden="true">
      <svg viewBox="0 0 620 300" focusable="false">
        <defs>
          <pattern id="tool-grid" width="25" height="25" patternUnits="userSpaceOnUse"><path d="M25 0H0V25" fill="none" stroke="currentColor" opacity=".09"/></pattern>
          <linearGradient id="tool-landscape" x2="1" y2="1"><stop stop-color="#b1ef72"/><stop offset="1" stop-color="#527044"/></linearGradient>
        </defs>
        <rect width="620" height="300" fill="url(#tool-grid)"/>
        <g class="tool-construction"><circle cx="350" cy="150" r="121"/><path d="M35 255L578 40M350 18v264M36 150h550"/></g>
        <g class="tool-scene" data-scene="image">
          <g class="tool-art-sheet">
            <rect x="122" y="40" width="344" height="222" rx="3" class="tool-surface"/>
            <path class="tool-line tool-dim" d="M142 62h67m191 0h45M142 240h52m165 0h86"/>
            <rect x="142" y="82" width="154" height="138" fill="url(#tool-landscape)" opacity=".85"/>
            <circle cx="249" cy="114" r="18" fill="var(--paper)" opacity=".85"/>
            <path d="m142 194 47-61 56 69 27-31 24 31v18H142Z" fill="#242423" opacity=".72"/>
            <path class="tool-line" d="M318 97h124m-124 16h91M318 150h124m-124 13h104m-104 13h115"/>
            <rect x="318" y="196" width="63" height="13" fill="var(--accent)"/>
          </g>
          <g class="tool-vector tool-line"><path class="tool-draw" d="M95 208C170 208 133 61 242 91S340 243 466 177" stroke-width="3"/>
            <path d="m189 54 53 37 54 37M402 214l64-37 48-25" class="tool-dim"/>
            <g fill="var(--bg)"><path d="M90 203h10v10H90zM237 86h10v10h-10zM461 172h10v10h-10z"/><circle cx="189" cy="54" r="4"/><circle cx="296" cy="128" r="4"/><circle cx="402" cy="214" r="4"/><circle cx="514" cy="152" r="4"/></g>
          </g>
          <g class="tool-retouch"><path d="M220 74v154" stroke="var(--paper)"/><circle cx="220" cy="151" r="13" fill="var(--paper)"/><path d="m216 147-4 4 4 4m8-8 4 4-4 4" fill="none" stroke="var(--bg)" stroke-width="1.5"/></g>
          <g class="tool-layout-guides tool-line"><path d="M134 74h320v154H134zM306 74v154M134 134h320" stroke-dasharray="4 5"/><path d="M119 31v-9m-8 17h-9m367-8v-9m8 17h9M119 264v14m-8-17h-9m367 3v14m8-17h9"/></g>
        </g>
        <g class="tool-scene" data-scene="motion">
          <rect x="167" y="28" width="288" height="163" rx="4" class="tool-surface"/>
          <path class="tool-line tool-dim" d="M168 49h286M180 39h3m7 0h3m7 0h3"/>
          <g class="tool-motion-mark" fill="var(--accent)"><path d="m245 81 55-12-36 84-55 12Z"/><path d="m313 81 55-12-36 84-55 12Z" opacity=".45"/></g>
          <path class="tool-line tool-dim" d="M105 211h410M105 236h410M105 261h410M131 202v67m64-67v67m64-67v67m64-67v67m64-67v67m64-67v67"/>
          <rect x="132" y="216" width="117" height="15" fill="var(--accent)" opacity=".8"/><rect x="257" y="216" width="130" height="15" fill="var(--accent)" opacity=".4"/><rect x="202" y="241" width="251" height="15" fill="var(--accent)" opacity=".2"/>
          <g class="tool-playhead"><path d="M311 201v71" stroke="var(--paper)" stroke-width="2"/><path d="m305 197 6 8 6-8Z" fill="var(--paper)"/></g>
          <path class="tool-line" d="m478 119 7-12 7 12m-7-12v36"/>
        </g>
        <g class="tool-scene" data-scene="ideas">
          <g class="tool-thought tool-line"><path class="tool-surface" d="M72 90h133v74H99l-20 18v-18h-7Z"/><path d="M90 110h69m-69 15h95m-95 15h48"/><path d="M216 128h44m-7-6 7 6-7 6" stroke-dasharray="3 5"/></g>
          <g class="tool-idea-picture"><rect x="278" y="49" width="228" height="208" rx="3" class="tool-surface"/><rect x="290" y="61" width="204" height="184" fill="url(#tool-landscape)" opacity=".2"/>
            <circle cx="432" cy="110" r="29" fill="var(--accent)"/>
            <path d="M291 222c30-7 48-103 82-97s31 88 61 50 43-38 59-28v97H291Z" fill="url(#tool-landscape)"/>
            <path class="tool-line" d="M290 223c30-7 49-104 83-98s31 88 61 50 43-38 59-28"/>
          </g>
          <g class="tool-spark tool-line"><path d="m527 65 4 12 12 4-12 4-4 12-4-12-12-4 12-4Z"/><path d="M239 211v16m-8-8h16"/></g>
        </g>
        <g class="tool-scene" data-scene="space">
          <ellipse class="tool-construction" cx="320" cy="253" rx="128" ry="20"/>
          <g class="tool-orbit"><path d="m318 37 96 52 27 94-81 65-108-26-47-101Z" fill="var(--accent)" fill-opacity=".08" stroke="var(--accent)" stroke-width="1.6"/>
            <path d="m318 37-17 89 113-37-49 80 76 14-108 17 27 48-59-122-96-5 47 101 81-22-81 22 49-96 64 43-32 31" class="tool-line"/>
            <path d="m301 126 64 43-32 31Z" fill="var(--accent)" opacity=".5"/><path d="m318 37-17 89 113-37Z" fill="var(--accent)" opacity=".15"/>
            <g fill="var(--paper)"><circle cx="318" cy="37" r="3"/><circle cx="301" cy="126" r="4"/><circle cx="365" cy="169" r="3"/><circle cx="333" cy="200" r="3"/></g>
          </g>
          <g class="tool-line tool-dim"><path d="M119 219v-43m0 43h43m-43 0-22 16"/><path d="M479 69v154m-6-148 6-6 6 6m-12 142 6 6 6-6"/></g>
        </g>
      </svg>
      <span class="tool-art-note">Idee → Gestaltung → Wirkung</span>
    </div>`;
  const list = toolSection.querySelector('.tool-list');
  list.after(preview);
  const credit = list.querySelector('a');
  if (credit) {
    credit.className = 'tool-source';
    credit.textContent = 'ZBrush-Icon: Hajj 3 · CC BY-SA 4.0';
    preview.after(credit);
  }
  const hint = toolSection.querySelector('.skills-heading p');
  hint.textContent = 'Wähle ein Werkzeug. Entdecke die Möglichkeiten.';
  let selected = -1;
  const buttons = [...list.children].map((item, index) => {
    const button = document.createElement('button');
    button.type = 'button';
    button.className = 'tool-choice';
    button.setAttribute('aria-controls', preview.id);
    button.append(item.querySelector('.tool-icon'));
    const label = document.createElement('span');
    label.textContent = tools[index][0];
    button.append(label);
    item.replaceChildren(button);
    button.addEventListener('click', () => select(index));
    button.addEventListener('pointerenter', event => {
      if (event.pointerType === 'mouse' && matchMedia('(hover: hover)').matches) select(index);
    });
    button.addEventListener('focus', () => select(index));
    return button;
  });
  function select(index) {
    if (selected === index) return;
    selected = index;
    const [name, scene, category, title, description] = tools[index];
    buttons.forEach((button, i) => button.setAttribute('aria-pressed', String(i === index)));
    preview.dataset.scene = scene;
    preview.dataset.tool = name.toLowerCase().replaceAll(' ', '-');
    preview.querySelector('.tool-preview-category').textContent = category;
    preview.querySelector('h3').textContent = title;
    preview.querySelector('.tool-preview-description').textContent = description;
    preview.querySelector('.tool-preview-selected span:last-child').textContent = name;
  }
  select(0);
}
