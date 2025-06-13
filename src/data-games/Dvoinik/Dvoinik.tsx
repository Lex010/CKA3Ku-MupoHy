import React, { useState } from 'react';
import GameModal from '../GameModal';
import HeaderDvoinik from './Header';
import MainFieldDvoiniki from './MainField';
import PlayerNames from './PlayerSetting/PlayerNames';
import makeUniqueNames from './PlayerSetting/makeUniqueNames';
import Tooltip from '../../utils/Tooltip';
import './css/Dvoiniki.css';

const idDvoinikGame = {
  title: 'Двойник',
  id: 'Dvoinik',
};

const difficultyLevels = [2, 4, 8];
const fieldSizes = [16, 24, 32];
const playersCount = [1, 2, 3];

const Dvoinik: React.FC = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [uniqueCardCount, setUniqueCardCount] = useState<number>(difficultyLevels[0]);
  const [fieldSiz, setFieldSize] = useState<number>(fieldSizes[0]);
  const [plaCount, setPlaCount] = useState<number>(playersCount[0]);
  const [playerNames, setPlayerNames] = useState<string[]>([]); // Имена игроков
  const [finalNames, setFinalNames] = useState<string[]>([]); // Проверка на уникальность имен игроков

  const handleStartGame = () => {
    const unique = makeUniqueNames(playerNames);
    setFinalNames(unique);
    setIsModalOpen(true);
  };

  return (
    <div>
      <h1 className="page-title page-title--dvoiniki">
        {idDvoinikGame.title}{' '}
        <Tooltip
          text="Найди две одинаковые карточки *** В режиме для 2+ игроков ход остаётся у текущего игрока при нахождении парных карточек"
          className="dvoiniki-title-tooltip"
        >
          <span className="page-tooltipTriger">?</span>
        </Tooltip>
      </h1>
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
                className={`difficulty-button-dvoiniki ${fieldSiz === size ? 'selected' : ''}`}
                onClick={() => setFieldSize(size)}
              >
                {size}
              </button>
            ))}
          </div>
        </div>
      </details>

      <details className="dvoiniki-details">
        <summary className="dvoiniki-summary">👤 Количество игроков</summary>
        <div className="difficulty-selection-dvoiniki">
          <p>Игроки:</p>
          <div className="difficulty-buttons-dvoiniki">
            {playersCount.map((count) => (
              <button
                key={count}
                className={`difficulty-button-dvoiniki ${plaCount === count ? 'selected' : ''}`}
                onClick={() => setPlaCount(count)}
              >
                {count}
              </button>
            ))}
          </div>
        </div>
        {plaCount > 1 && <PlayerNames playersCount={plaCount} onNamesChange={setPlayerNames} />}
      </details>

      <button className="start-button" onClick={handleStartGame}>
        Начать игру
      </button>

      {isModalOpen && uniqueCardCount !== null && (
        <GameModal
          onClose={() => setIsModalOpen(false)}
          headerContent={<HeaderDvoinik />}
          gameFieldContent={
            <MainFieldDvoiniki
              uniqueCardCount={uniqueCardCount}
              fieldSize={fieldSiz}
              playersCount={plaCount}
              playerNames={finalNames}
            />
          }
        />
      )}
    </div>
  );
};

export { Dvoinik, idDvoinikGame };
