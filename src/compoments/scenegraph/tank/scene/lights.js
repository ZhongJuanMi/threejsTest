import { PointLight } from "three";
// 初始化灯光
export function initLight() {
  const color = 0xffffff;
  const intensity = 3;
  const light = new PointLight(color, intensity);
  return light;
}
