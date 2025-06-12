export const rollDice = (count: number, sides: number): number[] => {
  if (typeof crypto !== 'undefined' && typeof crypto.getRandomValues === 'function') {
    const results: number[] = [];

    while (results.length < count) {
      const array = new Uint32Array(1);
      crypto.getRandomValues(array);
      const value = array[0];

      // Избегаем смещения — отбрасываем значения выше ближайшего кратного sides
      const maxAcceptable = Math.floor(0xffffffff / sides) * sides;

      if (value < maxAcceptable) {
        results.push((value % sides) + 1);
      }
    }

    return results;
  }

  return Array.from({ length: count }, () => Math.floor(Math.random() * sides) + 1);
};
// count = количество кубиков(или других предметов генерирующих случайности)
// sides = количесво сторон(например 6 сторон в стандартном кубике)
