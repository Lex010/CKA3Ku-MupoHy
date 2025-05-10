import createElement from '../../utils/create-element';

export const idFiGame = {
  title: 'Игра01',
  id: 'fGame',
};

export function fGame(container: HTMLElement): void {
  createElement('h1', container, { id: 'h1' }, `${idFiGame.title}`);

  const test = createElement('div', container, { class: 'test' }, 'Тут будет игра');
  test.style.justifySelf = 'center';
  test.style.alignSelf = 'center';
}
