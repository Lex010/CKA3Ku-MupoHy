import React from 'react';
import './GamePageAnimation.css';

const GamePageAnimation: React.FC = () => {
  return (
    <div className="game-page-animation">
      <ul className="game-page-animation__circles">
        {Array.from({ length: 10 }, (_, i) => (
          <li key={i}></li>
        ))}
      </ul>
    </div>
  );
};

export default GamePageAnimation;
