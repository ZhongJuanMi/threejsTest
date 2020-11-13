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
// 多面体
export function initPolyhedron() {
  const verticesOfCube = [
    -1,
    -1,
    -1,
    1,
    -1,
    -1,
    1,
    1,
    -1,
    -1,
    1,
    -1,
    -1,
    -1,
    1,
    1,
    -1,
    1,
    1,
    1,
    1,
    -1,
    1,
    1,
  ];
  const indicesOfFaces = [
    2,
    1,
    0,
    0,
    3,
    2,
    0,
    4,
    7,
    7,
    3,
    0,
    0,
    1,
    5,
    5,
    4,
    0,
    1,
    2,
    6,
    6,
    5,
    1,
    2,
    3,
    7,
    7,
    6,
    2,
    4,
    5,
    6,
    6,
    7,
    4,
  ];
  const radius = 7;
  const detail = 2;
  const color = "#e66";
  const wireframe = false;
  const geometry = new THREE.PolyhedronBufferGeometry(
    verticesOfCube,
    indicesOfFaces,
    radius,
    detail
  );
  const material = new THREE.MeshPhongMaterial({ color, wireframe });
  return new Mesh(geometry, material);
}
// 球体
export function initSphere() {
  const radius = 7;
  const widthSegments = 12;
  const heightSegments = 8;
  // 纬度弧度
  const phiStart = Math.PI * 0;
  const phiLength = Math.PI * 2;
  // 经度弧度
  const thetaStart = Math.PI * 0.2;
  const thetaLength = Math.PI * 0.6;
  const color = "#e66";
  const wireframe = true;
  const geometry = new THREE.SphereBufferGeometry(
    radius,
    widthSegments,
    heightSegments,
    phiStart,
    phiLength,
    thetaStart,
    thetaLength
  );
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
// 参数模型
export function initParametric() {
  // function klein(v, u, target) {
  //   u *= Math.PI;
  //   v *= 2 * Math.PI;
  //   u = u * 2;
  //   let x;
  //   let z;
  //   if (u < Math.PI) {
  //     x =
  //       3 * Math.cos(u) * (1 + Math.sin(u)) +
  //       2 * (1 - Math.cos(u) / 2) * Math.cos(u) * Math.cos(v);
  //     z =
  //       -8 * Math.sin(u) -
  //       2 * (1 - Math.cos(u) / 2) * Math.sin(u) * Math.cos(v);
  //   } else {
  //     x =
  //       3 * Math.cos(u) * (1 + Math.sin(u)) +
  //       2 * (1 - Math.cos(u) / 2) * Math.cos(v + Math.PI);
  //     z = -8 * Math.sin(u);
  //   }
  //   const y = -2 * (1 - Math.cos(u) / 2) * Math.sin(v);
  //   target.set(x, y, z).multiplyScalar(0.75);
  // }
  //创建波浪图形的方法
  function radialwave(u, v, target) {
    let r = 50;
    let x = Math.sin(u) * r;
    let z = Math.sin(v / 2) * 2 * r;
    let y = (Math.sin(u * 4 * Math.PI) + Math.cos(v * 2 * Math.PI)) * 2.8;
    target.set(x, y, z);
  }
  const color = "#e66";
  const wireframe = false;
  const geometry = new THREE.ParametricBufferGeometry(radialwave, 150, 150);
  const material = new THREE.MeshBasicMaterial({
    color,
    wireframe,
    side: THREE.DoubleSide,
  });
  return new THREE.Mesh(geometry, material);
}
