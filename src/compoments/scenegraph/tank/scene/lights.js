import { DirectionalLight, AmbientLight } from "three";
// 初始化灯光
const color = "#ffffff";
const intensity = 1.2;
const light = new DirectionalLight(color, intensity);
light.position.set(0, 20, 0);
light.castShadow = true;
const d = 50;
light.shadow.camera.left = -d;
light.shadow.camera.right = d;
light.shadow.camera.top = d;
light.shadow.camera.bottom = -d;
export default light;
