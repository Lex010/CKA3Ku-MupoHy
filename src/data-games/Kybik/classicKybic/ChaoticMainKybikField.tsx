import React, { useState } from 'react';
import { rollDice } from '../rollDice';
import DiceSides from './DiceSides';
import RollButton from './RollButton';
import '../css/chaoticMainKybikField.css';

interface ChaoticKybikFieldProps {
  diceCount: number;
}

const ChaoticMainKybikField: React.FC<ChaoticKybikFieldProps> = ({ diceCount }) => {
  const [diceValues, setDiceValues] = useState<number[] | null>(null);
  const [positions, setPositions] = useState<{ top: number; left: number }[]>([]);
  const [animate, setAnimate] = useState(false);
  const [resetting, setResetting] = useState(false);

  const generateRandomPosition = () => {
    const maxX = window.innerWidth - 80;
    const maxY = window.innerHeight - 200;
    return {
      top: Math.floor(Math.random() * maxY),
      left: Math.floor(Math.random() * maxX),
    };
  };

  const handleRoll = () => {
    if (animate) return;
    setAnimate(true);
    setResetting(true);
    setDiceValues(null);
    setPositions([]);

    setTimeout(() => {
      const newValues = rollDice(diceCount);
      const newPositions = newValues.map(() => generateRandomPosition());
      setResetting(false);
      setDiceValues(newValues);
      setPositions(newPositions);
      setTimeout(() => setAnimate(false), 700);
    }, 300);
  };

  const displayValues = diceValues ?? Array(diceCount).fill(null);

  return (
    <div className="game_KybikChaotic field_kybik">
      <div className="kybik-containerChaotic">
        {displayValues.map((value, i) => {
          const pos = positions[i] || { top: 0, left: 0 };
          return (
            <div key={i} className="dice_kybik-containerChaotic" style={{ top: pos.top, left: pos.left }}>
              <div className={`dice_kybik ${!resetting && value ? `show-${value}_kybik` : ''}`}>
                <DiceSides />
              </div>
            </div>
          );
        })}
      </div>

      <RollButton onClick={handleRoll} disabled={animate} />
    </div>
  );
};

export default ChaoticMainKybikField;
