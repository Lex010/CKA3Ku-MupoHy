import React from 'react';
import '../css/GameOverlay.css';

interface GameOverlayProps {
  onRestart: () => void;
  winners: string[];
}

const formatWinners = (winners: string[]): string => {
  if (winners.length === 1) return winners[0];
  if (winners.length === 2) return `${winners[0]} и ${winners[1]}`;
  const allButLast = winners.slice(0, -1).join(', ');
  const last = winners[winners.length - 1];
  return `${allButLast} и ${last}`;
};

const GameOverlay: React.FC<GameOverlayProps> = ({ onRestart, winners }) => {
  const winData = formatWinners(winners);
  return (
    <div className="game-overlay--dvoiniki">
      <div className="winners-announcement--dvoiniki">
        <span>Победитель</span>
        <span>{winData}</span>
      </div>
      <button className="restart-button-dvoiniki" onClick={onRestart}>
        Новая партия 🔁
      </button>
    </div>
  );
};

export default GameOverlay;
