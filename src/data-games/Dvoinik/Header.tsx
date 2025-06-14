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
              <strong>{playerNames[index] || `Игрок ${index + 1}`}</strong>: <br />
              Собрано: {stat.matches} | Ошибок: {stat.mistakes} | Побед: {stat.wins}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default HeaderDvoinik;
