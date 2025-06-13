import React from 'react';
import './PlayerStatus.css';

interface PlayerStatusProps {
  playerNames: string[];
  currentPlayer: number;
}

const PlayerStatus: React.FC<PlayerStatusProps> = ({ playerNames, currentPlayer }) => {
  if (playerNames.length <= 1) return null;

  return (
    <div className="players-status-dvoiniki">
      {playerNames.map((name, index) => (
        <div
          key={index}
          className={`player-name-dvoiniki ${currentPlayer === index ? 'pn-dvoiniki--active' : 'pn-dvoiniki--inactive'}`}
        >
          {name}
        </div>
      ))}
    </div>
  );
};

export default PlayerStatus;
