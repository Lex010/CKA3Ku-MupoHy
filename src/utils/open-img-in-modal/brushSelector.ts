export default function createBrushSelector(
  onChange: (size: number) => void,
  defaultSize: number = 4
): HTMLSelectElement {
  const brushSelector = document.createElement('select');
  brushSelector.title = 'Размер кисти';
  brushSelector.style.marginRight = '8px';
  brushSelector.style.cursor = 'pointer';

  [4, 10, 25, 50, 100].forEach((size) => {
    const option = document.createElement('option');
    option.value = size.toString();
    option.textContent = `${size}px`;
    if (size === defaultSize) option.selected = true;
    brushSelector.appendChild(option);
  });

  brushSelector.addEventListener('change', () => {
    onChange(parseInt(brushSelector.value, 10));
  });

  return brushSelector;
}
