import React, { useState, useRef, useLayoutEffect } from 'react';
import { rollDice } from '../rollDice';
import DiceSides from './DiceSides';
import RollButton from './RollButton';
import { generateSafePosition, Position } from './generateSafePosition';
import '../css/chaoticMainKybikField.css';

interface ChaoticKybikFieldProps {
  diceCount: number;
}

const ChaoticMainKybikField: React.FC<ChaoticKybikFieldProps> = ({ diceCount }) => {
  const [diceValues, setDiceValues] = useState<number[] | null>(null);
  const [positions, setPositions] = useState<Position[]>([]);
  const [animate, setAnimate] = useState(false);
  const [resetting, setResetting] = useState(false);

  const buttonRef = useRef<HTMLButtonElement>(null);
  const buttonRect = useRef<DOMRect | null>(null);

  useLayoutEffect(() => {
    if (buttonRef.current) {
      buttonRect.current = buttonRef.current.getBoundingClientRect();
    }
  }, [animate]); // обновлять при анимации (возможно изменение позиции)

  const handleRoll = () => {
    if (animate) return;
    setAnimate(true);
    setResetting(true);
    setDiceValues(null);
    setPositions([]);

    setTimeout(() => {
      const newValues = rollDice(diceCount);
      const newPositions: Position[] = [];

      for (let i = 0; i < newValues.length; i += 1) {
        const pos = generateSafePosition(newPositions, buttonRect.current, window.innerWidth, window.innerHeight);
        newPositions.push(pos);
      }

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

      <RollButton onClick={handleRoll} disabled={animate} ref={buttonRef} />
    </div>
  );
};

export default ChaoticMainKybikField;
