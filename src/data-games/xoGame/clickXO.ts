import checkWin from './checkWin';

type PlayerSymbol = string; // позже можно сделать объект с картинкой и именем

interface Player {
  symbol: PlayerSymbol;
}

export function clickXO(
  grid: HTMLDivElement,
  players: Player[] = [{ symbol: 'X' }, { symbol: 'O' }],
  gridSize: number = 3
) {
  let currentPlayerIndex = 0;
  const cells = Array.from(grid.querySelectorAll('.xo-cell')) as HTMLDivElement[];
  const board: (string | null)[] = Array(gridSize * gridSize).fill(null);
  let gameOver = false;

  cells.forEach((cell) => {
    cell.addEventListener('click', () => {
      if (gameOver) return;
      const index = Number(cell.dataset.index);
      if (board[index] !== null) return;

      const player = players[currentPlayerIndex];
      board[index] = player.symbol;
      const thisCell = cell;
      thisCell.textContent = player.symbol;

      const winner = checkWin(board, gridSize);
      if (winner) {
        // setTimeout(() => alert(`Победил: ${board[winner[0]]}`), 10);
        winner.forEach((idx) => {
          cells[idx].style.backgroundColor = '#aaffaa'; // ЗАМЕНИТЬ НА ДОБАВЛЕНИЕ ГОТОВОГО СТИЛЯ
        });
        gameOver = true;
        return;
      }

      currentPlayerIndex = (currentPlayerIndex + 1) % players.length;
    });
  });
}
