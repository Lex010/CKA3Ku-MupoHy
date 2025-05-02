import { initWrapper } from './initWrapper';
import { createCanvas } from './createCanvas';
import { setupCanvasResizing } from './resizeCanvas';
import { setupBrushSize } from './brushSettings';
import { registerDrawingEvents } from './eventHandlers';

export default function enableDrawingOnImage(modalImage: HTMLImageElement, brushSizeRef?: HTMLSelectElement) {
  const initialize = () => {
    const wrapper = initWrapper(modalImage);
    const canvas = createCanvas(modalImage);
    wrapper.appendChild(canvas);

    setupCanvasResizing(canvas, modalImage);

    const context = canvas.getContext('2d');
    if (!context) return;

    const getBrushSize = setupBrushSize(brushSizeRef);
    const color = 'rgba(255, 255, 255, 0.1)';

    registerDrawingEvents(canvas, context, getBrushSize, color);
  };

  if (modalImage.complete) {
    initialize();
  } else {
    modalImage.addEventListener('load', initialize);
  }
}
