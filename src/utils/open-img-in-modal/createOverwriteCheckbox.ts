export default function createOverwriteCheckbox(onChange: (value: boolean) => void): {
  label: HTMLLabelElement;
  checkbox: HTMLInputElement;
} {
  const label = document.createElement('label');
  label.style.cursor = 'pointer';
  label.style.display = 'flex';
  label.style.alignItems = 'center';
  label.style.backgroundColor = 'white';
  label.style.padding = '3px';

  const checkbox = document.createElement('input');
  checkbox.type = 'checkbox';
  checkbox.checked = false;
  checkbox.style.marginRight = '4px';

  checkbox.addEventListener('change', () => {
    const opacitySelector = document.getElementById('opacity-selector') as HTMLSelectElement;
    if (opacitySelector) {
      opacitySelector.disabled = checkbox.checked;
    }
    onChange(checkbox.checked);
  });

  label.appendChild(checkbox);
  label.appendChild(document.createTextNode(String.fromCodePoint(0x1f9ea)));

  return { label, checkbox };
}
