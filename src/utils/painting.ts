export default function enableDrawingOnImage(modalImage: HTMLImageElement, modal: HTMLElement) {
  // Функция для инициализации канваса
  const initializeCanvas = () => {
    const canvas = document.createElement('canvas');

    // Устанавливаем размеры канваса равными естественным размерам изображения
    canvas.width = modalImage.naturalWidth;
    canvas.height = modalImage.naturalHeight;

    // Стилизация канваса
    canvas.style.position = 'absolute';
    canvas.style.top = '50%';
    canvas.style.left = '50%';
    canvas.style.transform = 'translate(-50%, -50%)';
    canvas.style.maxWidth = '96%';
    canvas.style.maxHeight = '96%';
    canvas.style.pointerEvents = 'auto';
    canvas.style.zIndex = '1002'; // Выше картинки, ниже кнопки

    // Добавляем канвас в модальное окно
    modal.appendChild(canvas);

    // Контекст рисования
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    ctx.strokeStyle = 'rgba(255, 255, 255, 0.6)';
    ctx.lineWidth = 4;
    ctx.lineCap = 'round';

    let drawing = false;

    // Функция для получения координат на канвасе с учетом масштаба
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

    // Обработчики событий для рисования мышью
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

    // Обработчики событий для рисования на тачскринах
    canvas.addEventListener('touchstart', (e) => {
      e.preventDefault(); // чтобы страница не прокручивалась
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

    // Обработчик выхода за пределы канваса
    canvas.addEventListener('mouseleave', () => {
      drawing = false;
    });
  };

  // Проверяем, загружено ли изображение
  if (modalImage.complete) {
    initializeCanvas();
  } else {
    // Устанавливаем обработчик события onload для изображения
    modalImage.addEventListener('load', () => {
      initializeCanvas();
    });
  }
}
