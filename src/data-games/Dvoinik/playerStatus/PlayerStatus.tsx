import React from 'react';
import './PlayerStatus.css';

interface PlayerStatusProps {
  playersCount: number;
  currentPlayer: number;
}

const PlayerStatus: React.FC<PlayerStatusProps> = ({ playersCount, currentPlayer }) => {
  if (playersCount <= 1) return null;

  return (
    <div className="players-status-dvoiniki">
      {[...Array(playersCount)].map((_, index) => (
        <div key={index} className={`player-name-dvoiniki ${currentPlayer === index ? 'active' : 'inactive'}`}>
          Игрок {index + 1}
        </div>
      ))}
    </div>
  );
};

export default PlayerStatus;
