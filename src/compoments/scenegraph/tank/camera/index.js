import { PerspectiveCamera } from "three";
// 初始化相机
const fov = 75;
const aspect = window.innerWidth / window.innerHeight;
const near = 0.1;
const far = 1000;
const camera = new PerspectiveCamera(fov, aspect, near, far);
camera.position.set(5, 8, 25);
const tankCamera = new PerspectiveCamera(fov, aspect, near, far);
export { camera, tankCamera };
