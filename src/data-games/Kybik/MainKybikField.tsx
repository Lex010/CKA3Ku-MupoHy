import React, { useState } from 'react';
import { rollDice } from './rollDice';
import './css/mainKybikField.css';

interface MainKybikFieldProps {
  diceCount: number;
}

const MainKybikField: React.FC<MainKybikFieldProps> = ({ diceCount }) => {
  const [diceValues, setDiceValues] = useState<number[] | null>(null);

  const handleRoll = () => {
    setDiceValues(rollDice(diceCount));
  };

  const displayValues = diceValues ?? Array(diceCount).fill(null);

  return (
    <div className="game">
      <div className="kybik-container">
        {displayValues.map((value, i) => (
          <div key={i} className="container">
            <div className={`dice ${value ? `show-${value}` : ''}`}>
              <div className="side one">
                <div className="dot one-1"></div>
              </div>
              <div className="side two">
                <div className="dot two-1"></div>
                <div className="dot two-2"></div>
              </div>
              <div className="side three">
                <div className="dot three-1"></div>
                <div className="dot three-2"></div>
                <div className="dot three-3"></div>
              </div>
              <div className="side four">
                <div className="dot four-1"></div>
                <div className="dot four-2"></div>
                <div className="dot four-3"></div>
                <div className="dot four-4"></div>
              </div>
              <div className="side five">
                <div className="dot five-1"></div>
                <div className="dot five-2"></div>
                <div className="dot five-3"></div>
                <div className="dot five-4"></div>
                <div className="dot five-5"></div>
              </div>
              <div className="side six">
                <div className="dot six-1"></div>
                <div className="dot six-2"></div>
                <div className="dot six-3"></div>
                <div className="dot six-4"></div>
                <div className="dot six-5"></div>
                <div className="dot six-6"></div>
              </div>
            </div>
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
