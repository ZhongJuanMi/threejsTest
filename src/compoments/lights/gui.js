import { GUI } from "dat.gui";
import { MathUtils } from "three";
import {
  ambLight,
  hemLight,
  dirLight,
  dirHelper,
  pointLight,
  pointHelper,
  spotLight,
  spotHelper,
  rectLight,
  rectHelper,
} from "./light";
const gui = new GUI();
class ColorGUIHelper {
  constructor(object, prop) {
    this.object = object;
    this.prop = prop;
  }
  get value() {
    return `#${this.object[this.prop].getHexString()}`;
  }
  set value(hexString) {
    this.object[this.prop].set(hexString);
  }
}
// 环境光调试
// gui.add(ambLight, "intensity", 0, 2);
// gui.addColor(new ColorGUIHelper(ambLight, "color"), "value").name("color");
// 半球光调试
// gui.add(hemLight, "intensity", 0, 2);
// gui.addColor(new ColorGUIHelper(hemLight, "color"), "value").name("skyColor");
// gui
//   .addColor(new ColorGUIHelper(hemLight, "groundColor"), "value")
//   .name("groundColor");
// 无限光调试
// gui.addColor(new ColorGUIHelper(dirLight, "color"), "value").name("color");
// gui.add(dirLight, "intensity", 0, 2, 0.01);
function makeXYZGUI(gui, vector3, name, onChangeFn) {
  const folder = gui.addFolder(name);
  folder.add(vector3, "x", -10, 10).onChange(onChangeFn);
  folder.add(vector3, "y", 0, 10).onChange(onChangeFn);
  folder.add(vector3, "z", -10, 10).onChange(onChangeFn);
  folder.open();
}

// function updateLight() {
//   dirLight.target.updateMatrixWorld();
//   dirHelper.update();
// }
// updateLight();
// makeXYZGUI(gui, dirLight.position, "directionLight位置", updateLight);
// makeXYZGUI(
//   gui,
//   dirLight.target.position,
//   "directionLight目标的位置",
//   updateLight
// );
// 点光源调试
// function updateLight() {
//   poiHelper.update();
// }
// gui.addColor(new ColorGUIHelper(pointLight, "color"), "value").name("color");
// gui.add(pointLight, "intensity", 0, 2, 0.01);
// gui.add(pointLight, "distance", 0, 40).onChange(updateLight);

// makeXYZGUI(gui, pointLight.position, "position", updateLight);
// 聚光灯调试
// function updateLight() {
//   spotLight.target.updateMatrixWorld();
//   spotHelper.update();
// }
// updateLight();
// gui.addColor(new ColorGUIHelper(spotLight, "color"), "value").name("color");
// gui.add(spotLight, "intensity", 0, 2, 0.01);
// gui.add(spotLight, "distance", 0, 40).onChange(updateLight);
// gui.add(spotLight, "angle", 0, Math.PI / 2).onChange(updateLight);
// gui.add(spotLight, "penumbra", 0, 1, 0.01);
// makeXYZGUI(gui, spotLight.position, "光源位置", updateLight);
// makeXYZGUI(gui, spotLight.target.position, "光源照射目标位置", updateLight);
// 矩形区域光调试
function updateLight() {
  rectHelper.update();
}
gui.addColor(new ColorGUIHelper(rectLight, "color"), "value").name("color");
gui.add(rectLight, "intensity", 0, 10, 0.1);
gui.add(rectLight, "width", 0, 20, 1).onChange(updateLight);
gui.add(rectLight, "height", 0, 20, 1).onChange(updateLight);
makeXYZGUI(gui, rectLight.position, "位置");
class DegRegHelper {
  constructor(obj, prop) {
    this.obj = obj;
    this.prop = prop;
  }
  get value() {
    return MathUtils.radToDeg(this.obj[this.prop]);
  }
  set value(val) {
    this.obj[this.prop] = MathUtils.degToRad(val);
  }
}
const folder = gui.addFolder("旋转角度");
const arr = ["x", "y", "z"];
arr.map((v) => {
  folder
    .add(new DegRegHelper(rectLight.rotation, v), "value", -180, 180)
    .name(v);
});
folder.open();
