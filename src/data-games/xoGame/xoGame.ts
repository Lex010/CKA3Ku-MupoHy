import createElement from '../../utils/create-element';
import createPlayerSelector from './createPlayerSelector';
import openGameModal from '../openGameModal';
import { scoreInHeader } from './scoreInHeader';
import renderXoField from './renderXoField';
import { clickXO } from './clickXO';

import { gameCharacters, Player } from './gameCharacters';

export const idXoGame = {
  title: 'Крестики-нолики',
  id: 'xoGame',
};

export function xoGame(container: HTMLElement): void {
  createElement('h1', container, { id: 'h1' }, `${idXoGame.title}`);

  const playerSetupWrapper = createElement('div', container, { class: 'player-setup-wrapper' });

  const selectedCharacters: (Player | null)[] = [gameCharacters[0], gameCharacters[1]];

  const player1Container = createElement('div', playerSetupWrapper, {});
  const player2Container = createElement('div', playerSetupWrapper, {});

  const rerenderSelectors = (playerIndex?: number, newPlayer?: Player) => {
    if (playerIndex !== undefined && newPlayer) {
      selectedCharacters[playerIndex] = newPlayer;
    }

    player1Container.innerHTML = '';
    player2Container.innerHTML = '';

    createPlayerSelector(player1Container, 1, selectedCharacters, gameCharacters, rerenderSelectors);
    createPlayerSelector(player2Container, 2, selectedCharacters, gameCharacters, rerenderSelectors);
  };

  rerenderSelectors();

  const startButton = createElement('button', container, { class: 'start-button' }, 'Начать игру');

  startButton.addEventListener('click', () => {
    const players = selectedCharacters.map((char) => {
      if (!char) throw new Error('Оба игрока должны выбрать персонажа');
      return char;
    });

    const thisModal = openGameModal();
    const scoreElements = scoreInHeader(thisModal.header, players);
    // Храним счет
    const scores = [0, 0];
    const updateScore = (winnerIndex: number) => {
      scores[winnerIndex] += 1;
      if (winnerIndex === 0) {
        scoreElements.player1Score.textContent = scores[0].toString();
      } else {
        scoreElements.player2Score.textContent = scores[1].toString();
      }
    };
    const gameField = renderXoField(thisModal.gameField);
    clickXO(gameField.grid, gameField.turnIndicator, gameField.restartButton, players, 3, updateScore);
  });
}
