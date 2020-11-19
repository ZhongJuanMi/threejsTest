import {
  PlaneBufferGeometry,
  BoxBufferGeometry,
  CylinderBufferGeometry,
  SphereBufferGeometry,
  BufferGeometry,
  LineBasicMaterial,
  MeshPhongMaterial,
  MeshLambertMaterial,
  MeshNormalMaterial,
  Mesh,
  Object3D,
  Vector2,
  Line,
  SplineCurve,
} from "three";
import { tankCamera } from "../camera";
// 地面
const groundGeometry = new PlaneBufferGeometry(50, 50);
const groundMaterial = new MeshLambertMaterial({ color: "#998888" });
const groundMesh = new Mesh(groundGeometry, groundMaterial);
groundMesh.rotation.x = Math.PI * -0.5;
groundMesh.receiveShadow = true;

// 坦克
const tank = new Object3D();
// 机身
const carWidth = 4;
const carHeight = 1;
const carLength = 8;
const bodyGeometry = new BoxBufferGeometry(carWidth, carHeight, carLength);
const bodyMaterial = new MeshPhongMaterial({ color: 0x6688aa });
const bodyMesh = new Mesh(bodyGeometry, bodyMaterial);
bodyMesh.position.y = 1.4;
bodyMesh.castShadow = true;
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
  mesh.castShadow = true;
  bodyMesh.add(mesh);
  return mesh;
});
// 炮塔
const domeRadius = carWidth / 2;
const domeWidthSubdivisions = 12;
const domeHeightSubdivisions = 12;
const domePhiStart = 0;
const domePhiEnd = Math.PI * 2;
const domeThetaStart = 0;
const domeThetaEnd = Math.PI * 0.5;
const domeGeometry = new SphereBufferGeometry(
  domeRadius,
  domeWidthSubdivisions,
  domeHeightSubdivisions,
  domePhiStart,
  domePhiEnd,
  domeThetaStart,
  domeThetaEnd
);
const domeMesh = new Mesh(domeGeometry, bodyMaterial);
domeMesh.castShadow = true;
bodyMesh.add(domeMesh);
domeMesh.position.y = carHeight / 2;
// 炮
const turretWidth = 0.5;
const turretHeight = 0.5;
const turretLength = carLength / 2 + 1;
const turretGeometry = new BoxBufferGeometry(
  turretWidth,
  turretHeight,
  turretLength
);
const turretMesh = new Mesh(turretGeometry, bodyMaterial);
turretMesh.castShadow = true;
const turretPivot = new Object3D();
turretPivot.add(turretMesh);
domeMesh.add(turretPivot);
tank.add(tankCamera);
tankCamera.position.y = 5;
turretPivot.position.y = domeRadius / 2 - 0.5;
turretMesh.position.z = turretLength / 2;
// 目标
const targetGeometry = new SphereBufferGeometry(0.5, 6, 3);
const targetMaterial = new MeshNormalMaterial();
const targetMesh = new Mesh(targetGeometry, targetMaterial);
targetMesh.castShadow = true;
const targetOrbit = new Object3D();
targetOrbit.add(targetMesh);
targetMesh.position.x = 12;
targetOrbit.position.y = 10;
// 运动路线
const curve = new SplineCurve([
  new Vector2(-10, 0),
  new Vector2(-5, 5),
  new Vector2(0, 0),
  new Vector2(5, -5),
  new Vector2(10, 0),
  new Vector2(5, 10),
  new Vector2(-5, 10),
  new Vector2(-10, -10),
  new Vector2(-15, -8),
  new Vector2(-10, 0),
]);

const points = curve.getPoints(100);
const geometry = new BufferGeometry().setFromPoints(points);
const material = new LineBasicMaterial({ color: 0xff0000 });
const splineObject = new Line(geometry, material);
splineObject.rotation.x = Math.PI * 0.5;
splineObject.position.y = 0.05;

export {
  groundMesh,
  tank,
  domeMesh,
  turretPivot,
  wheelMeshes,
  splineObject,
  curve,
  targetOrbit,
  targetMesh,
};
