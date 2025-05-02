export default function enableDrawingOnImage(modalImage: HTMLImageElement, brushSizeRef?: HTMLSelectElement) {
  const initializeCanvas = () => {
    const wrapper = document.createElement('div');
    wrapper.style.position = 'relative';
    wrapper.style.display = 'inline-block';
    wrapper.style.maxWidth = '96%';
    wrapper.style.maxHeight = 'calc(100vh - 80px)';
    wrapper.style.flexShrink = '0';
    wrapper.style.overflow = 'hidden';

    modalImage.parentElement?.insertBefore(wrapper, modalImage);
    wrapper.appendChild(modalImage);

    const canvas = document.createElement('canvas');
    canvas.width = modalImage.naturalWidth;
    canvas.height = modalImage.naturalHeight;

    canvas.style.position = 'absolute';
    canvas.style.top = '0';
    canvas.style.left = '0';
    canvas.style.pointerEvents = 'auto';
    canvas.style.zIndex = '2';

    wrapper.appendChild(canvas);

    const resizeCanvas = () => {
      canvas.style.width = `${modalImage.clientWidth}px`;
      canvas.style.height = `${modalImage.clientHeight}px`;
    };

    requestAnimationFrame(resizeCanvas);
    window.addEventListener('resize', resizeCanvas);

    const context = canvas.getContext('2d');
    if (!context) return;
    const ctx: CanvasRenderingContext2D = context;

    const color = 'rgba(255, 255, 255, 0.6)';
    let brushSize = brushSizeRef ? parseInt(brushSizeRef.value, 10) : 4;
    brushSizeRef?.addEventListener('change', () => {
      brushSize = parseInt(brushSizeRef.value, 10);
    });

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

    function paintAt(x: number, y: number) {
      const step = 1;
      const radius = brushSize / 2;

      for (let dx = -radius; dx <= radius; dx += step) {
        for (let dy = -radius; dy <= radius; dy += step) {
          const dist = Math.sqrt(dx * dx + dy * dy);
          if (dist <= radius) {
            const px = Math.floor(x + dx);
            const py = Math.floor(y + dy);
            const key = `${px},${py}`;
            if (!paintedPixels.has(key)) {
              paintedPixels.add(key);
              ctx.fillStyle = color;
              ctx.beginPath();
              ctx.arc(px, py, step, 0, 2 * Math.PI);
              ctx.fill();
            }
          }
        }
      }
    }

    function paintLine(x1: number, y1: number, x2: number, y2: number) {
      const dx = x2 - x1;
      const dy = y2 - y1;
      const distance = Math.hypot(dx, dy);
      const step = 1;

      for (let i = 0; i <= distance; i += step) {
        const t = i / distance;
        const x = x1 + t * dx;
        const y = y1 + t * dy;
        paintAt(x, y);
      }
    }

    function startDrawing(e: MouseEvent | TouchEvent) {
      drawing = true;
      const { x, y } = getCanvasCoordinates(e);
      lastPoint = { x, y };
      paintAt(x, y);
    }

    function continueDrawing(e: MouseEvent | TouchEvent) {
      if (!drawing) return;
      const { x, y } = getCanvasCoordinates(e);
      if (lastPoint) {
        paintLine(lastPoint.x, lastPoint.y, x, y);
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
  };

  if (modalImage.complete) {
    initializeCanvas();
  } else {
    modalImage.addEventListener('load', initializeCanvas);
  }
}
