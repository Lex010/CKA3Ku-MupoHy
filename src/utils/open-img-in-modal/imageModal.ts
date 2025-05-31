import enableDrawingOnImage from './drawing/enableDrawing';
import { ModalStyles } from './imageModalStyles';
import createBrushSelector from './brushSelector';
import createOpacitySelector from './drawing/createOpacitySelector';
import createOverwriteCheckbox from './createOverwriteCheckbox';
import createColorPicker from './createColorPicker';

export default class ImageModal {
  container: HTMLElement;

  src: string;

  alt: string;

  constructor(container: HTMLElement, src: string, alt = '') {
    this.container = container;
    this.src = src;
    this.alt = alt;
    this.createThumbnail();
  }

  createThumbnail() {
    if (!this.src) return;
    const img = document.createElement('img');
    img.src = this.src;
    img.alt = this.alt;
    img.loading = 'lazy';
    img.classList.add('fairy-image');
    img.style.cursor = 'zoom-in';
    img.addEventListener('click', () => this.openModal(img));
    this.container.appendChild(img);
  }

  openModal(img: HTMLImageElement) {
    const modalOverlay = document.createElement('div');
    ModalStyles.applyModalOverlayStyles(modalOverlay);

    const fullImg = document.createElement('img');
    fullImg.src = img.src;
    fullImg.alt = img.alt || '';
    ModalStyles.applyFullImageStyles(fullImg);

    const buttonPanel = document.createElement('div');
    ModalStyles.applyButtonPanelStyles(buttonPanel);

    const closeBtn = document.createElement('div');
    closeBtn.textContent = 'Х';
    ModalStyles.applyCloseButtonStyles(closeBtn);

    closeBtn.addEventListener('click', () => {
      modalOverlay.remove();
      document.body.style.overflow = '';
    });

    const brushSelector = createBrushSelector(() => {
      // lineWidth обновляется внутри enableDrawingOnImage
    });
    const opacitySelector = createOpacitySelector(() => {
      // opacity обновляется внутри enableDrawingOnImage
    });
    const { label: overwriteLabel, checkbox: overwriteCheckbox } = createOverwriteCheckbox(() => {});

    let currentColor = '#ffffff';
    const colorPicker = createColorPicker((color) => {
      currentColor = color;
    }, currentColor);

    buttonPanel.appendChild(colorPicker);
    buttonPanel.appendChild(overwriteLabel);
    buttonPanel.appendChild(brushSelector);
    buttonPanel.appendChild(opacitySelector);
    buttonPanel.appendChild(closeBtn);
    document.body.style.overflow = 'hidden';

    modalOverlay.appendChild(fullImg);
    enableDrawingOnImage(
      fullImg,
      brushSelector,
      opacitySelector,
      () => overwriteCheckbox.checked,
      () => currentColor
    ); // добавляем возможность рисования
    modalOverlay.appendChild(buttonPanel);
    document.body.appendChild(modalOverlay);
  }
}
