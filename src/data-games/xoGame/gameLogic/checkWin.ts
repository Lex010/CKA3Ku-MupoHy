export default function checkWin(board: (string | null)[], size: number): number[] | null {
  // Горизонтали и вертикали
  for (let i = 0; i < size; i += 1) {
    // Проверка строки
    const rowStart = i * size;
    const row = board.slice(rowStart, rowStart + size);
    if (row.every((cell) => cell && cell === row[0])) {
      return Array.from({ length: size }, (_, j) => rowStart + j);
    }

    // Проверка столбца
    const colStart = i;
    const col = Array.from({ length: size }, (_, j) => board[colStart + j * size]);
    if (col.every((cell) => cell && cell === col[0])) {
      return Array.from({ length: size }, (_, j) => colStart + j * size);
    }
  }

  // Диагональ \
  const mainDiag = Array.from({ length: size }, (_, i) => board[i * (size + 1)]);
  if (mainDiag.every((cell) => cell && cell === mainDiag[0])) {
    return Array.from({ length: size }, (_, i) => i * (size + 1));
  }

  // Диагональ /
  const antiDiag = Array.from({ length: size }, (_, i) => board[(i + 1) * (size - 1)]);
  if (antiDiag.every((cell) => cell && cell === antiDiag[0])) {
    return Array.from({ length: size }, (_, i) => (i + 1) * (size - 1));
  }

  return null;
}
