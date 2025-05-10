import createElement from '../utils/create-element';
import { mainData } from '../site-manager-object/mainData';

export const idGamesPage = {
  title: `${String.fromCodePoint(0x1f3af)} ИГРЫ`,
  id: 'gamesPage',
};

export function gamesPage(container: HTMLElement) {
  createElement('h1', container, { class: 'fairy-title' }, `${idGamesPage.title}`);
  const listWrapper = createElement('div', container, { class: 'fairy-list' });

  const gamesItems = Object.values(mainData).filter((item) => item.type === 'game');

  gamesItems.forEach((item) => {
    const gamesElement = createElement('div', listWrapper, { class: 'ckazki' }, item.title);
    gamesElement.addEventListener('click', () => {
      item.render(container);
    });
  });
}
