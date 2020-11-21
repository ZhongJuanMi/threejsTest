import * as THREE from "three";
import { Loader } from "three";
const boxWidth = 8;
const boxHeight = 8;
const boxDepth = 8;
const geometry = new THREE.BoxGeometry(boxWidth, boxHeight, boxDepth);

const loader = new THREE.TextureLoader();
// 六面相同贴图
const material1 = new THREE.MeshBasicMaterial({
  map: loader.load(
    "https://threejsfundamentals.org/threejs/resources/images/wall.jpg"
  ),
});
// 六面不同贴图
const materials2 = [];
const picsUrl =
  "https://threejsfundamentals.org/threejs/resources/images/flower-";
for (let i = 1; i <= 6; i++) {
  materials2.push(
    new THREE.MeshBasicMaterial({
      map: loader.load(`${picsUrl}${i}.jpg`),
    })
  );
}
let material3;
// 等待图片加载完成贴图
loader.load(
  "https://threejsfundamentals.org/threejs/resources/images/wall.jpg",
  (texture) => {
    material3 = new THREE.MeshBasicMaterial({
      map: texture,
    });
    const cube = new THREE.Mesh(geometry, material3);
  }
);
// 多资源加载管理
const loadManager = new THREE.LoadingManager();
const loader2 = new THREE.TextureLoader(loadManager);
const materials4 = [];
for (let i = 1; i <= 6; i++) {
  materials4.push(
    new THREE.MeshBasicMaterial({
      map: loader2.load(`${picsUrl}${i}.jpg`),
    })
  );
}
loadManager.onLoad = () => {
  const cube = new THREE.Mesh(geometry, material3);
};
loadManager.onProgress = (urlOfLastItemLoaded, itemsLoaded, itemsTotal) => {
  const progress = itemsLoaded / itemsTotal;
};
// 贴图重复、旋转、偏移
// someTexture.wrapS = THREE.RepeatWrapping;
// someTexture.wrapT = THREE.RepeatWrapping;
// someTexture.repeat.set(timesToRepeatHorizontally, timesToRepeatVertically);
// someTexture.offset.set(xOffset, yOffset);
// someTexture.center.set(.5, .5);
// someTexture.rotation = THREE.MathUtils.degToRad(45);
const texture5 = loader.load(
  "https://threejsfundamentals.org/threejs/resources/images/wall.jpg"
);
const material5 = new THREE.MeshBasicMaterial({
  map: texture5,
});
const cube = new THREE.Mesh(geometry, material5);
export { cube, texture5 };
