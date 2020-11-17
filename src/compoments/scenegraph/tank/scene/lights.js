import { SpotLight } from "three";
// 初始化灯光
const color = 0xffffff;
const intensity = 3;
const light = new SpotLight(color, intensity);
light.position.set(0, 350, 150);
export default light;
