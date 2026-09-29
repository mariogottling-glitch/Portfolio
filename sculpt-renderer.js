import * as THREE from 'three';
import { OrbitControls } from 'three/addons/controls/OrbitControls.js';
import { GLTFLoader } from 'three/addons/loaders/GLTFLoader.js';
import { MeshoptDecoder } from 'three/addons/libs/meshopt_decoder.module.js';

function disposeObject(object) {
  object.traverse(item => {
    item.geometry?.dispose();
    const materials = Array.isArray(item.material) ? item.material : [item.material];
    materials.filter(Boolean).forEach(material => material.dispose());
  });
}

export function createSculptRenderer(host, onContextLost) {
  let disposed = false, model, frame = 0, distance = 4, bounds;
  const scene = new THREE.Scene();
  const camera = new THREE.PerspectiveCamera(35, 1, .01, 100);
  const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true, powerPreference: 'low-power' });
  renderer.setPixelRatio(Math.min(devicePixelRatio, 1.5));
  renderer.setClearColor(0x242423, 0);
  renderer.toneMapping = THREE.ACESFilmicToneMapping;
  renderer.toneMappingExposure = 1;
  renderer.domElement.setAttribute('aria-hidden', 'true');
  host.replaceChildren(renderer.domElement);
  const controls = new OrbitControls(camera, renderer.domElement);
  controls.enablePan = false;
  controls.enableDamping = false;
  controls.rotateSpeed = .65;
  controls.minPolarAngle = .12; controls.maxPolarAngle = Math.PI - .12;
  controls.addEventListener('change', draw);
  scene.add(new THREE.HemisphereLight(0xe5eef7, 0x39382b, .9));
  for (const [color, intensity, position] of [[0xfff3df, 2.8, [3, 4, 4]], [0xd2e2ff, .7, [-4, 1, 2]], [0xb1ef72, 1.8, [1, 3, -4]]]) {
    const light = new THREE.DirectionalLight(color, intensity); light.position.set(...position); scene.add(light);
  }
  const loader = new GLTFLoader().setMeshoptDecoder(MeshoptDecoder);
  function draw() {
    if (disposed || document.hidden || frame) return;
    frame = requestAnimationFrame(() => { frame = 0; if (!disposed && !document.hidden) renderer.render(scene, camera); });
  }
  function reset() {
    controls.target.set(0, 0, 0);
    camera.position.set(.28, .13, 1).normalize().multiplyScalar(distance);
    controls.update(); draw();
  }
  function resize() {
    const { width, height } = host.getBoundingClientRect();
    if (!width || !height || disposed) return;
    renderer.setSize(width, height, false); camera.aspect = width / height;
    camera.updateProjectionMatrix();
    fitDistance();
    controls.minDistance = distance * .3; controls.maxDistance = distance * 2.2;
    reset();
  }
  function fitDistance() {
    if (!bounds) return;
    const forward = new THREE.Vector3(.28, .13, 1).normalize();
    const right = new THREE.Vector3().crossVectors(new THREE.Vector3(0, 1, 0), forward).normalize();
    const up = new THREE.Vector3().crossVectors(forward, right);
    const tangent = Math.tan(THREE.MathUtils.degToRad(camera.fov / 2));
    distance = 0;
    for (const x of [bounds.min.x, bounds.max.x]) for (const y of [bounds.min.y, bounds.max.y]) for (const z of [bounds.min.z, bounds.max.z]) {
      const corner = new THREE.Vector3(x, y, z);
      distance = Math.max(distance, Math.abs(corner.dot(up)) / tangent + corner.dot(forward), Math.abs(corner.dot(right)) / (tangent * camera.aspect) + corner.dot(forward));
    }
    distance *= 1.08;
    controls.minDistance = distance * .3; controls.maxDistance = distance * 2.2;
  }
  const observer = new ResizeObserver(resize); observer.observe(host);
  function action(type) {
    if (type === 'reset') return reset();
    const offset = camera.position.clone().sub(controls.target);
    const radius = THREE.MathUtils.clamp(offset.length() * (type === 'in' ? .83 : 1.2), controls.minDistance, controls.maxDistance);
    camera.position.copy(controls.target).add(offset.setLength(radius)); controls.update(); draw();
  }
  function key(event) {
    if (['+', '=', '-', '0'].includes(event.key)) { event.preventDefault(); action(event.key === '0' ? 'reset' : event.key === '-' ? 'out' : 'in'); return; }
    if (!['ArrowLeft', 'ArrowRight', 'ArrowUp', 'ArrowDown'].includes(event.key)) return;
    event.preventDefault();
    const spherical = new THREE.Spherical().setFromVector3(camera.position.clone().sub(controls.target));
    spherical.theta += event.key === 'ArrowLeft' ? .15 : event.key === 'ArrowRight' ? -.15 : 0;
    spherical.phi = THREE.MathUtils.clamp(spherical.phi + (event.key === 'ArrowUp' ? -.12 : event.key === 'ArrowDown' ? .12 : 0), .12, Math.PI - .12);
    camera.position.copy(controls.target).add(new THREE.Vector3().setFromSpherical(spherical)); controls.update(); draw();
  }
  host.addEventListener('keydown', key);
  function contextLost(event) { event.preventDefault(); if (!disposed) onContextLost(); }
  renderer.domElement.addEventListener('webglcontextlost', contextLost);
  document.addEventListener('visibilitychange', draw);
  function clear() { if (model) { scene.remove(model); disposeObject(model); model = null; draw(); } }
  resize();
  return {
    async load(bytes, rotation, isCurrent) {
      const gltf = await loader.parseAsync(bytes, '');
      if (disposed || !isCurrent()) { disposeObject(gltf.scene); return; }
      clear(); model = gltf.scene;
      model.rotation.set(...rotation);
      model.updateMatrixWorld(true);
      const box = new THREE.Box3().setFromObject(model);
      const sphere = box.getBoundingSphere(new THREE.Sphere());
      model.scale.multiplyScalar(1 / sphere.radius);
      model.position.sub(sphere.center.multiplyScalar(1 / sphere.radius));
      model.traverse(item => {
        if (!item.isMesh) return;
        // Rebuild smooth normals for the reduced display mesh (one-time work).
        item.geometry.deleteAttribute('normal');
        item.geometry.computeVertexNormals();
        const old = Array.isArray(item.material) ? item.material : [item.material]; old.forEach(m => m.dispose());
        item.material = new THREE.MeshStandardMaterial({ color: 0xa89c88, roughness: .72, metalness: .08 });
      });
      scene.add(model); model.updateMatrixWorld(true); bounds = new THREE.Box3().setFromObject(model); fitDistance(); reset();
    },
    action, clear,
    dispose() {
      if (disposed) return;
      disposed = true; cancelAnimationFrame(frame); observer.disconnect();
      controls.dispose(); clear();
      host.removeEventListener('keydown', key);
      document.removeEventListener('visibilitychange', draw);
      renderer.domElement.removeEventListener('webglcontextlost', contextLost);
      renderer.dispose(); renderer.forceContextLoss(); host.replaceChildren();
    }
  };
}
