import { Scene } from "three";
import light from "./lights";
import { groundMesh, tank } from "./objects";
// 初始化场景
const scene = new Scene();
scene.add(light);
scene.add(groundMesh);
scene.add(tank);
export default scene;
