import checkWin from './checkWin';
import { Player } from '../gameCharacters';

function botMoveHard(board: (string | null)[], makeMove: (index: number) => void, players: Player[]) {
  const emptyIndexes = board.map((cell, index) => (cell === null ? index : -1)).filter((index) => index !== -1);

  if (emptyIndexes.length === 0) return;

  const size = Math.sqrt(board.length);

  // 1. Определяем символ пользователя(или бота(ов))
  let firstUser: string | null = null;
  let secondUser: string | null = null;

  // Если доска пустая, ходит символ первого игрока
  if (board.every((cell) => cell === null)) {
    firstUser = players[0].img;
    secondUser = players[1].img;
  }
  // Если доска не пустая, анализируем символы
  else {
    const symbolsCount = new Map<string, number>();
    board.forEach((cell) => {
      if (cell !== null) {
        symbolsCount.set(cell, (symbolsCount.get(cell) || 0) + 1);
      }
    });

    const entries = Array.from(symbolsCount.entries());
    if (entries.length === 0) {
      // Если почему-то нет символов (крайний случай), делаем случайный ход
      const randomIndex = emptyIndexes[Math.floor(Math.random() * emptyIndexes.length)];
      makeMove(randomIndex);
      return;
    }

    const [symbol1, count1] = entries[0];
    const symbol2 = entries.length > 1 ? entries[1][0] : null;

    // Первым ходит пользователь players[0]. Далее ход переходит к тому, у кого на текущий момент меньше ходов.
    if (entries.length === 1) {
      firstUser = symbol1 === players[0].img ? players[1].img : players[0].img;
      secondUser = symbol1;
    } else {
      const count2 = symbolsCount.get(symbol2!) || 0;
      firstUser = count1 <= count2 ? symbol1 : symbol2!;
      secondUser = firstUser === symbol1 ? symbol2! : symbol1;
    }
  }

  if (!firstUser || !secondUser) {
    // Если не удалось определить (крайний случай), делаем случайный ход
    const randomIndex = emptyIndexes[Math.floor(Math.random() * emptyIndexes.length)];
    makeMove(randomIndex);
    return;
  }

  // 2. Попытаться выиграть
  const winningMove = emptyIndexes.find((index) => {
    const newBoard = [...board];
    newBoard[index] = firstUser;
    return checkWin(newBoard, size);
  });

  if (winningMove !== undefined) {
    makeMove(winningMove);
    return;
  }

  // 3. Попытаться выиграть для второго игрока
  const winningMoveSecond = emptyIndexes.find((index) => {
    const newBoard = [...board];
    newBoard[index] = secondUser;
    return checkWin(newBoard, size);
  });

  if (winningMoveSecond !== undefined) {
    makeMove(winningMoveSecond);
    return;
  }
  // 4. Занять центр (если размер нечётный)
  const centerIndex = Math.floor(board.length / 2);
  if (size % 2 === 1 && board[centerIndex] === null && emptyIndexes.includes(centerIndex)) {
    makeMove(centerIndex);
    return;
  }

  // 5. Занять углы
  const corners = [0, size - 1, size * (size - 1), size * size - 1];
  const availableCorners = corners.filter((i) => emptyIndexes.includes(i));
  if (availableCorners.length > 0) {
    const randomCorner = availableCorners[Math.floor(Math.random() * availableCorners.length)];
    makeMove(randomCorner);
    return;
  }

  // 6. Случайный ход
  const randomIndex = emptyIndexes[Math.floor(Math.random() * emptyIndexes.length)];
  makeMove(randomIndex);
}

function botMoveSimple(board: (string | null)[], makeMove: (index: number) => void) {
  const emptyIndexes = board.map((cell, index) => (cell === null ? index : -1)).filter((index) => index !== -1);

  if (emptyIndexes.length === 0) return;

  const randomIndex = emptyIndexes[Math.floor(Math.random() * emptyIndexes.length)];
  makeMove(randomIndex);
}

export default function botMove(
  board: (string | null)[],
  makeMove: (index: number) => void,
  players: Player[],
  botOption: boolean
) {
  if (botOption) {
    botMoveHard(board, makeMove, players);
  } else {
    botMoveSimple(board, makeMove);
  }
}
