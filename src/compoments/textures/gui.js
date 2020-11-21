import { GUI } from "dat.gui";
import * as THREE from "three";
import { texture5 } from "./model";
const texture = texture5;
const gui = new GUI();
// 重复模式
const wrapModes = {
  ClampToEdgeWrapping: THREE.ClampToEdgeWrapping,
  RepeatWrapping: THREE.RepeatWrapping,
  MirroredRepeatWrapping: THREE.MirroredRepeatWrapping,
};

function updateTexture() {
  texture.needsUpdate = true;
}
gui
  .add(texture, "wrapS", wrapModes)
  .name("texture.wrapS")
  .onChange(updateTexture);
gui
  .add(texture, "wrapT", wrapModes)
  .name("texture.wrapT")
  .onChange(updateTexture);
gui.add(texture.repeat, "x", 0, 5, 0.01).name("texture.repeat.x");
gui.add(texture.repeat, "y", 0, 5, 0.01).name("texture.repeat.y");
gui.add(texture.offset, "x", -2, 2, 0.01).name("texture.offset.x");
gui.add(texture.offset, "y", -2, 2, 0.01).name("texture.offset.y");
gui.add(texture.center, "x", -0.5, 1.5, 0.01).name("texture.center.x");
gui.add(texture.center, "y", -0.5, 1.5, 0.01).name("texture.center.y");
gui.add(texture, "rotation", -360, 360, 10).name("texture.rotation");
export default gui;
