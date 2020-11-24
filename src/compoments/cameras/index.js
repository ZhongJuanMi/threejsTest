import * as THREE from "three";
import { pCamera, oCamera } from "./camera";
import img from "./checker.png";
// import "./gui";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";
import { resizeRendererToDisplaySize } from "../../utils";
let camera, scene, renderer;
let planes, planeSize;
// 初始化相机
function initCamera() {
  // camera = pCamera;
  camera = oCamera;
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
  light.position.set(0, 10, 0);
  light.target.position.set(-5, 0, 0);
  scene.add(light);
  scene.add(light.target);
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
  // const planeSize = 40;
  // const loader = new THREE.TextureLoader();
  // const texture = loader.load(img);
  // const repeats = planeSize / 2;
  // texture.repeat.set(repeats, repeats);
  // texture.wrapS = THREE.RepeatWrapping;
  // texture.wrapT = THREE.RepeatWrapping;
  // texture.magFilter = THREE.NearestFilter;
  // const planeGeometry = new THREE.PlaneBufferGeometry(planeSize, planeSize);
  // const planeMaterial = new THREE.MeshPhongMaterial({
  //   map: texture,
  //   side: THREE.DoubleSide,
  // });
  // const plane = new THREE.Mesh(planeGeometry, planeMaterial);
  // plane.rotation.x = -Math.PI * 0.5;
  // scene.add(plane);
  // 方块
  // const cubeSize = 4;
  // const cubeGeometry = new THREE.BoxBufferGeometry(
  //   cubeSize,
  //   cubeSize,
  //   cubeSize
  // );
  // const cubeMaterial = new THREE.MeshPhongMaterial({
  //   color: "#8AC",
  // });
  // const cube = new THREE.Mesh(cubeGeometry, cubeMaterial);
  // cube.position.set(cubeSize + 1, cubeSize / 2, 0);
  // scene.add(cube);
  // 球
  // const sphereRadius = 3;
  // const sphereWidthSegments = 32;
  // const sphereHeightSegments = 16;
  // const sphereGeo = new THREE.SphereBufferGeometry(
  //   sphereRadius,
  //   sphereWidthSegments,
  //   sphereHeightSegments
  // );
  // const sphereMat = new THREE.MeshPhongMaterial({ color: "#CA8" });
  // const sphere = new THREE.Mesh(sphereGeo, sphereMat);
  // sphere.position.set(-sphereRadius - 1, sphereRadius + 2, 0);
  // scene.add(sphere);
  const loader = new THREE.TextureLoader();
  const textures = [];
  for (let i = 0; i < 6; i++) {
    textures.push(
      loader.load(
        `https://threejsfundamentals.org/threejs/resources/images/flower-${
          i + 1
        }.jpg`
      )
    );
  }
  planeSize = 256;
  const planeGeo = new THREE.PlaneBufferGeometry(planeSize, planeSize);
  planes = textures.map((texture) => {
    const planePivot = new THREE.Object3D();
    scene.add(planePivot);
    texture.magFilter = THREE.NearestFilter;
    const planeMat = new THREE.MeshBasicMaterial({
      map: texture,
      side: THREE.DoubleSide,
    });
    const mesh = new THREE.Mesh(planeGeo, planeMat);
    planePivot.add(mesh);
    mesh.position.set(planeSize / 2, planeSize / 2, 0);
    return planePivot;
  });
}
// 初始化辅助线
function initHelper() {
  // const controls = new OrbitControls(camera, renderer.domElement);
  // controls.target.set(0, 5, 0);
  // controls.update();
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
  time *= 0.001;
  if (resizeRendererToDisplaySize(renderer)) {
    // camera.aspect = window.innerWidth / window.innerHeight;
    camera.right = window.innerWidth;
    camera.bottom = window.innerHeight;
    camera.updateProjectionMatrix();
  }
  const distCross = Math.max(20, window.innerWidth - planeSize);
  const distDown = Math.max(20, window.innerHeight - planeSize);
  const xRange = distCross * 2;
  const yRange = distDown * 2;
  const speed = 180;
  planes.forEach((plane, ndx) => {
    const t = time * speed + ndx * 300;
    const xt = t % xRange;
    const yt = t % yRange;
    const x = xt < distCross ? xt : xRange - xt;
    const y = yt < distDown ? yt : yRange - yt;
    plane.position.set(x, y, 0);
  });
  renderer.render(scene, camera);
  requestAnimationFrame(render);
}
main();
