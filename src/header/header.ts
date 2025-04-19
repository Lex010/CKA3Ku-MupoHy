import createElement from '../utils/create-element';

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
    startPage(container);
  });
}

function startPage(container: HTMLElement) {
  const main = container;
  main.innerHTML = '123';
}
