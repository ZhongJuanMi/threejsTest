import * as THREE from "three";
import { Mesh } from "three";
// 立方体
export function initCube() {
  const width = 1;
  const height = 1;
  const depth = 1;
  const widthSegments = 4;
  const heightSegments = 4;
  const depthSegment = 4;
  const color = "#1cc";
  const wireframe = true;
  const geometry = new THREE.BoxBufferGeometry(
    width,
    height,
    depth,
    widthSegments,
    heightSegments,
    depthSegment
  );
  const material = new THREE.MeshBasicMaterial({ color, wireframe });
  return new THREE.Mesh(geometry, material);
}
// 圆
export function initCircle() {
  const radius = 1;
  const segments = 12;
  const thetaStart = 0;
  const thetaLength = Math.PI * 2;
  const color = "#1cc";
  const wireframe = true;
  const geometry = new THREE.CircleBufferGeometry(
    radius,
    segments,
    thetaStart,
    thetaLength
  );
  const material = new THREE.MeshBasicMaterial({ color, wireframe });
  return new THREE.Mesh(geometry, material);
}
// 圆锥
export function initCone() {
  const radius = 1;
  const height = 2;
  const radialSegments = 12;
  const heightSegments = 4;
  const openEnded = true;
  const thetaStart = 0;
  const thetaLength = Math.PI * 1.5;
  const color = "#1cc";
  const wireframe = true;
  const geometry = new THREE.ConeBufferGeometry(
    radius,
    height,
    radialSegments,
    heightSegments,
    openEnded,
    thetaStart,
    thetaLength
  );
  const material = new THREE.MeshBasicMaterial({ color, wireframe });
  return new THREE.Mesh(geometry, material);
}
// 圆柱
export function initCylinder() {
  const radiusTop = 1;
  const radiusBottom = 1.5;
  const height = 2;
  const radialSegments = 12;
  const heightSegments = 6;
  const openEnded = true;
  const thetaStart = 0;
  const thetaLength = Math.PI * 1.5;
  const color = "#1cc";
  const wireframe = true;
  const geometry = new THREE.CylinderBufferGeometry(
    radiusTop,
    radiusBottom,
    height,
    radialSegments,
    heightSegments,
    openEnded,
    thetaStart,
    thetaLength
  );
  const material = new THREE.MeshBasicMaterial({ color, wireframe });
  return new Mesh(geometry, material);
}
// 十二面体
export function initDodecahedron() {
  const radius = 2;
  const detail = 2;
  const color = "#1cc";
  const wireframe = false;
  const geometry = new THREE.DodecahedronBufferGeometry(radius, detail);
  const material = new THREE.MeshLambertMaterial({ color, wireframe });
  return new Mesh(geometry, material);
}
// 拉伸体
// 心形
export function initExtrude() {
  const shape = new THREE.Shape();
  const x = -2.5;
  const y = -5;
  shape.moveTo(x + 2.5, y + 2.5);
  shape.bezierCurveTo(x + 2.5, y + 2.5, x + 2, y, x, y);
  shape.bezierCurveTo(x - 3, y, x - 3, y + 3.5, x - 3, y + 3.5);
  shape.bezierCurveTo(x - 3, y + 5.5, x - 1.5, y + 7.7, x + 2.5, y + 9.5);
  shape.bezierCurveTo(x + 6, y + 7.7, x + 8, y + 4.5, x + 8, y + 3.5);
  shape.bezierCurveTo(x + 8, y + 3.5, x + 8, y, x + 5, y);
  shape.bezierCurveTo(x + 3.5, y, x + 2.5, y + 2.5, x + 2.5, y + 2.5);
  const extrudeSettings = {
    steps: 2,
    depth: 2,
    bevelEnabled: true,
    bevelThickness: 1,
    bevelSize: 1,
    bevelSegments: 2,
  };
  const color = "#e66";
  const wireframe = false;
  const geometry = new THREE.ExtrudeBufferGeometry(shape, extrudeSettings);
  const material = new THREE.MeshLambertMaterial({ color, wireframe });
  return new Mesh(geometry, material);
}
// 二十面体
export function initIcosahedron() {
  const radius = 7;
  const detail = 0;
  const color = "#e66";
  const wireframe = false;
  const geometry = new THREE.IcosahedronBufferGeometry(radius, detail);
  const material = new THREE.MeshPhongMaterial({ color, wireframe });
  return new Mesh(geometry, material);
}
// 扫描体
export function initLathe() {
  let points = [];
  for (let i = 0; i < 10; i++) {
    points.push(new THREE.Vector2(Math.sin(i * 0.2) * 3 + 3, (i - 5) * 0.8));
  }
  const segments = 12;
  const phiStart = Math.PI * 0;
  const phiLength = Math.PI * 2;
  const color = "#e66";
  const wireframe = true;
  const geometry = new THREE.LatheBufferGeometry(
    points,
    segments,
    phiStart,
    phiLength
  );
  const material = new THREE.MeshPhongMaterial({ color, wireframe });
  return new Mesh(geometry, material);
}
