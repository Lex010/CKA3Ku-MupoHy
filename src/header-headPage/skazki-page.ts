import createElement from '../utils/create-element';
import allTales from '../data-fairy-tale/all-tales';

export const idSkazkiPage = {
  title: 'КНИГА РАССКАЗОВ',
  id: 'skazkiPage',
};

export function skazkiPage(container: HTMLElement) {
  createElement('h1', container, { class: 'fairy-title' }, `${idSkazkiPage.title}`);
  const listWrapper = createElement('div', container, { class: 'fairy-list' });

  Object.values(allTales).forEach((tale) => {
    const taleElement = createElement('div', listWrapper, { class: 'ckazki' }, tale.title);
    taleElement.addEventListener('click', () => {
      tale.render(container);
    });
  });
}
