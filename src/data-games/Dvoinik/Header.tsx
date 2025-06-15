import React, { useState } from 'react';
import './css/HeaderDvoinik.css';

interface PlayerStats {
  matches: number;
  mistakes: number;
  wins: number;
}

interface HeaderDvoinikProps {
  playerStats: PlayerStats[];
  playerNames: string[];
}

const HeaderDvoinik: React.FC<HeaderDvoinikProps> = ({ playerStats, playerNames }) => {
  const [showStats, setShowStats] = useState(false);

  return (
    <div className="header-dvoinik-wrapper">
      <button className="header-toggle-button--dvoinik" onClick={() => setShowStats(!showStats)}>
        {showStats ? 'Скрыть счёт' : 'Показать счёт'}
      </button>

      {showStats && (
        <div className="header-stats-popup--dvoinik">
          {playerStats.map((stat, index) => (
            <div key={index} className="header-player-stat--dvoinik">
              <strong>{playerNames[index] || `Первый`}</strong>: <br />
              <span className="stat-item--dvoinik">
                <span className="icon-check--dvoinik" />
                {stat.matches}
              </span>
              {' | '}
              <span className="stat-item--dvoinik">
                <span className="icon-cross--dvoinik" />
                {stat.mistakes}
              </span>
              {' | '}
              Побед: {stat.wins}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default HeaderDvoinik;
