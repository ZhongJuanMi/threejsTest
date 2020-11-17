import { resizeRendererToDisplaySize } from "../../../utils";
import { initCamera } from "./camera";
import { initScene } from "./scene";
import { initRender } from "./render";
import { solarSystem, earthOrbit, moonMesh, sunMesh } from "./scene/objects";
let camera, scene, renderer;

// 初始化
function main() {
  camera = initCamera();
  scene = initScene();
  renderer = initRender();
  render();
}
// 渲染
function render(time) {
  time *= 0.0005;
  if (resizeRendererToDisplaySize(renderer)) {
    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();
  }
  solarSystem.rotation.y = time;
  earthOrbit.rotation.y = time;
  moonMesh.rotation.y = time;
  sunMesh.rotation.y = -time;
  renderer.render(scene, camera);
  requestAnimationFrame(render);
}
main();
