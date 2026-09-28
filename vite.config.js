import { fileURLToPath } from 'node:url';
import { copyFile, mkdir, readFile } from 'node:fs/promises';
import { dirname, resolve } from 'node:path';

// Vite cannot discover image URLs in project data or absolute social metadata.
// Preserve those stable URLs, including the image links used without JavaScript.
const root = fileURLToPath(new URL('.', import.meta.url));
const staticPortfolioFiles = {
  name: 'portfolio-static-files',
  async writeBundle(options) {
    const [html, projects] = await Promise.all([
      readFile(resolve(root, 'index.html'), 'utf8'),
      readFile(resolve(root, 'project-details.js'), 'utf8'),
    ]);
    const paths = new Set([
      ...Array.from(projects.matchAll(/['"]\/?(assets\/[^'"\s]+)['"]/g), match => match[1]),
      ...Array.from(html.matchAll(/href="\/(assets\/[^"\s]+)"/g), match => match[1]),
      'assets/brand/social-preview.jpg',
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

export default {
  plugins: [staticPortfolioFiles],
  build: {
    rollupOptions: {
      input: {
        portfolio: fileURLToPath(new URL('./index.html', import.meta.url)),
        impressum: fileURLToPath(new URL('./impressum.html', import.meta.url)),
        datenschutz: fileURLToPath(new URL('./datenschutz.html', import.meta.url)),
      },
    },
  },
};
