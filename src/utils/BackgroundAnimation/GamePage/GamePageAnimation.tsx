// GamePageAnimation.tsx
import React, { useState, useEffect } from 'react';
import './GamePageAnimation.css';
import { createBalloon } from './Baloons/balloonUtils';
import { Balloon } from './Baloons/balloonTypes';
import BalloonItem from './Baloons/BalloonItem';

const GamePageAnimation: React.FC = () => {
  const [balloons, setBalloons] = useState<Balloon[]>([]);

  useEffect(() => {
    setBalloons(Array.from({ length: 10 }, () => createBalloon(false)));
  }, []);

  const popBalloon = (id: string) => {
    const outer = document.getElementById(`balloon-outer-${id}`);
    if (!outer) return;

    const style = window.getComputedStyle(outer);
    const bottom = style.getPropertyValue('bottom');
    const left = style.getPropertyValue('left');
    const transform = style.getPropertyValue('transform');

    outer.style.animation = 'none';
    outer.style.bottom = bottom;
    outer.style.left = left;
    outer.style.transform = transform;

    setBalloons((prev) => prev.map((b) => (b.id === id ? { ...b, isPopping: true } : b)));

    setTimeout(() => {
      setBalloons((prev) => prev.filter((b) => b.id !== id).concat(createBalloon(true)));
    }, 300);
  };

  return (
    <div className="game-page-animation__balloons-cont">
      {balloons.map((balloon) => (
        <BalloonItem key={balloon.id} balloon={balloon} onPop={popBalloon} />
      ))}
    </div>
  );
};

export default GamePageAnimation;
