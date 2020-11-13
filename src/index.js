import "./main.scss";
import * as THREE from "three";
import { initLathe } from "./modle";

let camera, scene, renderer;
let model = initLathe();

// 初始化相机
function initCamera() {
  const fov = 75;
  const aspect = window.innerWidth / window.innerHeight;
  const near = 0.1;
  const far = 100;
  camera = new THREE.PerspectiveCamera(fov, aspect, near, far);
  camera.position.z = 20;
}
// 初始化场景
function initScene() {
  scene = new THREE.Scene();
}
// 初始化灯光
function initLight() {
  const color = 0xffffff;
  const intensity = 1;
  const light = new THREE.DirectionalLight(color, intensity);
  light.position.set(-1, 2, 4);
  scene.add(light);
}
// 初始化渲染器
function initRender() {
  renderer = new THREE.WebGLRenderer({ antialias: true });
  renderer.setSize(window.innerWidth, window.innerHeight);
  document.body.appendChild(renderer.domElement);
  renderer.setClearColor(0xffffff, 1.0);
}
// 初始化模型
function initModle() {
  scene.add(model);
}
// 初始化辅助线
function initHelper() {
  const axesHelper = new THREE.AxesHelper(20);
  scene.add(axesHelper);
}
// 屏幕适配方案
function resizeRendererToDisplaySize(renderer) {
  const canvas = renderer.domElement;
  const width = window.innerWidth;
  const height = window.innerHeight;
  const needResize = canvas.width !== width || canvas.height !== height;
  if (needResize) {
    renderer.setSize(width, height, true);
  }
  return needResize;
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
// 动画
function render() {
  if (resizeRendererToDisplaySize(renderer)) {
    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();
  }
  // model.rotation.x += 0.005;
  model.rotation.y += 0.01;
  renderer.render(scene, camera);
  requestAnimationFrame(render);
}
main();
