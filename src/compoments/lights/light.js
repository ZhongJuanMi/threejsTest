import * as THREE from "three";
const color = "#ffffff";
const intensity = 1;
// 环境光
const ambLight = new THREE.AmbientLight({ color, intensity });
// 半球光
const skyColor = 0xb1e1ff;
const groundColor = 0xb97a20;
const indensity = 1;
const hemLight = new THREE.HemisphereLight(skyColor, groundColor, indensity);
export default hemLight;
