import { Scene } from "three";
import light from "./lights";
import { solarSystem, groundMesh } from "./objects";
// 初始化场景
const scene = new Scene();
scene.add(light);
scene.add(solarSystem);
scene.add(groundMesh);
export default scene;
