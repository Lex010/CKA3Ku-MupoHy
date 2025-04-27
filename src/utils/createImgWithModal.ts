import createElement from './create-element';
import enableDrawingOnImage from './painting';

function getCSSVar(name: string) {
  return getComputedStyle(document.documentElement).getPropertyValue(name).trim();
} // Добавляю переменные цветов из цсс файла
const defaultTxtColor = getCSSVar('--navBtnTxt');
const defaultBgColor = getCSSVar('--txtLeftBorder');
const hoverColor = getCSSVar('--h1AndHover');

export default function createImageWithModal(container: HTMLElement, src: string, alt = '') {
  const img = createElement('img', container, {
    src,
    alt,
    loading: 'lazy',
    class: 'fairy-image',
  });

  img.style.cursor = 'zoom-in';

  img.addEventListener('click', () => {
    const modalOverlay = document.createElement('div');
    modalOverlay.style.position = 'fixed';
    modalOverlay.style.top = '0';
    modalOverlay.style.left = '0';
    modalOverlay.style.width = '100vw';
    modalOverlay.style.height = '100vh';
    modalOverlay.style.backgroundColor = 'rgba(0, 0, 0, 0.9)';
    modalOverlay.style.display = 'flex';
    modalOverlay.style.justifyContent = 'center';
    modalOverlay.style.alignItems = 'center';
    modalOverlay.style.zIndex = '1000';

    modalOverlay.style.userSelect = 'none';
    modalOverlay.style.pointerEvents = 'auto';
    // modalOverlay.ondragstart = () => false;

    const fullImg = document.createElement('img');
    fullImg.src = img.src;
    fullImg.alt = img.alt || '';
    fullImg.style.maxWidth = '96%';
    fullImg.style.maxHeight = '96%';
    fullImg.style.boxShadow = '0 0 20px rgba(255,255,255,0.3)';

    const closeBtn = document.createElement('div');
    closeBtn.textContent = 'Закрыть';
    closeBtn.style.position = 'absolute';
    closeBtn.style.bottom = '20px';
    closeBtn.style.left = '80%';
    closeBtn.style.transform = 'translateX(-50%)';
    closeBtn.style.background = defaultBgColor;
    closeBtn.style.color = defaultTxtColor;
    closeBtn.style.padding = '8px 16px';
    closeBtn.style.fontSize = '18px';
    closeBtn.style.cursor = 'pointer';
    closeBtn.style.zIndex = '1001';
    closeBtn.style.borderRadius = '8px';
    closeBtn.style.boxShadow = '0 2px 10px rgba(0,0,0,0.5)';

    closeBtn.addEventListener('mouseenter', () => {
      closeBtn.style.background = hoverColor; // Изменяет фон при наведении
      closeBtn.style.transform = 'translateX(-50%) scale(1.05)';
    });

    closeBtn.addEventListener('mouseleave', () => {
      closeBtn.style.background = defaultBgColor; // Вернуть исходный фон
      closeBtn.style.transform = 'translateX(-50%) scale(1)';
    });

    document.body.style.overflow = 'hidden';

    closeBtn.addEventListener('click', () => {
      modalOverlay.remove();
      document.body.style.overflow = '';
    });

    modalOverlay.appendChild(fullImg);
    enableDrawingOnImage(fullImg, modalOverlay);
    modalOverlay.appendChild(closeBtn);
    document.body.appendChild(modalOverlay);
  });

  return img;
}
