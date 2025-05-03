import { initWrapper } from './initWrapper';
import { createCanvas } from './createCanvas';
import { setupCanvasResizing } from './resizeCanvas';
import { setupBrushSize, setupBrushOpacity } from './brushSettings';
import { registerDrawingEvents } from './eventHandlers';

export default function enableDrawingOnImage(
  modalImage: HTMLImageElement,
  brushSizeRef?: HTMLSelectElement,
  opacityRef?: HTMLSelectElement,
  shouldOverwrite?: () => boolean,
  getColor?: () => string
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
    const getBaseColor = getColor || (() => '#ffffff');

    // Комбинируем цвет и прозрачность
    const getCombinedColor = () => {
      const baseColor = getBaseColor();
      const opacity = getOpacity();

      // Если цвет уже в формате rgba, заменяем прозрачность
      if (baseColor.startsWith('rgba')) {
        return baseColor.replace(/[\d.]+\)$/, `${opacity})`);
      }

      // Конвертируем hex в rgba
      const hexToRgb = (hex: string) => {
        const r = parseInt(hex.slice(1, 3), 16);
        const g = parseInt(hex.slice(3, 5), 16);
        const b = parseInt(hex.slice(5, 7), 16);
        return `rgba(${r}, ${g}, ${b}, ${opacity})`;
      };

      return hexToRgb(baseColor);
    };

    registerDrawingEvents(canvas, context, getBrushSize, getCombinedColor, shouldOverwrite || (() => false));
  };

  if (modalImage.complete) {
    initialize();
  } else {
    modalImage.addEventListener('load', initialize);
  }
}
