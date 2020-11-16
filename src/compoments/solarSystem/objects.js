import {
  SphereBufferGeometry,
  MeshPhongMaterial,
  Mesh,
  Object3D,
  AxesHelper,
  GridHelper,
} from "three";
import { GUI } from "dat.gui";
const objects = [];
const radius = 1;
const widthSegments = 12;
const heightSegments = 12;
const sphereGeometry = new SphereBufferGeometry(
  radius,
  widthSegments,
  heightSegments
);
class AxisGridHelper {
  constructor(node, units = 10) {
    const axes = new AxesHelper();
    axes.material.depthTest = false;
    axes.renderOrder = 2; // after the grid
    node.add(axes);

    const grid = new GridHelper(units, units);
    grid.material.depthTest = false;
    grid.renderOrder = 1;
    node.add(grid);

    this.grid = grid;
    this.axes = axes;
    this.visible = false;
  }
  get visible() {
    return this._visible;
  }
  set visible(v) {
    this._visible = v;
    this.grid.visible = v;
    this.axes.visible = v;
  }
}
// 太阳系统
const solarSystem = new Object3D();
objects.push(solarSystem);
// 太阳
const sunMaterial = new MeshPhongMaterial({ emissive: 0xffff00 });
const sunMesh = new Mesh(sphereGeometry, sunMaterial);
sunMesh.scale.set(5, 5, 5);
solarSystem.add(sunMesh);
objects.push(sunMesh);
// 地球系统
const earthOrbit = new Object3D();
earthOrbit.position.x = 10;
solarSystem.add(earthOrbit);
objects.push(earthOrbit);
// 地球
const earthMaterial = new MeshPhongMaterial({
  color: 0x2233ff,
});
const earthMesh = new Mesh(sphereGeometry, earthMaterial);
solarSystem.add(earthMesh);
earthOrbit.add(earthMesh);
objects.push(earthMesh);
// 月球系统
const moonOrbit = new Object3D();
moonOrbit.position.x = 2;
earthOrbit.add(moonOrbit);
// 月球
const moonMaterial = new MeshPhongMaterial({
  color: 0x888888,
});
const moonMesh = new Mesh(sphereGeometry, moonMaterial);
moonMesh.scale.set(0.5, 0.5, 0.5);
moonOrbit.add(moonMesh);
objects.push(moonMesh);
const gui = new GUI();
function makeAxisGrid(node, label, units) {
  const helper = new AxisGridHelper(node, units);
  gui.add(helper, "visible").name(label);
}

makeAxisGrid(solarSystem, "solarSystem", 26);
makeAxisGrid(sunMesh, "sunMesh");
makeAxisGrid(earthOrbit, "earthOrbit");
makeAxisGrid(earthMesh, "earthMesh");
makeAxisGrid(moonOrbit, "moonOrbit");
makeAxisGrid(moonMesh, "moonMesh");
export { objects, solarSystem };
