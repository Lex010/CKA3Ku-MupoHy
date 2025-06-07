export const rollDice = (count: number): number[] => {
  return Array.from({ length: count }, () => Math.floor(Math.random() * 6) + 1);
};
