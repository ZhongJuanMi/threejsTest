import * as THREE from "three";
import { RectAreaLightUniformsLib } from "three/examples/jsm/lights/RectAreaLightUniformsLib";
import { RectAreaLightHelper } from "three/examples/jsm/helpers/RectAreaLightHelper";
const i = RectAreaLightUniformsLib.init();
const ambColor = 0xffffff;
const ambIntensity = 0.4;
// 环境光
const ambLight = new THREE.AmbientLight(ambColor, ambIntensity);
// 半球光
const skyColor = 0xb1e1ff;
const groundColor = 0xb97a20;
const hemIntensity = 1;
const hemLight = new THREE.HemisphereLight(skyColor, groundColor, hemIntensity);
// 无限光
const dirColor = 0xffffff;
const dirIntensity = 1;
const dirLight = new THREE.DirectionalLight(dirColor, dirIntensity);
dirLight.position.set(0, 10, 0);
dirLight.target.position.set(-5, 0, 0);
const dirHelper = new THREE.DirectionalLightHelper(dirLight);
// 点光源
const pointColor = 0xffffff;
const pointIntensity = 1;
const pointLight = new THREE.PointLight(pointColor, pointIntensity);
pointLight.position.set(0, 10, 0);
const pointHelper = new THREE.PointLightHelper(pointLight);
// 聚光灯
const spotColor = 0xffffff;
const spotIntensity = 1;
const spotLight = new THREE.SpotLight(spotColor, spotIntensity);
spotLight.position.set(0, 10, 0);
spotLight.target.position.set(-5, 0, 0);
const spotHelper = new THREE.SpotLightHelper(spotLight);
// 点光源和聚光灯还可以设置灯光自然校正，即可设置流明度和半衰期
// renderer.physicallyCorrectLights = true;
// light.power = 800;
// light.decay = 2;
// 矩形区域光
const rectColor = 0xffffff;
const rectIntensity = 5;
const rectWidth = 12;
const rectHeight = 4;
const rectLight = new THREE.RectAreaLight(
  rectColor,
  rectIntensity,
  rectWidth,
  rectHeight
);
rectLight.position.set(0, 10, 0);
// rectLight.rotation.x = THREE.MathUtils.degToRad(-90);
rectLight.rotation.x = -Math.PI * 0.5;
const rectHelper = new RectAreaLightHelper(rectLight);
rectLight.add(rectHelper);
export {
  ambLight,
  hemLight,
  dirLight,
  dirHelper,
  pointLight,
  pointHelper,
  spotLight,
  spotHelper,
  rectLight,
  rectHelper,
};
