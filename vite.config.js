import { fileURLToPath } from 'node:url';
import { copyFile, mkdir, readFile } from 'node:fs/promises';
import { dirname, resolve } from 'node:path';

// Vite cannot discover image URLs in project data or absolute social metadata.
// Preserve those stable URLs, including the image links used without JavaScript.
const root = fileURLToPath(new URL('.', import.meta.url));
const staticPortfolioFiles = {
  name: 'portfolio-static-files',
  async writeBundle(options) {
    const [html, projects, ...casePages] = await Promise.all([
      readFile(resolve(root, 'index.html'), 'utf8'),
      readFile(resolve(root, 'project-details.js'), 'utf8'),
      ...['chicos-hermanos','fortis-anima','salon-samo','mine-hotel','roboterly'].map(slug => readFile(resolve(root, `projekte/${slug}/index.html`), 'utf8')),
    ]);
    const paths = new Set([
      ...Array.from(projects.matchAll(/['"]\/?(assets\/[^'"\s]+)['"]/g), match => match[1]),
      ...Array.from(html.matchAll(/href="\/(assets\/[^"\s]+)"/g), match => match[1].split(/[?#]/)[0]),
      ...Array.from(casePages.join('\n').matchAll(/content="https:\/\/www\.mario-goettling\.de\/(assets\/[^"\s]+)"/g), match => match[1]),
      'assets/brand/social-preview.jpg',
      'assets/models/zombonaut.glb', 'assets/models/mother-maggot.glb', 'assets/models/big-boi.glb',
      'assets/fonts/dm-sans-OFL.txt',
      'assets/fonts/archivo-black-OFL.txt',
      'robots.txt', 'sitemap.xml',
    ]);
    for (const path of paths) {
      const destination = resolve(options.dir, path);
      await mkdir(dirname(destination), { recursive: true });
      await copyFile(resolve(root, path), destination);
    }
  },
};

// Match the directory redirect used by static hosts before Vite's SPA fallback.
function redirectWebdesign(server) {
  server.middlewares.use((req, res, next) => {
    const match = req.url?.match(/^(\/webdesign|\/projekte\/(?:chicos-hermanos|fortis-anima|salon-samo|mine-hotel|roboterly))(\?.*)?$/);
    if (!match) return next();
    res.writeHead(301, { Location: `${match[1]}/${match[2] || ''}` });
    res.end();
  });
}

export default {
  plugins: [staticPortfolioFiles, {
    name: 'webdesign-directory-route',
    configureServer: redirectWebdesign,
    configurePreviewServer: redirectWebdesign,
  }],
  build: {
    rollupOptions: {
      input: {
        portfolio: fileURLToPath(new URL('./index.html', import.meta.url)),
        webdesign: fileURLToPath(new URL('./webdesign/index.html', import.meta.url)),
        impressum: fileURLToPath(new URL('./impressum.html', import.meta.url)),
        datenschutz: fileURLToPath(new URL('./datenschutz.html', import.meta.url)),
        ...Object.fromEntries(['chicos-hermanos','fortis-anima','salon-samo','mine-hotel','roboterly'].map(slug => [`project-${slug}`, fileURLToPath(new URL(`./projekte/${slug}/index.html`, import.meta.url))])),
      },
    },
  },
};
