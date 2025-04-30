export default function enableDrawingOnImage(modalImage: HTMLImageElement) {
  const initializeCanvas = () => {
    const wrapper = document.createElement('div');
    wrapper.style.position = 'relative';
    wrapper.style.display = 'inline-block';
    wrapper.style.maxWidth = '96%';
    wrapper.style.maxHeight = 'calc(100vh - 80px)';
    wrapper.style.flexShrink = '0';
    wrapper.style.overflow = 'hidden';

    // Вставляем обертку
    modalImage.parentElement?.insertBefore(wrapper, modalImage);
    wrapper.appendChild(modalImage);

    const canvas = document.createElement('canvas');

    // Устанавливаем реальный размер канваса
    canvas.width = modalImage.naturalWidth;
    canvas.height = modalImage.naturalHeight;

    // Стили
    canvas.style.position = 'absolute';
    canvas.style.top = '0';
    canvas.style.left = '0';
    canvas.style.pointerEvents = 'auto';
    canvas.style.zIndex = '2';

    wrapper.appendChild(canvas);

    // Функция для подгонки размера canvas к размеру изображения на экране
    const resizeCanvas = () => {
      canvas.style.width = `${modalImage.clientWidth}px`;
      canvas.style.height = `${modalImage.clientHeight}px`;
    };

    // Вызываем при старте
    requestAnimationFrame(() => {
      resizeCanvas();
    });

    // И при изменении размера окна
    window.addEventListener('resize', resizeCanvas);

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    ctx.strokeStyle = 'rgba(255, 255, 255, 0.6)';
    ctx.lineWidth = 4;
    ctx.lineCap = 'round';

    let drawing = false;

    function getCanvasCoordinates(event: MouseEvent | TouchEvent) {
      const rect = canvas.getBoundingClientRect();
      if (event instanceof MouseEvent) {
        return {
          x: (event.clientX - rect.left) * (canvas.width / rect.width),
          y: (event.clientY - rect.top) * (canvas.height / rect.height),
        };
      }
      if (event instanceof TouchEvent) {
        const touch = event.touches[0];
        return {
          x: (touch.clientX - rect.left) * (canvas.width / rect.width),
          y: (touch.clientY - rect.top) * (canvas.height / rect.height),
        };
      }
      return { x: 0, y: 0 };
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

    canvas.addEventListener('touchstart', (e) => {
      e.preventDefault();
      drawing = true;
      const { x, y } = getCanvasCoordinates(e);
      ctx.beginPath();
      ctx.moveTo(x, y);
    });

    canvas.addEventListener('touchmove', (e) => {
      e.preventDefault();
      if (!drawing) return;
      const { x, y } = getCanvasCoordinates(e);
      ctx.lineTo(x, y);
      ctx.stroke();
    });

    canvas.addEventListener('mouseleave', () => {
      drawing = false;
    });
  };

  if (modalImage.complete) {
    initializeCanvas();
  } else {
    modalImage.addEventListener('load', () => {
      initializeCanvas();
    });
  }
}
