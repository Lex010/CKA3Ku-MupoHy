import React, { useState } from 'react';
import { rollDice } from './rollDice';
import './css/mainKybikField.css';

interface MainKybikFieldProps {
  diceCount: number;
}

const diceEmojis = ['⚀', '⚁', '⚂', '⚃', '⚄', '⚅'];
const questionEmoji = '?';

const MainKybikField: React.FC<MainKybikFieldProps> = ({ diceCount }) => {
  const [diceValues, setDiceValues] = useState<number[] | null>(null);

  const handleRoll = () => {
    setDiceValues(rollDice(diceCount));
  };

  const displayValues = diceValues ?? Array(diceCount).fill(null);

  return (
    <div>
      <div className="kybik-container">
        {displayValues.map((value, i) => (
          <div key={i} className="kybik-dice">
            {value === null ? questionEmoji : diceEmojis[value - 1]}
          </div>
        ))}
      </div>

      <div className="dice-controls">
        <button className="roll-button" onClick={handleRoll}>
          Бросить кубики
        </button>
      </div>
    </div>
  );
};

export default MainKybikField;
