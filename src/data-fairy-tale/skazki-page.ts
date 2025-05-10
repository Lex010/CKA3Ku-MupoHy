import createElement from '../utils/create-element';
import { mainData } from '../site-manager-object/mainData';

export const idSkazkiPage = {
  title: `${String.fromCodePoint(0x1f4d6)} КНИГА РАССКАЗОВ`,
  id: 'skazkiPage',
};

export function skazkiPage(container: HTMLElement) {
  createElement('h1', container, { class: 'fairy-title' }, `${idSkazkiPage.title}`);
  const listWrapper = createElement('div', container, { class: 'fairy-list' });

  const skazkiItems = Object.values(mainData).filter((item) => item.type === 'story');

  skazkiItems.forEach((item) => {
    const skazkiElement = createElement('div', listWrapper, { class: 'ckazki' }, item.title);
    skazkiElement.addEventListener('click', () => {
      item.render(container);
    });
  });
}
