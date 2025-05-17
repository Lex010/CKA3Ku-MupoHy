export default function botMove(board: (string | null)[], makeMove: (index: number) => void) {
  const emptyIndexes = board.map((cell, index) => (cell === null ? index : -1)).filter((index) => index !== -1);

  if (emptyIndexes.length === 0) return;

  const randomIndex = emptyIndexes[Math.floor(Math.random() * emptyIndexes.length)];
  makeMove(randomIndex);
}
