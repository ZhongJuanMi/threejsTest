import { WebGLRenderer, Vector2, Vector3 } from "three";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";
import { resizeRendererToDisplaySize } from "../../../utils";
import {
  tank,
  wheelMeshes,
  curve,
  targetOrbit,
  targetMesh,
  turretPivot,
} from "../tank/scene/objects";
import { camera } from "./camera";
import scene from "./scene";

// 初始化渲染器
const renderer = new WebGLRenderer({ antialias: true });
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);
renderer.setClearColor(0xaaaaaa);
renderer.shadowMap = true;
new OrbitControls(camera, renderer.domElement);
let tankPosition = new Vector2();
let nextTankPosition = new Vector2();
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
  // 移动tank
  const tankTime = time * 0.05;
  curve.getPointAt(tankTime % 1, tankPosition);
  curve.getPointAt((tankTime + 0.01) % 1, nextTankPosition);
  tank.lookAt(nextTankPosition.x, 0, nextTankPosition.y);
  tank.position.set(tankPosition.x, 0, tankPosition.y);
  // 移动目标
  targetMesh.rotation.x = time * 2;
  targetMesh.rotation.y = time * 2;
  targetOrbit.rotation.y = time;
  // 移动炮
  const targetPosition = new Vector3();
  targetMesh.getWorldPosition(targetPosition);
  turretPivot.lookAt(targetPosition);
  renderer.render(scene, camera);
  requestAnimationFrame(render);
}
render();
