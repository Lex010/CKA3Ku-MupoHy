import createElement from '../../utils/create-element';
import { Player } from './gameCharacters';

export type ScoreElements = {
  player1Score: HTMLSpanElement;
  player2Score: HTMLSpanElement;
};

export function scoreInHeader(container: HTMLDivElement, players: Player[]): ScoreElements {
  const scoreContainer = createElement('div', container, { class: 'score-container' });

  const player1Block = createElement('div', scoreContainer, { class: 'score-block' });
  createElement('img', player1Block, { class: 'score-img', src: `${players[0].img}` });
  createElement('span', player1Block, {}, ': ');
  const player1Score = createElement('span', player1Block, { class: 'score' }, '0');

  const player2Block = createElement('div', scoreContainer, { class: 'score-block' });
  createElement('img', player2Block, { class: 'score-img', src: `${players[1].img}` });
  createElement('span', player2Block, {}, ': ');
  const player2Score = createElement('span', player2Block, { class: 'score' }, '0');

  return { player1Score, player2Score };
}
