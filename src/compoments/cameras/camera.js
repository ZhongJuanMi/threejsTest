import { PerspectiveCamera, OrthographicCamera } from "three";
// 透视相机
const fov = 45;
const aspect = window.innerWidth / window.innerHeight;
const near = 0.1;
const far = 100;
const pCamera = new PerspectiveCamera(fov, aspect, near, far);
pCamera.position.set(0, 10, 20);
// 正交相机
const left = -1;
const right = 1;
const top = 1;
const bottom = -1;
const zoom = 1;
const oCamera = new OrthographicCamera(
  left,
  right,
  top,
  bottom,
  near,
  far,
  zoom
);
export { pCamera, oCamera };
