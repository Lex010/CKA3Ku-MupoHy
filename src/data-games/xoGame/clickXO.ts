import checkWin from './gameLogic/checkWin';
import botMove from './gameLogic/botMove';
import { Player } from './gameCharacters';

export function clickXO(
  grid: HTMLDivElement,
  turnIndicator: HTMLDivElement,
  restartButton: HTMLButtonElement,
  players: Player[],
  gridSize: number,
  botDifficulty: boolean,
  updateScore?: (winnerIndex: number) => void
) {
  // === Игровое состояние ===
  let currentPlayerIndex = 0;
  const cells = Array.from(grid.querySelectorAll('.xo-cell')) as HTMLDivElement[];
  const board: (string | null)[] = Array(gridSize * gridSize).fill(null);
  let gameOver = false;
  let isBotMoving = false;
  const thisTurnIndicator = turnIndicator;
  const isTwoBots = players.every((player) => player.status === 'bot');

  // === Обновление UI ===
  function updateTurn() {
    thisTurnIndicator.textContent = `Ходит: ${players[currentPlayerIndex].name}`;
  }

  function showWinner(winnerIndexes: number[], playerName: string) {
    winnerIndexes.forEach((idx) => {
      const cell = cells[idx];
      cell.classList.add('xo-win-cell');
      const img = cell.querySelector('img');
      if (img) img.classList.add('xo-win-img');
    });
    thisTurnIndicator.textContent = `ПОБЕДИЛ: ${playerName}`;
    restartButton.classList.add('visible');
  }

  function showDraw() {
    thisTurnIndicator.textContent = 'Ничья!';
    restartButton.classList.add('visible');
  }

  // === Ход игрока/бота ===
  function makeMove(index: number) {
    if (gameOver || board[index] !== null) return;

    const player = players[currentPlayerIndex];
    board[index] = player.img;
    cells[index].innerHTML = `<img src="${player.img}" alt="${player.name}" class="xo-img" />`;

    const winner = checkWin(board, gridSize);
    if (winner) {
      showWinner(winner, player.name);
      gameOver = true;
      updateScore?.(currentPlayerIndex);
      return;
    }

    if (!board.includes(null)) {
      showDraw();
      gameOver = true;
      return;
    }

    currentPlayerIndex = (currentPlayerIndex + 1) % players.length;
    updateTurn();

    if (players[currentPlayerIndex].status === 'bot') {
      isBotMoving = true;
      setTimeout(() => {
        botMove(board, makeMove, players, botDifficulty);
        isBotMoving = false;
      }, 500);
    }
  }

  // === Перезапуск игры ===
  function restartGame() {
    board.fill(null);
    gameOver = false;
    currentPlayerIndex = 0;
    isBotMoving = false;
    updateTurn();
    restartButton.classList.remove('visible');

    cells.forEach((cell) => {
      const thisCell = cell;
      thisCell.innerHTML = '';
      thisCell.classList.remove('xo-win-cell');
    });

    if (players[currentPlayerIndex].status === 'bot') {
      isBotMoving = true;
      setTimeout(() => {
        botMove(board, makeMove, players, botDifficulty);
        isBotMoving = false;
      }, 500);
    }
  }

  // === Обработчики событий ===
  function attachEventListeners() {
    cells.forEach((cell) => {
      cell.addEventListener('click', () => {
        if (gameOver || isBotMoving || isTwoBots) return;
        const index = Number(cell.dataset.index);
        if (board[index] !== null) return;
        makeMove(index);
      });
    });

    restartButton.addEventListener('click', restartGame);
  }

  // === Инициализация ===
  updateTurn();
  attachEventListeners();

  if (players[currentPlayerIndex].status === 'bot') {
    isBotMoving = true;
    setTimeout(() => {
      botMove(board, makeMove, players, botDifficulty);
      isBotMoving = false;
    }, 500);
  }
}
