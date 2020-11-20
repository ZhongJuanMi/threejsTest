import { PerspectiveCamera } from "three";
// 初始化相机
export function initCamera() {
  const fov = 75;
  const aspect = window.innerWidth / window.innerHeight;
  const near = 0.1;
  const far = 1000;
  const camera = new PerspectiveCamera(fov, aspect, near, far);
  camera.position.set(-14, 5, 20);
  camera.lookAt(0, 0, 0);
  return camera;
}
