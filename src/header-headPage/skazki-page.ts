import createElement from '../utils/create-element';
import allTales from '../data-fairy-tale/all-tales';

export default function skazkiPage(container: HTMLElement) {
  const main = container;
  function cleanThenUp(): void {
    main.innerHTML = '';
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }
  // добавлять cleanThenUp() перед каждым переходон на новую страницу сказки

  createElement('h1', container, { class: 'fairy-title' }, 'Книга рассказов');
  const listWrapper = createElement('div', container, { class: 'fairy-list' });

  Object.values(allTales).forEach((tale) => {
    const taleElement = createElement('div', listWrapper, { class: 'ckazki' }, tale.title);
    taleElement.addEventListener('click', () => {
      cleanThenUp();
      tale.render(container);
    });
  });
}
