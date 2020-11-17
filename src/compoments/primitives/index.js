import * as THREE from "three";
import { initCube } from "./objects";
import { resizeRendererToDisplaySize } from "../../utils";
let camera, scene, renderer;
let model = initCube();
// 初始化相机
function initCamera() {
  const fov = 75;
  const aspect = window.innerWidth / window.innerHeight;
  const near = 0.1;
  const far = 1000;
  camera = new THREE.PerspectiveCamera(fov, aspect, near, far);
  camera.position.set(0, 10, 20);
  camera.lookAt(0, 0, 0);
}
// 初始化场景
function initScene() {
  scene = new THREE.Scene();
}
// 初始化灯光
function initLight() {
  const color = 0xffffff;
  const intensity = 3;
  const light = new THREE.PointLight(color, intensity);
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
  scene.add(model);
}
// 初始化辅助线
function initHelper() {}

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
  time *= 0.001;
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
