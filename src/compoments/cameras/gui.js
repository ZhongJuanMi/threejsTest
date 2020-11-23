import { GUI } from "dat.gui";
import { pCamera, oCamera } from "./camera";
const gui = new GUI();
// 透视相机调试
// function updateCamera() {
//   pCamera.updateProjectionMatrix();
// }
// function makXYZHelper(gui, victor3, min, max) {
//   const folder = gui.addFolder();
//   folder.add(victor3, "x", min, max);
//   folder.add(victor3, "y", min, max);
//   folder.add(victor3, "z", min, max);
//   folder.open();
// }
// gui.add(pCamera, "fov", 0, 180).onChange(updateCamera);
// gui.add(pCamera, "near", 0, 10).onChange(updateCamera);
// gui.add(pCamera, "far", 10, 1000).onChange(updateCamera);
// makXYZHelper(gui, pCamera.position, -20, 20);
// 正交相机调试
function updateCamera() {
  oCamera.updateProjectionMatrix();
}
gui.add(oCamera, "near", 0, 10).onChange(updateCamera);
gui.add(oCamera, "far", 10, 1000).onChange(updateCamera);
gui.add(oCamera, "zoom", 0, 1).onChange(updateCamera);
gui.add(oCamera, "left", -40, 40).onChange(updateCamera);
gui.add(oCamera, "right", -40, 40).onChange(updateCamera);
gui.add(oCamera, "top", -40, 40).onChange(updateCamera);
gui.add(oCamera, "bottom", -40, 40).onChange(updateCamera);
