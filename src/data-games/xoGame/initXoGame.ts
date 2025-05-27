import { Player } from './gameCharacters';
import { scoreInHeader } from './scoreInHeader';
import renderXoField from './renderXoField';
import { clickXO } from './clickXO';

type InitXoGameParams = {
  header: HTMLDivElement;
  gameField: HTMLDivElement;
  selectedCharacters: Player[];
  botDifficulty: boolean;
};

export function initXoGame({ header, gameField, selectedCharacters, botDifficulty }: InitXoGameParams) {
  const scores = [0, 0];
  const scoreElements = scoreInHeader(header, selectedCharacters);

  const updateScore = (winnerIndex: number) => {
    scores[winnerIndex] += 1;
    const key = `player${winnerIndex + 1}Score` as 'player1Score' | 'player2Score';
    scoreElements[key].textContent = scores[winnerIndex].toString();
  };

  const game = renderXoField(gameField);
  clickXO(game.grid, game.turnIndicator, game.restartButton, selectedCharacters, 3, botDifficulty, updateScore);
}
