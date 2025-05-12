export default function renderXoField(container: HTMLElement, gridSize: number = 3): HTMLDivElement {
  const grid = document.createElement('div');
  grid.className = 'xo-grid';
  grid.style.gridTemplateColumns = `repeat(${gridSize}, 80px)`;
  grid.style.gridTemplateRows = `repeat(${gridSize}, 80px)`;

  for (let i = 0; i < gridSize * gridSize; i += 1) {
    const cell = document.createElement('div');
    cell.className = 'xo-cell';
    cell.dataset.index = i.toString(); // Удобно для логики(проверка победителей)

    const row = Math.floor(i / gridSize);
    const col = i % gridSize;

    if (row === 0) cell.classList.add('top-row');
    if (col === 0) cell.classList.add('left-col');

    grid.appendChild(cell);
  }

  container.appendChild(grid);
  return grid;
}
