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

  const showPushistayaPlaneta = createElement('div', listWrapper, { class: 'ckazki' }, 'Пушистая планета');
  showPushistayaPlaneta.addEventListener('click', () => {
    cleanThenUp();
    allTales['pushistaya-planeta'].render(container);
  });

  const showCifrozavry = createElement('div', listWrapper, { class: 'ckazki' }, allTales.cifrozavry.title);
  showCifrozavry.addEventListener('click', () => {
    cleanThenUp();
    allTales.cifrozavry.render(container);
  });
}
