import { PerspectiveCamera, OrthographicCamera } from "three";
// 透视相机
// const fov = 45;
// const aspect = window.innerWidth / window.innerHeight;
// const near = 0.1;
// const far = 100;
// const pCamera = new PerspectiveCamera(fov, aspect, near, far);
// pCamera.position.set(0, 10, 20);
// 正交相机
// 将相机焦点设置在中心
// camera.left = -canvas.width / 2;
// camera.right = canvas.width / 2;
// camera.top = canvas.height / 2;
// camera.bottom = -canvas.height / 2;
// camera.near = -1;
// camera.far = 1;
// camera.zoom = 1;
// 将相机焦点设置在左上角
// camera.left = 0;
// camera.right = canvas.width;
// camera.top = 0;
// camera.bottom = canvas.height;
// camera.near = -1;
// camera.far = 1;
// camera.zoom = 1;
const left = 0;
const right = window.innerWidth;
const top = 0;
const bottom = window.innerHeight;
const zoom = 1;
const onear = -1;
const ofar = 1;
const oCamera = new OrthographicCamera(
  left,
  right,
  top,
  bottom,
  onear,
  ofar,
  zoom
);
// oCamera.position.set(0, 30, 0);
export { oCamera };
