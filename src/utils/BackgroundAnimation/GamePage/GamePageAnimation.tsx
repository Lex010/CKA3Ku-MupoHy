import React, { useState, useEffect } from 'react';
import './GamePageAnimation.css';
import { createBalloon } from './Baloons/balloonUtils';
import { Balloon } from './Baloons/balloonTypes';
import BalloonItem from './Baloons/BalloonItem';
import { useSymbols, SymbolsManager } from './SymbolsInBaloon/SymbolsManager';
import { useBalloonsSettings } from '../../../data-games/GamePageBaloonsSettings/settingsContext';
import Firework from './FireworkAfterBalloons/Firework';

const GamePageAnimation: React.FC = () => {
  const [fireworks, setFireworks] = useState<{ id: string; left: string; bottom: string }[]>([]);
  const [balloons, setBalloons] = useState<Balloon[]>([]);

  const { symbolsSet, sequential } = useBalloonsSettings();

  const { symbols, addSymbol } = useSymbols({
    symbolsSet: symbolsSet.symbols,
    sequential,
  });

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
    const balloon = balloons.find((b) => b.id === id);
    const color = balloon?.color || '#000';

    setBalloons((prev) => prev.map((b) => (b.id === id ? { ...b, isPopping: true } : b)));

    setTimeout(() => {
      setBalloons((prev) => prev.filter((b) => b.id !== id).concat(createBalloon(true)));
      addSymbol(left, bottom, color);
      setFireworks((prev) => [
        ...prev,
        { id: Math.random().toString(36).slice(2, 10) + Date.now().toString(36), left, bottom },
      ]);
    }, 300);
  };

  return (
    <div className="game-page-animation__balloons-cont">
      {balloons.map((balloon) => (
        <BalloonItem key={balloon.id} balloon={balloon} onPop={popBalloon} />
      ))}
      <SymbolsManager symbols={symbols} />
      {fireworks.map((fw) => (
        <Firework
          key={fw.id}
          left={fw.left}
          bottom={fw.bottom}
          onComplete={() => setFireworks((prev) => prev.filter((f) => f.id !== fw.id))}
        />
      ))}
    </div>
  );
};

export default GamePageAnimation;
