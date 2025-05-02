export function setupCanvasResizing(canvas: HTMLCanvasElement, modalImage: HTMLImageElement) {
  const resize = () => {
    const thisCanvas = canvas;
    thisCanvas.style.width = `${modalImage.clientWidth}px`;
    thisCanvas.style.height = `${modalImage.clientHeight}px`;
  };
  requestAnimationFrame(resize);
  window.addEventListener('resize', resize);
}
