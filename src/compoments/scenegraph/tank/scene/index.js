import { Scene } from "three";
import light from "./lights";
import { groundMesh, tank, splineObject } from "./objects";
// 初始化场景
const scene = new Scene();
scene.add(light);
scene.add(groundMesh);
scene.add(tank);
scene.add(splineObject);
export default scene;
