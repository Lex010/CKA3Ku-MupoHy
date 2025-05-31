import React, { useState } from 'react';
import { gameCharacters, Player } from './gameCharacters';
import GameModal from '../GameModal';
import PlayerSetup from './PlayerSetup';
import { initXoGame } from './initXoGame';

const idXoGame = {
  title: 'Крестики-нолики',
  id: 'xoGame',
};

const XoGame: React.FC = () => {
  const [selectedCharacters, setSelectedCharacters] = useState<(Player | null)[]>([
    gameCharacters[0],
    gameCharacters[1],
  ]);
  const [botDifficulty, setBotDifficulty] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const updatePlayer = (index: number, player: Player) => {
    const updated = [...selectedCharacters];
    updated[index] = player;
    setSelectedCharacters(updated);
  };

  const handleStartGame = () => {
    if (!selectedCharacters[0] || !selectedCharacters[1]) {
      throw new Error('Оба игрока должны выбрать персонажа');
    }
    setIsModalOpen(true);
  };

  return (
    <div>
      <h1 className="page-title">{idXoGame.title}</h1>

      <PlayerSetup
        selectedCharacters={selectedCharacters}
        updatePlayer={updatePlayer}
        botDifficulty={botDifficulty}
        setBotDifficulty={setBotDifficulty}
      />

      <button className="start-button" onClick={handleStartGame}>
        Начать игру
      </button>

      {isModalOpen && (
        <GameModal
          onClose={() => setIsModalOpen(false)}
          onReady={({ gameField, header }) =>
            initXoGame({
              header,
              gameField,
              selectedCharacters: selectedCharacters as Player[],
              botDifficulty,
            })
          }
        />
      )}
    </div>
  );
};

export { XoGame, idXoGame };
