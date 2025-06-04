import { useState } from 'react';

export default function playerTurnManager(totalPlayers: number) {
  const [currentPlayer, setCurrentPlayer] = useState(0);

  const nextPlayer = () => {
    setCurrentPlayer((prev) => (prev + 1) % totalPlayers);
  };

  const reset = () => setCurrentPlayer(0); // сброс на ход первого игрока(не используеться)

  return {
    currentPlayer,
    nextPlayer,
    reset,
  };
}
