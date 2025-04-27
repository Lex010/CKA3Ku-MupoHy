export default function enableDrawingOnImage(modalImage: HTMLImageElement, modal: HTMLElement) {
  const canvas = document.createElement('canvas');

  // canvas должен иметь такие же размеры как изображение
  canvas.width = modalImage.naturalWidth;
  canvas.height = modalImage.naturalHeight;

  canvas.style.position = 'absolute';
  canvas.style.top = '50%';
  canvas.style.left = '50%';
  canvas.style.transform = 'translate(-50%, -50%)';
  canvas.style.maxWidth = '96%';
  canvas.style.maxHeight = '96%';
  canvas.style.pointerEvents = 'auto';
  canvas.style.zIndex = '1002'; // Выше картинки, ниже кнопки

  modal.appendChild(canvas);

  const ctx = canvas.getContext('2d');
  if (!ctx) return;

  ctx.strokeStyle = 'rgba(255, 255, 255, 0.6)';
  ctx.lineWidth = 4;
  ctx.lineCap = 'round';

  let drawing = false;

  // Эти координаты нужны для правильной работы на разных разрешениях
  function getCanvasCoordinates(event: MouseEvent) {
    const rect = canvas.getBoundingClientRect();
    return {
      x: (event.clientX - rect.left) * (canvas.width / rect.width),
      y: (event.clientY - rect.top) * (canvas.height / rect.height),
    };
  }

  canvas.addEventListener('mousedown', (e) => {
    drawing = true;
    const { x, y } = getCanvasCoordinates(e);
    ctx.beginPath();
    ctx.moveTo(x, y);
  });

  canvas.addEventListener('mousemove', (e) => {
    if (!drawing) return;
    const { x, y } = getCanvasCoordinates(e);
    ctx.lineTo(x, y);
    ctx.stroke();
  });

  canvas.addEventListener('mouseup', () => {
    drawing = false;
  });

  canvas.addEventListener('mouseleave', () => {
    drawing = false;
  });
}
