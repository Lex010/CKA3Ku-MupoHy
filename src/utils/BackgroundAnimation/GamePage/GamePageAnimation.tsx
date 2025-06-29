import React from 'react';
import './GamePageAnimation.css';

const COLORS = ['#00b894', '#0984e3', '#6c5ce7', '#fd79a8', '#e17055'];

const GamePageAnimation: React.FC = () => {
  return (
    <div className="game-page-animation__balloons-cont">
      {Array.from({ length: 10 }).map((_, i) => (
        <div
          key={i}
          className={`game-page-animation__balloon game-page-animation__balloon-animation`}
          style={{
            backgroundColor: COLORS[i % COLORS.length],
            left: `${Math.random() * 100}%`,
            animationDuration: `${Math.random() * 20 + 7}s`,
            animationDelay: `-${Math.random() * 50 + 50}s`,
          }}
        >
          <div
            className="game-page-animation__balloon-knot"
            style={{
              borderBottomColor: COLORS[i % COLORS.length],
            }}
          />
        </div>
      ))}
    </div>
  );
};

export default GamePageAnimation;
