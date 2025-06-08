import React, { useState } from 'react';
import { rollDice } from './rollDice';
import './css/mainKybikField.css';
import './css/rollButton.css';

interface MainKybikFieldProps {
  diceCount: number;
}

const MainKybikField: React.FC<MainKybikFieldProps> = ({ diceCount }) => {
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
      setDiceValues(rollDice(diceCount));
      setTimeout(() => setAnimate(false), 1000);
    }, 300);
  };

  const displayValues = diceValues ?? Array(diceCount).fill(null);

  return (
    <div className="game_Kybik">
      <div className="kybik-container">
        {displayValues.map((value, i) => (
          <div key={i} className="dice_kybik-container">
            <div className={`dice_kybik ${!resetting && value ? `show-${value}_kybik` : ''}`}>
              <div className="side_kybik one_kybik">
                <div className="dot_kybik one-1_kybik"></div>
              </div>
              <div className="side_kybik two_kybik">
                <div className="dot_kybik two-1_kybik"></div>
                <div className="dot_kybik two-2_kybik"></div>
              </div>
              <div className="side_kybik three_kybik">
                <div className="dot_kybik three-1_kybik"></div>
                <div className="dot_kybik three-2_kybik"></div>
                <div className="dot_kybik three-3_kybik"></div>
              </div>
              <div className="side_kybik four_kybik">
                <div className="dot_kybik four-1_kybik"></div>
                <div className="dot_kybik four-2_kybik"></div>
                <div className="dot_kybik four-3_kybik"></div>
                <div className="dot_kybik four-4_kybik"></div>
              </div>
              <div className="side_kybik five_kybik">
                <div className="dot_kybik five-1_kybik"></div>
                <div className="dot_kybik five-2_kybik"></div>
                <div className="dot_kybik five-3_kybik"></div>
                <div className="dot_kybik five-4_kybik"></div>
                <div className="dot_kybik five-5_kybik"></div>
              </div>
              <div className="side_kybik six_kybik">
                <div className="dot_kybik six-1_kybik"></div>
                <div className="dot_kybik six-2_kybik"></div>
                <div className="dot_kybik six-3_kybik"></div>
                <div className="dot_kybik six-4_kybik"></div>
                <div className="dot_kybik six-5_kybik"></div>
                <div className="dot_kybik six-6_kybik"></div>
              </div>
            </div>
          </div>
        ))}
      </div>

      <button className={`roll-button_kybik ${animate ? 'animate_kybik' : ''}`} onClick={handleRoll}>
        <span className="btn-content_kybik">Бросить кубики</span>
        <span className="ovrly_kybik">
          <span className="ovrly2_kybik" />
        </span>
      </button>
    </div>
  );
};

export default MainKybikField;
