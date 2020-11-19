import { DirectionalLight, AmbientLight, SpotLight } from "three";
// 初始化灯光
const color = "#ffffff";
const intensity = 1.2;
const light = new DirectionalLight(color, intensity);
light.position.set(0, 30, 0);
light.castShadow = true;
light.shadow.mapSize.x = 1024;
light.shadow.mapSize.y = 1024;
const d = 20;
light.shadow.camera.left = -d;
light.shadow.camera.right = d;
light.shadow.camera.top = d;
light.shadow.camera.bottom = -d;
export default light;
