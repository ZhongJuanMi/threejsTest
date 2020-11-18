import { PerspectiveCamera } from "three";
// 初始化相机
const fov = 75;
const aspect = window.innerWidth / window.innerHeight;
const near = 0.1;
const far = 1000;
const camera = new PerspectiveCamera(fov, aspect, near, far);
camera.position.set(15, 15, 0);
camera.lookAt(0, 0, 0);
let mouseDown = false;
let mouseX = 0;
let mouseY = 0;
function onMouseDown(event) {
  event.preventDefault();
  mouseDown = true;
  mouseX = event.clientX;
  mouseY = event.clientY;
  document.addEventListener("mousemove", onMouseMove, false);
}

function onMouseup(event) {
  mouseDown = false;
  document.removeEventListener("mousemove", onMouseMove);
}

function onMouseMove(event) {
  if (!mouseDown) {
    return;
  }
  let difX = event.clientX - mouseX;
  let difY = event.clientY - mouseY;
  mouseX = event.clientX;
  mouseY = event.clientY;
  let angleX = difX / window.innerWidth;
  let angleY = deltaY * (Math.PI / window.innerHeight);
  let x = camera.position.x + Math.sin(angleX / 2);
  let y = camera.position.y;
  let z = camera.position.z + Math.cos(angleY / 2);
  camera.position.set(x, y, z);
}
document.addEventListener("mousedown", onMouseDown, false);
document.addEventListener("mouseup", onMouseup, false);
export default camera;
