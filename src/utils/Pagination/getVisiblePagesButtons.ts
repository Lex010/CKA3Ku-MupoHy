export function getVisiblePagesButtons(current: number, total: number): (number | string)[] {
  const delta = 2; // Переменная для регуляции показываемых кнопок
  const range: (number | string)[] = [];
  const left = Math.max(2, current - delta);
  const right = Math.min(total - 1, current + delta);

  range.push(1); // Всегда первый

  if (left > 2) {
    range.push('...');
  }

  for (let i = left; i <= right; i += 1) {
    range.push(i);
  }

  if (right < total - 1) {
    range.push('...');
  }

  if (total > 1) {
    range.push(total); // Всегда последний
  }

  return range;
}
