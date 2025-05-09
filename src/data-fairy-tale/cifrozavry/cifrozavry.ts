import createElement from '../../utils/create-element';
import ImageModal from '../../utils/open-img-in-modal/imageModal';
import { cifrozavryData } from './cifrozavryData';

export const titleIdCifrozavry = {
  title: 'Цифрозавры',
  id: 'cifrozavry',
};

export function cifrozavry(container: HTMLElement): void {
  createElement('h1', container, { id: 'h1' }, `${titleIdCifrozavry.title}`);

  cifrozavryData.forEach((b) => {
    if (b.type === 'text' && b.content) {
      createElement('p', container, { class: 'txt' }, b.content);
    }
    if (b.type === 'image' && b.src) {
      (() => new ImageModal(container, b.src, b.alt || ''))(); // IIFE для обхода предупреждения линтера
    }
  });
}
