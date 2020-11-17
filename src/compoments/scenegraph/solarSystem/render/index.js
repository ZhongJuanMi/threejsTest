import { WebGLRenderer } from "three";
// 初始化渲染器
export function initRender() {
  const renderer = new WebGLRenderer({ antialias: true });
  renderer.setSize(window.innerWidth, window.innerHeight);
  document.body.appendChild(renderer.domElement);
  renderer.setClearColor(0x000000, 1.0);
  return renderer;
}
