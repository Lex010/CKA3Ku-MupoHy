import { paintAt, paintLine } from './drawHelpers';

export function registerDrawingEvents(
  canvas: HTMLCanvasElement,
  ctx: CanvasRenderingContext2D,
  getBrushSize: () => number,
  getColor: () => string
) {
  const paintedPixels = new Set<string>();
  let drawing = false;
  let lastPoint: { x: number; y: number } | null = null;

  function getCanvasCoordinates(event: MouseEvent | TouchEvent) {
    const rect = canvas.getBoundingClientRect();
    const scaleX = canvas.width / rect.width;
    const scaleY = canvas.height / rect.height;

    if (event instanceof MouseEvent) {
      return {
        x: (event.clientX - rect.left) * scaleX,
        y: (event.clientY - rect.top) * scaleY,
      };
    }

    const touch = event.touches[0];
    return {
      x: (touch.clientX - rect.left) * scaleX,
      y: (touch.clientY - rect.top) * scaleY,
    };
  }

  function startDrawing(e: MouseEvent | TouchEvent) {
    drawing = true;
    const { x, y } = getCanvasCoordinates(e);
    lastPoint = { x, y };
    paintAt(ctx, x, y, getBrushSize(), paintedPixels, getColor());
  }

  function continueDrawing(e: MouseEvent | TouchEvent) {
    if (!drawing) return;
    const { x, y } = getCanvasCoordinates(e);
    if (lastPoint) {
      paintLine(ctx, lastPoint.x, lastPoint.y, x, y, getBrushSize(), paintedPixels, getColor());
    }
    lastPoint = { x, y };
  }

  function stopDrawing() {
    drawing = false;
    lastPoint = null;
  }

  canvas.addEventListener('mousedown', startDrawing);
  canvas.addEventListener('mousemove', continueDrawing);
  canvas.addEventListener('mouseup', stopDrawing);
  canvas.addEventListener('mouseleave', stopDrawing);

  canvas.addEventListener('touchstart', (e) => {
    e.preventDefault();
    startDrawing(e);
  });
  canvas.addEventListener('touchmove', (e) => {
    e.preventDefault();
    continueDrawing(e);
  });
  canvas.addEventListener('touchend', stopDrawing);
}
