# Web sculpt previews

Original sculpts by Mario Göttling, provided for this portfolio. These are reduced,
untextured display copies; the original OBJ/STL files are not included or modified.

| Model | Source bytes | Source triangles | Web bytes | Web triangles |
| --- | ---: | ---: | ---: | ---: |
| Zombonaut | 40,567,416 | 1,002,773 | 836,432 | 179,526 |
| Mother Maggot | 35,366,048 | 800,012 | 718,748 | 179,996 |
| Big Boi | 127,730,784 | 2,554,614 | 716,148 | 175,698 |

Preparation: `node scripts/prepare-sculpt.mjs <source.obj-or-stl> <destination.glb>`.
The script normalizes geometry, writes an intermediate GLB to ignored `tmp/`, and
uses gltfpack 1.3 with a 180k triangle target, 0.2% error limit and meshopt compression.
Normals are rebuilt once in the viewer for the simplified surface. No texture files
are required; a shared clay material and studio lights show the sculpted form.

Runtime: locally bundled Three.js (MIT), OrbitControls, GLTFLoader and meshopt decoder
(MIT). Tools: gltfpack / meshoptimizer (MIT). Their license files are included in
the installed packages. No external viewer service, analytics or CDN is used.

All GLBs and the renderer chunk load only after opening the viewer. Only the selected
model is requested. Closing aborts pending downloads and releases geometry, materials,
controls and the WebGL context. Rendering is driven by interaction/resize, not a loop.
