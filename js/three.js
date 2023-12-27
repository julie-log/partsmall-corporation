import * as THREE from "three";

const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(
  75,
  window.innerWidth / window.innerHeight,
  0.1,
  1000
);

const renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

const geometry = new THREE.SphereGeometry(5, 32, 32);
const material = new THREE.MeshBasicMaterial({
  color: 0xffffff,
  wireframe: true,
});
const earth = new THREE.Mesh(geometry, material);
scene.add(earth);

camera.position.z = 15;

function animate() {
  requestAnimationFrame(animate);

  earth.rotation.y += 0.01;

  renderer.render(scene, camera);
}

animate();
