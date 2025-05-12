type PlayerSymbol = string; // позже можно сделать объект с картинкой и именем

interface Player {
  symbol: PlayerSymbol;
}

export function clickXO(grid: HTMLDivElement, players: Player[] = [{ symbol: 'X' }, { symbol: 'O' }]) {
  let currentPlayerIndex = 0;
  const cells = Array.from(grid.querySelectorAll('.xo-cell')) as HTMLDivElement[];

  cells.forEach((cell) => {
    cell.addEventListener('click', () => {
      if (cell.textContent !== '') return;

      const player = players[currentPlayerIndex];
      const thisCell = cell;
      thisCell.textContent = player.symbol;

      // Переключение игрока
      currentPlayerIndex = (currentPlayerIndex + 1) % players.length;
    });
  });
}
