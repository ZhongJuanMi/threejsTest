import * as THREE from "three";
import img from "./checker.png";
import shadowImg from "./roundshadow.png";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";
import { resizeRendererToDisplaySize } from "../../utils";
let camera, scene, renderer;
let sphereShadowBases = [];
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
  {
    const skyColor = 0xb1e1ff; // light blue
    const groundColor = 0xb97a20; // brownish orange
    const intensity = 2;
    const light = new THREE.HemisphereLight(skyColor, groundColor, intensity);
    scene.add(light);
  }
  {
    const color = 0xffffff;
    const intensity = 1;
    const light = new THREE.DirectionalLight(color, intensity);
    light.position.set(0, 10, 5);
    light.target.position.set(-5, 0, 0);
    scene.add(light);
    scene.add(light.target);
  }
}
// 初始化渲染器
function initRender() {
  renderer = new THREE.WebGLRenderer({ antialias: true });
  renderer.setSize(window.innerWidth, window.innerHeight);
  document.body.appendChild(renderer.domElement);
  renderer.setClearColor(0xffffff, 1.0);
  renderer.physicallyCorrectLights = true;
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
  const planeMaterial = new THREE.MeshBasicMaterial({
    map: texture,
    side: THREE.DoubleSide,
  });
  planeMaterial.color.setRGB(1.5, 1.5, 1.5);
  const plane = new THREE.Mesh(planeGeometry, planeMaterial);
  plane.rotation.x = -Math.PI * 0.5;
  scene.add(plane);
  // 球体
  const sphereRadius = 1;
  const sphereWidthSegments = 32;
  const sphereHeightSegments = 16;
  const sphereGeo = new THREE.SphereBufferGeometry(
    sphereRadius,
    sphereWidthSegments,
    sphereHeightSegments
  );

  // 阴影
  const shadowSize = sphereRadius * 4;
  const shadowTexture = loader.load(shadowImg);
  const shadowGeo = new THREE.PlaneBufferGeometry(shadowSize, shadowSize);

  // 批量生成球体
  const sphereNum = 15;
  for (let i = 0; i < sphereNum; i++) {
    const base = new THREE.Object3D();
    scene.add(base);
    const shadowMat = new THREE.MeshBasicMaterial({
      map: shadowTexture,
      transparent: true,
      depthWrite: false,
    });
    const shadowMesh = new THREE.Mesh(shadowGeo, shadowMat);
    shadowMesh.position.y = 0.001;
    shadowMesh.rotation.x = -Math.PI * 0.5;
    base.add(shadowMesh);
    const u = i / sphereNum;
    const sphereMat = new THREE.MeshPhongMaterial();
    sphereMat.color.setHSL(u, 1, 0.75);
    const sphereMesh = new THREE.Mesh(sphereGeo, sphereMat);
    sphereMesh.position.y = sphereRadius + 2;
    base.add(sphereMesh);
    sphereShadowBases.push({
      base,
      sphereMesh,
      shadowMesh,
      y: sphereMesh.position.y,
    });
  }
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
  time *= 0.001;
  if (resizeRendererToDisplaySize(renderer)) {
    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();
  }
  sphereShadowBases.forEach((sphereShadowBase, ndx) => {
    const { base, sphereMesh, shadowMesh, y } = sphereShadowBase;

    // u is a value that goes from 0 to 1 as we iterate the spheres
    const u = ndx / sphereShadowBases.length;

    // compute a position for the base. This will move
    // both the sphere and its shadow
    const speed = time * 0.2;
    const angle = speed + u * Math.PI * 2;
    const radius = Math.sin(speed - ndx) * 10;
    base.position.set(Math.cos(angle) * radius, 0, Math.sin(angle) * radius);

    // yOff is a value that goes from 0 to 1
    const yOff = Math.abs(Math.sin(time * 2 + ndx));
    // move the sphere up and down
    sphereMesh.position.y = y + THREE.MathUtils.lerp(-2, 2, yOff);
    // fade the shadow as the sphere goes up
    shadowMesh.material.opacity = THREE.MathUtils.lerp(1, 0.25, yOff);
  });
  renderer.render(scene, camera);
  requestAnimationFrame(render);
}
main();
