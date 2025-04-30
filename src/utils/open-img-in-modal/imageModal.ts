import createElement from '../create-element';
import enableDrawingOnImage from './painting';
import { ModalStyles } from './imageModalStyles';

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
    const img = createElement('img', this.container, {
      src: this.src,
      alt: this.alt,
      loading: 'lazy',
      class: 'fairy-image',
    });

    img.style.cursor = 'zoom-in';
    img.addEventListener('click', () => this.openModal(img));
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

    buttonPanel.appendChild(closeBtn);
    document.body.style.overflow = 'hidden';

    modalOverlay.appendChild(fullImg);
    enableDrawingOnImage(fullImg); // добавляем возможность рисования
    modalOverlay.appendChild(buttonPanel);
    document.body.appendChild(modalOverlay);
  }
}
