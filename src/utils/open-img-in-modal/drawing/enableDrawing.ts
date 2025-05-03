import { initWrapper } from './initWrapper';
import { createCanvas } from './createCanvas';
import { setupCanvasResizing } from './resizeCanvas';
import { setupBrushSize, setupBrushOpacity } from './brushSettings';
import { registerDrawingEvents } from './eventHandlers';

export default function enableDrawingOnImage(
  modalImage: HTMLImageElement,
  brushSizeRef?: HTMLSelectElement,
  opacityRef?: HTMLSelectElement,
  shouldOverwrite?: () => boolean
) {
  const initialize = () => {
    const wrapper = initWrapper(modalImage);
    const canvas = createCanvas(modalImage);
    wrapper.appendChild(canvas);

    setupCanvasResizing(canvas, modalImage);

    const context = canvas.getContext('2d');
    if (!context) return;

    const getBrushSize = setupBrushSize(brushSizeRef);
    const getOpacity = setupBrushOpacity(opacityRef);
    const color = () => `rgba(255, 255, 255, ${getOpacity()})`;

    registerDrawingEvents(canvas, context, getBrushSize, color, shouldOverwrite || (() => false));
  };

  if (modalImage.complete) {
    initialize();
  } else {
    modalImage.addEventListener('load', initialize);
  }
}
