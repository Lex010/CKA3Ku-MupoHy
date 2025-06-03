import React, { useState } from 'react';
import GameModal from '../GameModal';
import HeaderDvoinik from './Header';
import MainFieldDvoiniki from './MainField';

const idDvoinikGame = {
  title: 'Двойник',
  id: 'Dvoinik',
};

// Допустимые количества уникальных карточек (для поля 16)
const difficultyLevels = [2, 4, 8];

const Dvoinik: React.FC = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [uniqueCardCount, setUniqueCardCount] = useState<number>(difficultyLevels[0]);

  const handleStartGame = () => {
    setIsModalOpen(true);
  };

  return (
    <div>
      <h1 className="page-title">{idDvoinikGame.title}</h1>

      <div className="difficulty-selection-dvoiniki">
        <p>Количество уникальных карточек (меньше = легче):</p>
        <div className="difficulty-buttons-dvoiniki">
          {difficultyLevels.map((count) => (
            <button
              key={count}
              className={`difficulty-button-dvoiniki ${uniqueCardCount === count ? 'selected' : ''}`}
              onClick={() => setUniqueCardCount(count)}
            >
              {count}
            </button>
          ))}
        </div>
      </div>

      <button className="start-button" onClick={handleStartGame}>
        Начать игру
      </button>

      {isModalOpen && uniqueCardCount !== null && (
        <GameModal
          onClose={() => setIsModalOpen(false)}
          headerContent={<HeaderDvoinik />}
          gameFieldContent={<MainFieldDvoiniki uniqueCardCount={uniqueCardCount} />}
        />
      )}
    </div>
  );
};

export { Dvoinik, idDvoinikGame };
