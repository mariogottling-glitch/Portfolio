// Usage: node scripts/prepare-sculpt.mjs input.obj|stl output.glb
// Originals are read only. Intermediate geometry stays in ignored tmp/.
import fs from 'node:fs';
import path from 'node:path';
import { spawnSync } from 'node:child_process';

const [source, destination] = process.argv.slice(2);
if (!source || !destination) throw new Error('Expected input OBJ/STL and output GLB paths.');
let positions, indices;
if (path.extname(source).toLowerCase() === '.stl') {
  const bytes = fs.readFileSync(source);
  const count = bytes.readUInt32LE(80);
  if (bytes.length !== 84 + count * 50) throw new Error('Expected binary STL.');
  positions = new Float32Array(count * 9);
  indices = new Uint32Array(count * 3);
  for (let i = 0; i < count; i++) {
    for (let j = 0; j < 9; j++) positions[i * 9 + j] = bytes.readFloatLE(84 + i * 50 + 12 + j * 4);
    for (let j = 0; j < 3; j++) indices[i * 3 + j] = i * 3 + j;
  }
} else {
  const vertices = [], faces = [];
  for (const line of fs.readFileSync(source, 'utf8').split(/\r?\n/)) {
    if (line.startsWith('v ')) vertices.push(...line.trim().split(/\s+/).slice(1, 4).map(Number));
    if (line.startsWith('f ')) {
      const f = line.trim().split(/\s+/).slice(1).map(v => { const n = Number(v.split('/')[0]); return n < 0 ? vertices.length / 3 + n : n - 1; });
      for (let j = 1; j < f.length - 1; j++) faces.push(f[0], f[j], f[j + 1]);
    }
  }
  positions = new Float32Array(vertices);
  indices = new Uint32Array(faces);
}
const min = [Infinity, Infinity, Infinity], max = [-Infinity, -Infinity, -Infinity];
for (let i = 0; i < positions.length; i++) {
  const a = i % 3;
  if (!Number.isFinite(positions[i])) throw new Error('Non-finite vertex');
  min[a] = Math.min(min[a], positions[i]); max[a] = Math.max(max[a], positions[i]);
}
const size = max.map((n, a) => n - min[a]);
const scale = 2 / Math.max(...size);
for (let i = 0; i < positions.length; i++) positions[i] = (positions[i] - (min[i % 3] + max[i % 3]) / 2) * scale;
const json = {
  asset: { version: '2.0', generator: 'Portfolio sculpt web preparation' },
  scene: 0, scenes: [{ nodes: [0] }], nodes: [{ mesh: 0 }],
  meshes: [{ primitives: [{ attributes: { POSITION: 0 }, indices: 1 }] }],
  accessors: [
    { bufferView: 0, componentType: 5126, count: positions.length / 3, type: 'VEC3', min: size.map(n => -n * scale / 2), max: size.map(n => n * scale / 2) },
    { bufferView: 1, componentType: 5125, count: indices.length, type: 'SCALAR' }
  ],
  bufferViews: [{ buffer: 0, byteOffset: 0, byteLength: positions.byteLength, target: 34962 }, { buffer: 0, byteOffset: positions.byteLength, byteLength: indices.byteLength, target: 34963 }],
  buffers: [{ byteLength: positions.byteLength + indices.byteLength }]
};
const body = Buffer.from(JSON.stringify(json));
const padded = Buffer.alloc(Math.ceil(body.length / 4) * 4, 32); body.copy(padded);
const header = Buffer.alloc(20); header.writeUInt32LE(0x46546c67); header.writeUInt32LE(2, 4);
header.writeUInt32LE(28 + padded.length + positions.byteLength + indices.byteLength, 8);
header.writeUInt32LE(padded.length, 12); header.writeUInt32LE(0x4e4f534a, 16);
const binHeader = Buffer.alloc(8); binHeader.writeUInt32LE(positions.byteLength + indices.byteLength); binHeader.writeUInt32LE(0x004e4942, 4);
fs.mkdirSync('tmp', { recursive: true }); fs.mkdirSync(path.dirname(destination), { recursive: true });
const intermediate = path.join('tmp', `${path.basename(destination)}.source.glb`);
fs.writeFileSync(intermediate, Buffer.concat([header, padded, binHeader, Buffer.from(positions.buffer), Buffer.from(indices.buffer)]));
console.log(JSON.stringify({ source: path.basename(source), originalTriangles: indices.length / 3, bounds: size }));
const ratio = Math.min(1, 180000 / (indices.length / 3));
const result = spawnSync(process.execPath, ['node_modules/gltfpack/cli.js', '-i', intermediate, '-o', destination, '-cc', '-si', String(ratio), '-se', '0.002', '-sp', '-sv', '-gn', '65', '-v'], { encoding: 'utf8' });
process.stdout.write(result.stdout || ''); process.stderr.write(result.stderr || '');
if (result.status !== 0) throw new Error('gltfpack failed');
console.log(`Web model: ${fs.statSync(destination).size} bytes`);
