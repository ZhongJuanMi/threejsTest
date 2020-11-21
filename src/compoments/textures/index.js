import * as THREE from "three";
import { cube } from "./model";
import "./gui";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";
import { resizeRendererToDisplaySize } from "../../utils";
let camera, scene, renderer;
let model = cube;
// 初始化相机
function initCamera() {
  const fov = 75;
  const aspect = window.innerWidth / window.innerHeight;
  const near = 0.1;
  const far = 1000;
  camera = new THREE.PerspectiveCamera(fov, aspect, near, far);
  camera.position.set(0, 0, 20);
  camera.lookAt(model.position);
}
// 初始化场景
function initScene() {
  scene = new THREE.Scene();
}
// 初始化灯光
function initLight() {
  const color = "#fff";
  const dirLight = new THREE.DirectionalLight(color);
  dirLight.position.set(-20, 50, 30);
  scene.add(dirLight);
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
  scene.add(model);
}
// 初始化辅助线
function initHelper() {
  new OrbitControls(camera, renderer.domElement);
}

// 初始化
function main() {
  initCamera();
  initScene();
  initModle();
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
  model.rotation.x = time;
  model.rotation.y = time;
  renderer.render(scene, camera);
  requestAnimationFrame(render);
}
main();
