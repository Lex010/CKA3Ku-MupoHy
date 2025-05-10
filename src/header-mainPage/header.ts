import createElement from '../utils/create-element';
import mainPage from './mainPage';
import { mainData } from '../site-manager-object/mainData';
import userLogin from '../firebase/userLogin';

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
    mainPage(container);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });

  const upBtn = createElement('button', header, { class: 'nav-btn' }, '🔝');
  upBtn.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });

  userLogin(header);

  const savedPage = localStorage.getItem('currentPage');
  if (savedPage && mainData[savedPage]) {
    mainData[savedPage].render(container);
  } else {
    mainPage(container);
    // если нет сохранений в локальном хранилище то открываю страницу Главную страницу
  }
}
