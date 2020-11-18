import {
  PlaneBufferGeometry,
  BoxBufferGeometry,
  CylinderBufferGeometry,
  MeshPhongMaterial,
  MeshLambertMaterial,
  Mesh,
  Object3D,
} from "three";

// 地面
const groundGeometry = new PlaneBufferGeometry(50, 50);
const groundMaterial = new MeshLambertMaterial({ color: "#998888" });
const groundMesh = new Mesh(groundGeometry, groundMaterial);
groundMesh.rotation.x = Math.PI * -0.5;
groundMesh.receiveShadow = true;

// 坦克
const tank = new Object3D();
tank.castShadow = true;
// 机身
const carWidth = 4;
const carHeight = 1;
const carLength = 8;
const bodyGeometry = new BoxBufferGeometry(carWidth, carHeight, carLength);
const bodyMaterial = new MeshPhongMaterial({ color: 0x6688aa });
const bodyMesh = new Mesh(bodyGeometry, bodyMaterial);
bodyMesh.position.y = 1.4;
tank.add(bodyMesh);
// 轮子
const wheelRadius = 1;
const wheelThickness = 0.5;
const wheelSegments = 6;
const wheelGeometry = new CylinderBufferGeometry(
  wheelRadius, // top radius
  wheelRadius, // bottom radius
  wheelThickness, // height of cylinder
  wheelSegments
);
const wheelMaterial = new MeshPhongMaterial({ color: 0x888888 });
const wheelPositions = [
  [-carWidth / 2 - wheelThickness / 2, -carHeight / 2, carLength / 3],
  [carWidth / 2 + wheelThickness / 2, -carHeight / 2, carLength / 3],
  [-carWidth / 2 - wheelThickness / 2, -carHeight / 2, 0],
  [carWidth / 2 + wheelThickness / 2, -carHeight / 2, 0],
  [-carWidth / 2 - wheelThickness / 2, -carHeight / 2, -carLength / 3],
  [carWidth / 2 + wheelThickness / 2, -carHeight / 2, -carLength / 3],
];
const wheelMeshes = wheelPositions.map((position) => {
  const mesh = new Mesh(wheelGeometry, wheelMaterial);
  mesh.position.set(...position);
  mesh.rotation.z = Math.PI * 0.5;
  // mesh.castShadow = true;
  bodyMesh.add(mesh);
  return mesh;
});

export { groundMesh, tank };
