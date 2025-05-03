export default function createOpacitySelector(
  onChange: (opacity: number) => void,
  defaultOpacity: number = 0.5
): HTMLSelectElement {
  const opacitySelector = document.createElement('select');
  opacitySelector.id = 'opacity-selector';
  opacitySelector.title = 'Прозрачность кисти';
  opacitySelector.style.cursor = 'pointer';
  opacitySelector.style.backgroundColor = 'white';

  const options: Array<[number, string]> = [
    [0.1, '\u{1F315}'],
    [0.5, '\u{1F313}'],
    [1.0, '\u{1F311}'],
  ];

  options.forEach(([value, label]) => {
    const option = document.createElement('option');
    option.value = value.toString();
    option.textContent = label;
    if (value === defaultOpacity) option.selected = true;
    opacitySelector.appendChild(option);
  });

  opacitySelector.addEventListener('change', () => {
    onChange(parseFloat(opacitySelector.value));
  });

  return opacitySelector;
}
