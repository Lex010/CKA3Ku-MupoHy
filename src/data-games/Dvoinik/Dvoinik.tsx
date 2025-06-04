import React, { useState } from 'react';
import GameModal from '../GameModal';
import HeaderDvoinik from './Header';
import MainFieldDvoiniki from './MainField';

const idDvoinikGame = {
  title: 'Двойник',
  id: 'Dvoinik',
};

// Допустимые количества уникальных карточек
const difficultyLevels = [2, 4, 8];
const fieldSizes = [16, 24, 32];

const Dvoinik: React.FC = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [uniqueCardCount, setUniqueCardCount] = useState<number>(difficultyLevels[0]);
  const [fieldSize, setFieldSize] = useState<number>(fieldSizes[0]);

  const handleStartGame = () => {
    setIsModalOpen(true);
  };

  return (
    <div>
      <h1 className="page-title">{idDvoinikGame.title}</h1>
      <details className="dvoiniki-details">
        <summary className="dvoiniki-summary">⚙️ Настройки поля</summary>
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

        <div className="difficulty-selection-dvoiniki">
          <p>Размер поля:</p>
          <div className="difficulty-buttons-dvoiniki">
            {fieldSizes.map((size) => (
              <button
                key={size}
                className={`difficulty-button-dvoiniki ${fieldSize === size ? 'selected' : ''}`}
                onClick={() => setFieldSize(size)}
              >
                {size}
              </button>
            ))}
          </div>
        </div>
      </details>

      <button className="start-button" onClick={handleStartGame}>
        Начать игру
      </button>

      {isModalOpen && uniqueCardCount !== null && (
        <GameModal
          onClose={() => setIsModalOpen(false)}
          headerContent={<HeaderDvoinik />}
          gameFieldContent={<MainFieldDvoiniki uniqueCardCount={uniqueCardCount} fieldSize={fieldSize} />}
        />
      )}
    </div>
  );
};

export { Dvoinik, idDvoinikGame };
