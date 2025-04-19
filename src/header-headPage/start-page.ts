import createElement from '../utils/create-element';
import allTales from '../data-fairy-tale/all-tales';

export default function startPage(container: HTMLElement) {
  const main = container;

  const listWrapper = createElement('div', container, { class: 'fairy-list' });
  const showPushistayaPlaneta = createElement('div', listWrapper, { class: 'ckazki' }, 'Пушистая планета');
  showPushistayaPlaneta.addEventListener('click', () => {
    // const main = container;
    main.innerHTML = '';
    // pushistayaPlaneta(container);
    allTales['pushistaya-planeta'].render(container);
  });
}
