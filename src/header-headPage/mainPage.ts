import createElement from '../utils/create-element';
import { mainData } from '../site-manager-object/mainData';

export default function mainPage(container: HTMLElement) {
  createElement('h1', container, { class: 'fairy-title' }, 'Главная'); // ЗАМЕНИТЬ КЛАСС
  const listWrapper = createElement('div', container, { class: 'fairy-list' });

  const menuItems = Object.values(mainData).filter((item) => item.type === 'menu');

  menuItems.forEach((item) => {
    const menuElement = createElement('div', listWrapper, { class: 'ckazki' }, item.title);
    menuElement.addEventListener('click', () => {
      item.render(container);
    });
  });
}
