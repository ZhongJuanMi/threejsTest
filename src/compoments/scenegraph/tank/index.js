import { WebGLRenderer } from "three";
import { resizeRendererToDisplaySize } from "../../../utils";
import camera from "./camera";
import scene from "./scene";

// 初始化渲染器
const renderer = new WebGLRenderer({ antialias: true });
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);
renderer.setClearColor(0xaaaaaa);
renderer.shadowMap = true;

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
render();
