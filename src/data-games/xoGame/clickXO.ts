import checkWin from './checkWin';
import spiderMan from '../../assets/games/xo/spiderMan.svg';
import hulk from '../../assets/games/xo/hulk.svg';

interface Player {
  symbol: string;
  name: string;
}

export function clickXO(
  grid: HTMLDivElement,
  turnIndicator: HTMLDivElement,
  players: Player[] = [
    { symbol: spiderMan, name: 'Человек паук' },
    { symbol: hulk, name: 'Халк' },
  ],
  gridSize: number = 3
) {
  let currentPlayerIndex = 0;
  const cells = Array.from(grid.querySelectorAll('.xo-cell')) as HTMLDivElement[];
  const board: (string | null)[] = Array(gridSize * gridSize).fill(null);
  let gameOver = false;

  const thisTurnIndicator = turnIndicator;
  thisTurnIndicator.textContent = `Ходит: ${players[currentPlayerIndex].name}`;

  cells.forEach((cell) => {
    cell.addEventListener('click', () => {
      if (gameOver) return;
      const index = Number(cell.dataset.index);
      if (board[index] !== null) return;

      const player = players[currentPlayerIndex];
      board[index] = player.symbol;
      const thisCell = cell;
      thisCell.innerHTML = `<img src="${player.symbol}" alt="${player.name}" class="xo-img" />`;

      const winner = checkWin(board, gridSize);
      if (winner) {
        winner.forEach((idx) => {
          const winCell = cells[idx];
          winCell.classList.add('xo-win-cell');
          const img = winCell.querySelector('img');
          if (img) img.classList.add('xo-win-img');
        });
        thisTurnIndicator.textContent = `Победил: ${player.name}`;
        gameOver = true;
        return;
      }

      currentPlayerIndex = (currentPlayerIndex + 1) % players.length;
      thisTurnIndicator.textContent = `Ходит: ${players[currentPlayerIndex].name}`;
    });
  });
}
