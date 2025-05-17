import createElement from '../../utils/create-element';
import createPlayerSelector from './createPlayerSelector';
import openGameModal from '../openGameModal';
import renderXoField from './renderXoField';
import { clickXO } from './clickXO';

import { gameCharacters } from './gameCharacters';

export const idXoGame = {
  title: 'Крестики-нолики',
  id: 'xoGame',
};

export function xoGame(container: HTMLElement): void {
  createElement('h1', container, { id: 'h1' }, `${idXoGame.title}`);

  const playerSetupWrapper = createElement('div', container, { class: 'player-setup-wrapper' });

  // Используем первые два персонажа из массива
  const player1 = { ...gameCharacters[0] }; // Копия, если нужно избежать мутации исходного массива
  const player2 = { ...gameCharacters[1] };

  createPlayerSelector(playerSetupWrapper, 1, player1);
  createPlayerSelector(playerSetupWrapper, 2, player2);

  const startButton = createElement('button', container, { class: 'start-button' }, 'Начать игру');

  startButton.addEventListener('click', () => {
    const players = [player1, player2];

    const thisModal = openGameModal();
    const gameField = renderXoField(thisModal);
    clickXO(gameField.grid, gameField.turnIndicator, gameField.restartButton, players);
  });
}
