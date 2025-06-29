import React, { useState, useEffect } from 'react';
import './GamePageAnimation.css';

const COLORS = ['#00b894', '#0984e3', '#6c5ce7', '#fd79a8', '#e17055'];

interface Balloon {
  id: string;
  color: string;
  left: number;
  duration: number;
  delay: number;
}

const createBalloon = (startFresh = false): Balloon => ({
  id: crypto.randomUUID(),
  color: COLORS[Math.floor(Math.random() * COLORS.length)],
  left: Math.random() * 100,
  duration: Math.random() * 20 + 7,
  delay: startFresh ? 0 : -1 * (Math.random() * 50 + 50),
});

const GamePageAnimation: React.FC = () => {
  const [balloons, setBalloons] = useState<Balloon[]>([]);

  useEffect(() => {
    setBalloons(Array.from({ length: 10 }, () => createBalloon(false)));
  }, []);

  const popBalloon = (id: string) => {
    setBalloons((prev) => prev.filter((b) => b.id !== id).concat(createBalloon(true)));
  };

  return (
    <div className="game-page-animation__balloons-cont">
      {balloons.map((balloon) => (
        <div
          key={balloon.id}
          className="game-page-animation__balloon game-page-animation__balloon-animation"
          style={{
            backgroundColor: balloon.color,
            left: `${balloon.left}%`,
            animationDuration: `${balloon.duration}s`,
            animationDelay: `${balloon.delay}s`,
          }}
          onClick={() => popBalloon(balloon.id)}
        >
          <div
            className="game-page-animation__balloon-knot"
            style={{
              borderBottomColor: balloon.color,
            }}
          />
        </div>
      ))}
    </div>
  );
};

export default GamePageAnimation;
