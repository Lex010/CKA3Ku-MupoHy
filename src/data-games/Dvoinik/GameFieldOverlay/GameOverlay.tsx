import React from 'react';
import '../css/GameOverlay.css';

interface GameOverlayProps {
  onRestart: () => void;
}

const GameOverlay: React.FC<GameOverlayProps> = ({ onRestart }) => {
  return (
    <div className="game-overlay--dvoiniki">
      <button className="restart-button-dvoiniki" onClick={onRestart}>
        Заново 🔁
      </button>
    </div>
  );
};

export default GameOverlay;
