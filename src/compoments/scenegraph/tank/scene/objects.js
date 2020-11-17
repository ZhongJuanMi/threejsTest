import {
  PlaneBufferGeometry,
  SphereBufferGeometry,
  MeshPhongMaterial,
  Mesh,
  Object3D,
} from "three";
import { makeAxisGrid } from "./gui";
// 地面
const groundGeometry = new PlaneBufferGeometry(50, 50);
const groundMaterial = new MeshPhongMaterial({ color: 0xcc8866 });
const groundMesh = new Mesh(groundGeometry, groundMaterial);
groundMesh.rotation.x = Math.PI * -0.5;
groundMesh.receiveShadow = true;

// 创建球体网格
function createSphere(materialOptions, meshName, scaleOptions) {
  const radius = 1;
  const widthSegments = 6;
  const heightSegments = 6;
  const geometry = new SphereBufferGeometry(
    radius,
    widthSegments,
    heightSegments
  );
  const material = new MeshPhongMaterial(materialOptions);
  const mesh = new Mesh(geometry, material);
  mesh.name = meshName;
  if (scaleOptions) {
    mesh.scale.set(scaleOptions.x, scaleOptions.y, scaleOptions.z);
  }
  return mesh;
}
// 太阳
const sunMesh = createSphere({ emissive: 0xffff00 }, "sunMesh", {
  x: 5,
  y: 5,
  z: 5,
});
// 地球
const earthMesh = createSphere({ color: 0x2233ff }, "earthMesh");
// 月球
const moonMesh = createSphere({ color: 0x888888 }, "moonMesh", {
  x: 0.5,
  y: 0.5,
  z: 0.5,
});

// 太阳系统 包含太阳和地球系统
const solarSystem = new Object3D({ name: "solarSystem" });
// 地球系统 包含地球和月球
const earthOrbit = new Object3D();
earthOrbit.position.x = 10;
moonMesh.position.x = 2;

solarSystem.add(sunMesh);
solarSystem.add(earthOrbit);

solarSystem.add(earthMesh);
earthOrbit.add(earthMesh);
earthOrbit.add(moonMesh);

makeAxisGrid(solarSystem, "solarSystem", 26);
makeAxisGrid(sunMesh, "sunMesh");
makeAxisGrid(earthOrbit, "earthOrbit");
makeAxisGrid(earthMesh, "earthMesh");
// makeAxisGrid(moonOrbit, "moonOrbit");
makeAxisGrid(moonMesh, "moonMesh");
export { solarSystem, earthOrbit, moonMesh, sunMesh, groundMesh };
