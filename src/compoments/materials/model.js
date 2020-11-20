import * as THREE from "three";
import { DoubleSide } from "three";
const radius = 7;
const widthSegments = 12;
const heightSegments = 12;
// 纬度开始弧度
const phiStart = Math.PI * 0;
// 纬度弧度长度
const phiLength = Math.PI * 2;
// 经度开始弧度
const thetaStart = Math.PI * 2;
// 经度弧度长度
const thetaLength = Math.PI * 1;
const geometry = new THREE.SphereBufferGeometry(
  radius,
  widthSegments,
  heightSegments,
  phiStart,
  phiLength,
  thetaStart,
  thetaLength
);
// 生成材质时设置属性
const material1 = new THREE.MeshPhongMaterial({ color: 0xff0000 });
// 生成材质后设置属性
const material2 = new THREE.MeshPhongMaterial();
// 有翻光面或平滑
material2.flatShading = true;
material2.color.set(0xffff00);
// 前、后、或都渲染
material2.side = THREE.DoubleSide;
// 基础材质
const material3 = new THREE.MeshBasicMaterial({ color: 0xffff00 });
// 低亮材质
const material4 = new THREE.MeshLambertMaterial({ color: 0xffff00 });
// 高亮材质
const material5 = new THREE.MeshPhongMaterial({ color: 0xffff00 });
// 高亮材质的明亮度属性
material5.shininess = 150;
// 设置低亮材质和高亮材质的自发光属性，让其和基础材质看起来一样
const material6 = new THREE.MeshLambertMaterial({
  color: "black",
  emissive: "purple",
});
const material7 = new THREE.MeshPhongMaterial({
  color: "black",
  emissive: "purple",
  shininess: 0,
});
// 卡通材质
const material8 = new THREE.MeshToonMaterial({
  color: 0xaaaaff,
});
// 标准材质
const color = "purple";
const roughness = 0.7;
const metalness = 0.5;
const material9 = new THREE.MeshStandardMaterial({
  color,
  roughness,
  metalness,
});
// 物理材质
const clearcoat = 0.7;
const clearcoatRoughness = 0.5;
const material10 = new THREE.MeshPhysicalMaterial({
  color,
  roughness,
  metalness,
  clearcoat,
  clearcoatRoughness,
});
// 阴影材质
const material11 = new THREE.ShadowMaterial();
// 深度材质
const material12 = new THREE.MeshDepthMaterial();
// 法向材质
const material13 = new THREE.MeshNormalMaterial();
// 着色器材质
const material14 = new THREE.ShadowMaterial();
// 原生着色器材质
const material15 = new THREE.RawShaderMaterial();
export default new THREE.Mesh(geometry, material2);
