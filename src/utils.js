import { Object3D } from "three";
// 重设中心
export function setCenter(geometry, mesh) {
  geometry.computeBoundingBox();
  geometry.boundingBox.getCenter(mesh.position).multiplyScalar(-1);
  const parent = new Object3D();
  parent.add(mesh);
  return parent;
}
