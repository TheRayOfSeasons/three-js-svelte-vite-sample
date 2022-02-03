import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';

/**
 * Creates the main scene.
 * @param {HTMLElement} canvas
 */
export const createMainScene = canvas => {
  const canvasHeight = canvas.parentElement.clientHeight;
  const canvasWidth = canvas.parentElement.clientWidth;

  // renderer
  const renderer = new THREE.WebGLRenderer({
    antialias: true,
    canvas
  });
  renderer.setSize(canvasWidth, canvasHeight);
  renderer.setClearColor(0x000000, 1.0);

  // scene
  const scene = new THREE.Scene();

  // camera
  const camera = new THREE.PerspectiveCamera(
    75,
    canvasWidth / canvasHeight
  );
  camera.position.z = 8;

  // controls
  const controls = new OrbitControls(camera, canvas);
  controls.enableDamping = true;

  // mesh
  const geometry = new THREE.BoxBufferGeometry(3, 3, 3);
  const material = new THREE.MeshStandardMaterial({
    color: '#e7e7e7'
  });
  const mesh = new THREE.Mesh(geometry, material);
  mesh.rotation.z = -Math.PI * 0.15;
  scene.add(mesh);

  // lights
  const pointLight = new THREE.PointLight(0xFFFFFF, 1, 10);
  pointLight.position.set(4, 2, 3);
  scene.add(pointLight);

  // const helper = new THREE.PointLightHelper(pointLight, 5);
  // helper.color = '#ffff00';
  // scene.add(helper);

  // const spotLight = new THREE.SpotLight(0xffffff, 1, 50);
  // spotLight.position.x = 5;
  // scene.add(spotLight);

  // const helper = new THREE.SpotLightHelper(spotLight, 0xffff00);
  // scene.add(helper);

  // const directionalLight = new THREE.DirectionalLight(0xffffff);
  // directionalLight.position.set(3, 5, 0);
  // directionalLight.target = mesh;
  // scene.add(directionalLight);

  const ambientLight = new THREE.AmbientLight(0x111111);
  scene.add(ambientLight);

  // const hemiLight = new THREE.HemisphereLight(0xff0000, 0x00ff00);
  // scene.add(hemiLight);

  // const rectLight = new THREE.RectAreaLight(0xffffff, 10, 5, 5);
  // rectLight.position.y = -8;
  // scene.add(rectLight);

  // render
  renderer.setAnimationLoop(time => {
    controls.update();
    mesh.rotation.y = time * 0.001;
    renderer.render(scene, camera);
  });
};
