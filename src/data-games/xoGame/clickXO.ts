import checkWin from './checkWin';
import spiderMan from '../../assets/games/xo/spiderMan.svg';
import hulk from '../../assets/games/xo/hulk.svg';
import botMove from './gameLogic/botMove';

interface Player {
  symbol: string;
  name: string;
  status?: string; // "bot" | undefined
}

export function clickXO(
  grid: HTMLDivElement,
  turnIndicator: HTMLDivElement,
  restartButton: HTMLButtonElement,
  players: Player[] = [
    { symbol: spiderMan, name: 'Человек паук' },
    { symbol: hulk, name: 'Халк', status: 'bot' },
  ],
  gridSize: number = 3
) {
  // === Игровое состояние ===
  let currentPlayerIndex = 0;
  const cells = Array.from(grid.querySelectorAll('.xo-cell')) as HTMLDivElement[];
  const board: (string | null)[] = Array(gridSize * gridSize).fill(null);
  let gameOver = false;
  let isBotMoving = false;
  const thisTurnIndicator = turnIndicator;

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
    board[index] = player.symbol;
    cells[index].innerHTML = `<img src="${player.symbol}" alt="${player.name}" class="xo-img" />`;

    const winner = checkWin(board, gridSize);
    if (winner) {
      showWinner(winner, player.name);
      gameOver = true;
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
        botMove(board, makeMove);
        isBotMoving = false;
      }, 500);
    }
  }

  // === Обработчики событий ===
  function attachEventListeners() {
    cells.forEach((cell) => {
      cell.addEventListener('click', () => {
        if (gameOver || isBotMoving) return;
        const index = Number(cell.dataset.index);
        if (board[index] !== null) return;
        makeMove(index);
      });
    });

    restartButton.addEventListener('click', restartGame);
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
      cell.innerHTML = '';
      cell.classList.remove('xo-win-cell');
    });

    if (players[currentPlayerIndex].status === 'bot') {
      isBotMoving = true;
      setTimeout(() => {
        botMove(board, makeMove);
        isBotMoving = false;
      }, 500);
    }
  }

  // === Инициализация ===
  updateTurn();
  attachEventListeners();

  if (players[currentPlayerIndex].status === 'bot') {
    isBotMoving = true;
    setTimeout(() => {
      botMove(board, makeMove);
      isBotMoving = false;
    }, 500);
  }
}
