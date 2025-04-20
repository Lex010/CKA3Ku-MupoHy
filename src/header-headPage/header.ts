import createElement from '../utils/create-element';
import skazkiPage from './skazki-page';
import allTales from '../data-fairy-tale/all-tales';

export default function createHeader(container: HTMLElement) {
  const header = createElement('header', 'body', { class: 'main-header' });

  const homeBtn = createElement(
    'button',
    header,
    {
      class: 'nav-btn',
    },
    '🏠 На главную'
  );

  homeBtn.addEventListener('click', () => {
    localStorage.removeItem('currentPage');
    const main = container;
    main.innerHTML = '';
    skazkiPage(container);
  });

  const upBtn = createElement('button', header, { class: 'nav-btn' }, '🔝');
  upBtn.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });

  const savedPage = localStorage.getItem('currentPage');
  if (savedPage) {
    allTales[savedPage].render(container);
  } else {
    skazkiPage(container);
    // если нет сохранений в локальном хранилище то открываю страницу меню(сейчас это страница выбора сказок)
  }
}
