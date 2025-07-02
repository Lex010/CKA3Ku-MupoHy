export default function createColorPicker(
  onChange: (color: string) => void,
  defaultColor: string = '#ffffff'
): HTMLInputElement {
  const colorPicker = document.createElement('input');
  colorPicker.type = 'color';
  colorPicker.name = 'color-picker';
  colorPicker.value = defaultColor;
  colorPicker.style.cursor = 'pointer';
  colorPicker.style.width = '30px';
  colorPicker.style.height = '30px';
  colorPicker.style.border = 'none';
  colorPicker.style.backgroundColor = 'transparent';

  colorPicker.addEventListener('input', (e) => {
    const target = e.target as HTMLInputElement;
    onChange(target.value);
  });

  return colorPicker;
}
