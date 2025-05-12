import createElement from '../../utils/create-element';
import openXoGameModal from '../openXoGameModal';

export const idXoGame = {
  title: 'Крестики-нолики',
  id: 'xoGame',
};

export function xoGame(container: HTMLElement): void {
  createElement('h1', container, { id: 'h1' }, `${idXoGame.title}`);

  const playerSelectWrapper = createElement('div', container, { class: 'player-select-wrapper' });

  createElement('p', playerSelectWrapper, {}, 'Выберите режим игры:');

  const label1 = createElement('label', playerSelectWrapper);
  createElement('input', label1, {
    type: 'radio',
    name: 'players',
    value: '1',
    checked: 'true',
  });
  label1.append(' 1 игрок (с ботом)');

  const label2 = createElement('label', playerSelectWrapper);
  createElement('input', label2, {
    type: 'radio',
    name: 'players',
    value: '2',
  });
  label2.append(' 2 игрока');

  // Кнопка старт
  const startButton = createElement('button', container, { class: 'start-button' }, 'Начать игру');

  startButton.addEventListener('click', () => {
    const selected = document.querySelector('input[name="players"]:checked') as HTMLInputElement;
    const playerCount = selected?.value;

    openXoGameModal();
    // console.log(`Игроков выбрано: ${playerCount}`);
    // Здесь можно вызвать старт модального окна или перейти на другой маршрут
    // startGame(playerCount);
  });
}
