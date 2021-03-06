import { Scene } from "three";
import light from "./lights";
import { groundMesh, tank, splineObject, targetOrbit } from "./objects";
// 初始化场景
const scene = new Scene();
scene.add(light);
scene.add(groundMesh);
scene.add(tank);
scene.add(splineObject);
scene.add(targetOrbit);
export default scene;
