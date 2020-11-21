import * as THREE from "three";
import img from "./checker.png";
import light from "./light";
import './gui'
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";
import { resizeRendererToDisplaySize } from "../../utils";
let camera, scene, renderer;
// 初始化相机
function initCamera() {
  const fov = 45;
  const aspect = window.innerWidth / window.innerHeight;
  const near = 0.1;
  const far = 100;
  camera = new THREE.PerspectiveCamera(fov, aspect, near, far);
  camera.position.set(0, 10, 20);
}
// 初始化场景
function initScene() {
  scene = new THREE.Scene();
}
// 初始化灯光
function initLight() {
  scene.add(light);
}
// 初始化渲染器
function initRender() {
  renderer = new THREE.WebGLRenderer({ antialias: true });
  renderer.setSize(window.innerWidth, window.innerHeight);
  document.body.appendChild(renderer.domElement);
  renderer.setClearColor(0x000000, 1.0);
}
// 初始化模型
function initModle() {
  // 平面
  const planeSize = 40;
  const loader = new THREE.TextureLoader();
  const texture = loader.load(img);
  const repeats = planeSize / 2;
  texture.repeat.set(repeats, repeats);
  texture.wrapS = THREE.RepeatWrapping;
  texture.wrapT = THREE.RepeatWrapping;
  texture.magFilter = THREE.NearestFilter;
  const planeGeometry = new THREE.PlaneBufferGeometry(planeSize, planeSize);
  const planeMaterial = new THREE.MeshPhongMaterial({
    map: texture,
    side: THREE.DoubleSide,
  });
  const plane = new THREE.Mesh(planeGeometry, planeMaterial);
  plane.rotation.x = -Math.PI * 0.5;
  scene.add(plane);
  // 方块
  const cubeSize = 4;
  const cubeGeometry = new THREE.BoxBufferGeometry(
    cubeSize,
    cubeSize,
    cubeSize
  );
  const cubeMaterial = new THREE.MeshPhongMaterial({ color: "#8AC" });
  const cube = new THREE.Mesh(cubeGeometry, cubeMaterial);
  cube.position.set(cubeSize + 1, cubeSize / 2, 0);
  scene.add(cube);
  // 球
  const sphereRadius = 3;
  const sphereWidthSegments = 32;
  const sphereHeightSegments = 16;
  const sphereGeo = new THREE.SphereBufferGeometry(
    sphereRadius,
    sphereWidthSegments,
    sphereHeightSegments
  );
  const sphereMat = new THREE.MeshPhongMaterial({ color: "#CA8" });
  const sphere = new THREE.Mesh(sphereGeo, sphereMat);
  sphere.position.set(-sphereRadius - 1, sphereRadius + 2, 0);
  scene.add(sphere);
}
// 初始化辅助线
function initHelper() {
  const controls = new OrbitControls(camera, renderer.domElement);
  controls.target.set(0, 5, 0);
  controls.update();
}

// 初始化
function main() {
  initScene();
  initModle();
  initCamera();
  initLight();
  initRender();
  initHelper();
  render();
}
// 渲染
function render(time) {
  time *= 0.0005;
  if (resizeRendererToDisplaySize(renderer)) {
    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();
  }
  renderer.render(scene, camera);
  requestAnimationFrame(render);
}
main();
