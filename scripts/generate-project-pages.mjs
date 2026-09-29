import { mkdir, readFile, writeFile } from 'node:fs/promises';
import { projectDetails } from '../project-details.js';

const root = new URL('../', import.meta.url);
const origin = 'https://www.mario-goettling.de';
const home = await readFile(new URL('index.html', root), 'utf8');
const escape = value => String(value).replaceAll('&', '&amp;').replaceAll('<', '&lt;').replaceAll('>', '&gt;').replaceAll('"', '&quot;');
const projects = [
  ['chicos-hermanos', 'Logo & Webdesign für Chicos Hermanos', 'Logo und Website für chilenisches Streetfood: Entdecke die Gestaltung von Chicos Hermanos und den Projektbeitrag von Mario Göttling.'],
  ['fortis-anima', 'Logo & Webdesign für Fortis Anima', 'Logo und Webdesign für Fortis Anima Consulting: natürliche Bildsprache, Baumsymbol und klare Gestaltung. Ein Projekt von Mario Göttling.'],
  ['salon-samo', 'Logo & Webdesign für Salon Samo', 'Logo und Website für Salon Samo: prägnante Typografie und eine Gestaltung in Gold, Weiß und Anthrazit. Ein Projekt von Mario Göttling.'],
  ['mine-hotel', 'Logo & Webdesign für MiNe Hotel', 'Logo und Website für MiNe Hotel: eine farbenfrohe Marke, ein illustriertes Maskottchen und verspielte Formen. Ein Projekt von Mario Göttling.'],
  ['roboterly', 'Hero-Gestaltung für Roboterly', 'Hero-Motiv für Roboterly: KI-Visualisierung von Service-Robotern mit gezielter Nachbearbeitung. Ein Gestaltungsprojekt von Mario Göttling.'],
];

for (const [slug, heading, description] of projects) {
  const detail = projectDetails[slug];
  const card = home.match(new RegExp(`<a data-project="${slug}"[\\s\\S]*?</a>`))?.[0];
  if (!card) throw new Error(`Project card missing: ${slug}`);
  const image = card.match(/<img[^>]+src="([^"]+)"/)[1];
  const alt = card.match(/<img[^>]+alt="([^"]*)"/)[1];
  const imageTag = card.match(/<img[^>]+>/)[0];
  const width = imageTag.match(/width="(\d+)"/)[1];
  const height = imageTag.match(/height="(\d+)"/)[1];
  const url = `${origin}/projekte/${slug}/`;
  const title = `${heading} | Mario Göttling`;
  const structured = {
    '@context': 'https://schema.org',
    '@graph': [
      {'@type':'WebPage','@id':`${url}#webpage`,url,name:title,description,inLanguage:'de-DE',isPartOf:{'@id':`${origin}/#website`},mainEntity:{'@id':`${url}#project`}},
      {'@type':'CreativeWork','@id':`${url}#project`,name:heading,description:detail.facts.find(([label])=>label==='Mein Anteil')[1],url,image:`${origin}${image}`,creator:{'@type':'Person','@id':`${origin}/#mario`,name:'Mario Göttling',url:`${origin}/`}},
      {'@type':'BreadcrumbList',itemListElement:[{'@type':'ListItem',position:1,name:'Portfolio',item:`${origin}/`},{'@type':'ListItem',position:2,name:heading,item:url}]},
    ],
  };
  const html = `<!doctype html>
<html lang="de">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>${escape(title)}</title>
  <meta name="description" content="${escape(description)}" />
  <meta name="robots" content="index, follow, max-image-preview:large" />
  <link rel="canonical" href="${url}" />
  <meta property="og:type" content="website" />
  <meta property="og:locale" content="de_DE" />
  <meta property="og:url" content="${url}" />
  <meta property="og:title" content="${escape(title)}" />
  <meta property="og:description" content="${escape(description)}" />
  <meta property="og:image" content="${origin}${image}" />
  <meta property="og:image:alt" content="${alt}" />
  <meta name="twitter:card" content="summary_large_image" />
  <meta name="twitter:title" content="${escape(title)}" />
  <meta name="twitter:description" content="${escape(description)}" />
  <meta name="twitter:image" content="${origin}${image}" />
  <link rel="icon" href="/assets/brand/favicon-32.png" type="image/png" />
  <meta name="theme-color" content="#242423" />
  <link rel="preload" href="/assets/fonts/dm-sans.ttf" as="font" type="font/ttf" crossorigin />
  <link rel="preload" href="/assets/fonts/archivo-black.ttf" as="font" type="font/ttf" crossorigin />
  <link rel="stylesheet" href="/styles.css" />
  <link rel="stylesheet" href="/projekte/project-page.css" />
</head>
<body class="project-page">
  <a class="skip-link" href="#projekt">Direkt zum Projekt</a>
  <header class="site-header"><a class="brand" href="/" aria-label="Mario Göttling – zur Startseite"><img class="brand-logo" src="/assets/brand/mario-logo-256.png" alt="" width="256" height="256" /><span class="brand-name"><span>MARIO</span><span>GÖTTLING</span></span></a><a class="legal-back" href="/#arbeiten">← Alle Arbeiten</a></header>
  <main class="section-shell case-page" id="projekt">
    <nav class="case-breadcrumb" aria-label="Brotkrümelnavigation"><a href="/">Portfolio</a><span aria-hidden="true">/</span><span aria-current="page">${escape(heading)}</span></nav>
    <p class="eyebrow">${escape(detail.category)}</p>
    <h1>${escape(heading)}</h1>
    <p class="case-page-lead">${escape(detail.lead)}</p>
    <figure class="case-page-figure"><img src="${image}" alt="${alt}" width="${width}" height="${height}" fetchpriority="high" /><figcaption>${escape(detail.caption || heading)}</figcaption></figure>
    <div class="case-page-facts">${detail.facts.map(([label,copy])=>`<section><h2>${escape(label)}</h2><p>${escape(copy)}</p></section>`).join('')}</div>
    <div class="case-page-links"><a class="button button-outline" href="${escape(detail.live)}" target="_blank" rel="noreferrer">Kundenwebsite besuchen ↗</a><a class="quiet-link" href="/webdesign/">Mehr über mein Webdesign-Angebot ↗</a></div>
    <section class="case-page-contact" aria-labelledby="case-contact"><h2 id="case-contact">Dein nächster Auftritt.</h2><p>Ich gestalte Websites, Logos und Bildwelten für Selbstständige und kleine Unternehmen – deutschlandweit.</p><a class="button button-accent" href="/#kontakt">Ähnliches Projekt besprechen ↗</a></section>
    <nav class="case-related" aria-label="Weitere Webdesign-Projekte"><h2>Weitere Projekte</h2>${projects.filter(([other])=>other!==slug).map(([other,name])=>`<a href="/projekte/${other}/">${escape(name)} ↗</a>`).join('')}</nav>
  </main>
  <footer class="site-footer section-shell"><a href="/">Zum Portfolio</a><a href="/webdesign/">Webdesign</a><a href="/impressum.html">Impressum</a><a href="/datenschutz.html">Datenschutz</a><span>© 2026 Mario Göttling</span></footer>
  <script type="application/ld+json">${JSON.stringify(structured).replaceAll('<','\\u003c')}</script>
</body>
</html>
`;
  const directory = new URL(`projekte/${slug}/`, root);
  await mkdir(directory, {recursive:true});
  await writeFile(new URL('index.html',directory),html);
}
console.log(`Generated ${projects.length} static project pages.`);
