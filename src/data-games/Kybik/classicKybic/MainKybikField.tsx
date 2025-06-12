import React, { useState } from 'react';
import { rollDice } from '../rollDice';
import DiceSides from './DiceSides';
import RollButton from './RollButton';
import ChaoticMainKybikField from './ChaoticMainKybikField';
import '../css/mainKybikField.css';

interface MainKybikFieldProps {
  diceCount: number;
  chaotic?: boolean;
}

const MainKybikField: React.FC<MainKybikFieldProps> = ({ diceCount, chaotic }) => {
  if (chaotic) {
    return <ChaoticMainKybikField diceCount={diceCount} />;
  }
  const [diceValues, setDiceValues] = useState<number[] | null>(null);
  const [animate, setAnimate] = useState(false);
  const [resetting, setResetting] = useState(false);

  const handleRoll = () => {
    if (animate) return;
    setAnimate(true);
    setResetting(true);
    setDiceValues(null);
    setTimeout(() => {
      setResetting(false);
      setDiceValues(rollDice(diceCount, 6));
      setTimeout(() => setAnimate(false), 700);
    }, 300);
  };

  const displayValues = diceValues ?? Array(diceCount).fill(null);

  return (
    <div className="game_Kybik field_kybik">
      <div className="kybik-container">
        {displayValues.map((value, i) => (
          <div key={i} className="dice_kybik-container">
            <div className={`dice_kybik ${!resetting && value ? `show-${value}_kybik` : ''}`}>
              <DiceSides />
            </div>
          </div>
        ))}
      </div>

      <RollButton onClick={handleRoll} disabled={animate} />
    </div>
  );
};

export default MainKybikField;
