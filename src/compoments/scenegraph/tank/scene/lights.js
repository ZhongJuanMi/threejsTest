import { DirectionalLight } from "three";
// 初始化灯光
const color = "#ffffff";
const intensity = 1;
const light = new DirectionalLight(color, intensity);
light.castShadow = true;
// light.position.set(0, 350, 150);
export default light;
