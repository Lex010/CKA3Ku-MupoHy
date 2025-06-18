export const getAvailableCardCounts = (fieldSize: number): number[] => {
  switch (fieldSize) {
    case 24:
      return [2, 4, 8, 12];
    case 32:
      return [2, 4, 8, 12, 16];
    default:
      return [2, 4, 8];
  }
};
