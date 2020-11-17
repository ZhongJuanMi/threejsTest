import { Scene } from "three";
import { initLight } from "./lights";
import { solarSystem } from "./objects";
// 初始化场景
export function initScene() {
  const scene = new Scene();
  const light = initLight();
  scene.add(light);
  scene.add(solarSystem);
  return scene;
}
