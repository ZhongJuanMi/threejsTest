import { GUI } from "dat.gui";
import * as THREE from "three";
import light from "./light";
const gui = new GUI();
gui.add(light, "intensity", 0, 2);
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
// gui.addColor(new ColorGUIHelper(light, "color"), "value").name("color");
// 半球光调试
gui.addColor(new ColorGUIHelper(light, "color"), "value").name("skyColor");
gui
  .addColor(new ColorGUIHelper(light, "groundColor"), "value")
  .name("groundColor");
