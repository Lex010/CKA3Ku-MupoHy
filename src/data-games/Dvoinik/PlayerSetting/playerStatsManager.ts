export interface PlayerStats {
  matchedPairs: number; // пары в текущем раунде
  totalWins: number; // общее число побед
  mistakes: number; // ошибки в раунде
}

export const initStats = (playersCount: number): PlayerStats[] =>
  Array(playersCount)
    .fill(null)
    .map(() => ({
      matchedPairs: 0,
      totalWins: 0,
      mistakes: 0,
    }));

export const addMatchedPair = (stats: PlayerStats[], playerIndex: number): PlayerStats[] => {
  const updated = [...stats];
  updated[playerIndex].matchedPairs += 1;
  return updated;
};

export const addMistake = (stats: PlayerStats[], playerIndex: number): PlayerStats[] => {
  const updated = [...stats];
  updated[playerIndex].mistakes += 1;
  return updated;
};

export const handleGameComplete = (stats: PlayerStats[]): PlayerStats[] => {
  const maxPairs = Math.max(...stats.map((p) => p.matchedPairs || 0));
  return stats.map((p) => {
    const isWinner = p.matchedPairs === maxPairs && maxPairs > 0;
    return {
      ...p,
      totalWins: isWinner ? p.totalWins + 1 : p.totalWins,
      matchedPairs: 0,
      mistakes: 0,
    };
  });
};

export const resetRoundStats = (stats: PlayerStats[]): PlayerStats[] => {
  return stats.map((p) => ({
    ...p,
    matchedPairs: 0,
    // optionally: mistakes: 0
  }));
};
