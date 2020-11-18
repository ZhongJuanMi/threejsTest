import { WebGLRenderer, Vector2 } from "three";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";
import { resizeRendererToDisplaySize } from "../../../utils";
import { tank, wheelMeshes, curve } from "../tank/scene/objects";
import camera from "./camera";
import scene from "./scene";

// 初始化渲染器
const renderer = new WebGLRenderer({ antialias: true });
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);
renderer.setClearColor(0xaaaaaa);
renderer.shadowMap = true;
new OrbitControls(camera, renderer.domElement);
let tankPosition = new Vector2();
curve.getPointAt(0.001 % 1, tankPosition);
console.log(tankPosition.x);
// 渲染
function render(time = 1) {
  time *= 0.001;
  if (resizeRendererToDisplaySize(renderer)) {
    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();
  }
  wheelMeshes.forEach((wheel) => {
    wheel.rotation.x = time;
  });
  const tankTime = time * 0.05;
  curve.getPointAt(tankTime % 1, tankPosition);
  tank.position.set(tankPosition.x, 0, tankPosition.y);
  renderer.render(scene, camera);
  requestAnimationFrame(render);
}
render();
