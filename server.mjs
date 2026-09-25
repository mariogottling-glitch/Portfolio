import { createServer } from 'node:http';
import { readFile } from 'node:fs/promises';
import { extname, join, normalize } from 'node:path';
import { fileURLToPath } from 'node:url';

const root = fileURLToPath(new URL('.', import.meta.url));
const types = { '.html': 'text/html; charset=utf-8', '.css': 'text/css; charset=utf-8', '.js': 'text/javascript; charset=utf-8', '.png': 'image/png', '.jpg': 'image/jpeg', '.jpeg': 'image/jpeg' };
const server = createServer(async (req, res) => {
  const requestPath = decodeURIComponent((req.url || '/').split('?')[0]);
  const safePath = normalize(requestPath === '/' ? '/index.html' : requestPath).replace(/^\.\.[\\/]/, '');
  const filePath = join(root, safePath);
  try { const body = await readFile(filePath); res.writeHead(200, { 'Content-Type': types[extname(filePath)] || 'application/octet-stream' }); res.end(body); }
  catch { res.writeHead(404); res.end('Not found'); }
});
server.listen(4173, '127.0.0.1', () => console.log('Portfolio preview on http://127.0.0.1:4173'));
