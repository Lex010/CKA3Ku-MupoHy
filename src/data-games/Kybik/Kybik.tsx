import React, { useState } from 'react';
import GameModal from '../GameModal';
import MainKybikField from './classicKybic/MainKybikField';
import './css/kybik.css';

const idKybikGame = {
  title: 'Кубик 🎲',
  id: 'Kybik',
};

const Kybik: React.FC = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [diceCount, setDiceCount] = useState(1);

  const handleStartGame = () => {
    setIsModalOpen(true);
  };

  const handleDiceCountChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setDiceCount(parseInt(event.target.value, 10));
  };

  return (
    <div>
      <h1 className="page-title">{idKybikGame.title}</h1>
      <div className="kybik-menuUnit player-config">
        <label htmlFor="diceCountKybik">Количество кубиков:</label>
        <select id="diceCountKybik" value={diceCount} onChange={handleDiceCountChange}>
          {[...Array(10)].map((_, i) => (
            <option key={i + 1} value={i + 1}>
              {i + 1}
            </option>
          ))}
        </select>
      </div>
      <button className="start-button" onClick={handleStartGame}>
        Начать игру
      </button>

      {isModalOpen && (
        <GameModal onClose={() => setIsModalOpen(false)} gameFieldContent={<MainKybikField diceCount={diceCount} />} />
      )}
    </div>
  );
};

export { Kybik, idKybikGame };
