import createElement from './create-element';
import enableDrawingOnImage from './painting';

function getCSSVar(name: string) {
  return getComputedStyle(document.documentElement).getPropertyValue(name).trim();
}

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
    modalOverlay.style.flexDirection = 'column';
    modalOverlay.style.justifyContent = 'center';
    modalOverlay.style.alignItems = 'center';
    modalOverlay.style.padding = '20px 0';
    modalOverlay.style.zIndex = '1000';
    modalOverlay.style.userSelect = 'none';
    modalOverlay.style.pointerEvents = 'auto';
    modalOverlay.style.boxSizing = 'border-box';

    const fullImg = document.createElement('img');
    fullImg.src = img.src;
    fullImg.alt = img.alt || '';
    fullImg.style.maxWidth = '96%';
    fullImg.style.maxHeight = 'calc(100vh - 80px)'; // минус место под панель
    fullImg.style.objectFit = 'contain';
    fullImg.style.boxShadow = '0 0 20px rgba(255,255,255,0.3)';

    const buttonPanel = document.createElement('div');
    buttonPanel.style.width = '100%';
    buttonPanel.style.background = 'rgba(0, 0, 0, 0.7)';
    buttonPanel.style.display = 'flex';
    buttonPanel.style.justifyContent = 'center';
    buttonPanel.style.gap = '16px';
    buttonPanel.style.padding = '10px 0';
    buttonPanel.style.boxSizing = 'border-box';

    const closeBtn = document.createElement('div');
    closeBtn.textContent = 'Х';
    closeBtn.style.background = defaultBgColor;
    closeBtn.style.color = defaultTxtColor;
    closeBtn.style.padding = '8px 16px';
    closeBtn.style.fontSize = '18px';
    closeBtn.style.cursor = 'pointer';
    closeBtn.style.borderRadius = '8px';
    closeBtn.style.boxShadow = '0 2px 10px rgba(0,0,0,0.5)';
    closeBtn.style.transition = 'all 0.3s ease'; // для плавности анимации

    closeBtn.addEventListener('mouseenter', () => {
      closeBtn.style.background = hoverColor;
      closeBtn.style.transform = 'scale(1.05)';
    });

    closeBtn.addEventListener('mouseleave', () => {
      closeBtn.style.background = defaultBgColor;
      closeBtn.style.transform = 'scale(1)';
    });

    closeBtn.addEventListener('click', () => {
      modalOverlay.remove();
      document.body.style.overflow = '';
    });

    buttonPanel.appendChild(closeBtn);

    document.body.style.overflow = 'hidden'; // отключаем скролл

    modalOverlay.appendChild(fullImg);
    enableDrawingOnImage(fullImg); // Важно: добавляем рисование
    modalOverlay.appendChild(buttonPanel);
    document.body.appendChild(modalOverlay);
  });

  return img;
}
