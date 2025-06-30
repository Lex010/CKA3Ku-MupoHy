import React, { useState, useEffect } from 'react';
import './GamePageAnimation.css';

const COLORS = ['#00b894', '#0984e3', '#6c5ce7', '#fd79a8', '#e17055'];

interface Balloon {
  id: string;
  color: string;
  left: number;
  duration: number;
  delay: number;
  isPopping: boolean;
}

const createBalloon = (startFresh = false): Balloon => ({
  id: Date.now().toString(36) + Math.random().toString(36).substring(2),
  color: COLORS[Math.floor(Math.random() * COLORS.length)],
  left: Math.random() * 100,
  duration: Math.random() * 20 + 7,
  delay: startFresh ? 0 : -1 * (Math.random() * 50 + 50),
  isPopping: false,
});

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

    // зафиксировать позицию и поворот
    outer.style.animation = 'none';
    outer.style.bottom = bottom;
    outer.style.left = left;
    outer.style.transform = transform;

    // пометить как "лопающийся"
    setBalloons((prev) => prev.map((b) => (b.id === id ? { ...b, isPopping: true } : b)));

    // удалить и добавить новый
    setTimeout(() => {
      setBalloons((prev) => prev.filter((b) => b.id !== id).concat(createBalloon(true)));
    }, 300);
  };

  return (
    <div className="game-page-animation__balloons-cont">
      {balloons.map((balloon) => (
        <div
          key={balloon.id}
          id={`balloon-outer-${balloon.id}`}
          className={`game-page-animation__balloon-outer ${!balloon.isPopping ? 'game-page-animation__fly' : ''}`}
          style={{
            left: `${balloon.left}%`,
            animationDuration: `${balloon.duration}s`,
            animationDelay: `${balloon.delay}s`,
          }}
        >
          <div
            className={`game-page-animation__balloon-inner ${balloon.isPopping ? 'game-page-animation__pop' : ''}`}
            onClick={() => !balloon.isPopping && popBalloon(balloon.id)}
          >
            <div className="game-page-animation__balloon-shape" style={{ backgroundColor: balloon.color }}>
              <div className="game-page-animation__balloon-knot" style={{ borderBottomColor: balloon.color }} />
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default GamePageAnimation;
