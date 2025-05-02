export function createCanvas(modalImage: HTMLImageElement): HTMLCanvasElement {
  const canvas = document.createElement('canvas');
  canvas.width = modalImage.naturalWidth;
  canvas.height = modalImage.naturalHeight;
  canvas.style.position = 'absolute';
  canvas.style.top = '0';
  canvas.style.left = '0';
  canvas.style.pointerEvents = 'auto';
  canvas.style.zIndex = '2';
  return canvas;
}
