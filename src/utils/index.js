import { Object3D } from "three";
// 重设中心
export function setCenter(geometry, mesh) {
  geometry.computeBoundingBox();
  geometry.boundingBox.getCenter(mesh.position).multiplyScalar(-1);
  const parent = new Object3D();
  parent.add(mesh);
  return parent;
}
// 屏幕适配方案
export function resizeRendererToDisplaySize(renderer) {
  const canvas = renderer.domElement;
  const width = window.innerWidth;
  const height = window.innerHeight;
  const needResize = canvas.width !== width || canvas.height !== height;
  if (needResize) {
    renderer.setSize(width, height, true);
  }
  return needResize;
}
