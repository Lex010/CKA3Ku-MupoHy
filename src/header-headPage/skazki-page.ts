import createElement from '../utils/create-element';
import allTales from '../data-fairy-tale/all-tales';

export default function skazkiPage(container: HTMLElement) {
  const main = container;

  createElement('h1', container, { class: 'fairy-title' }, 'Книга рассказов');
  const listWrapper = createElement('div', container, { class: 'fairy-list' });
  const showPushistayaPlaneta = createElement('div', listWrapper, { class: 'ckazki' }, 'Пушистая планета');
  showPushistayaPlaneta.addEventListener('click', () => {
    // const main = container;
    main.innerHTML = '';
    allTales['pushistaya-planeta'].render(container);
  });
}
