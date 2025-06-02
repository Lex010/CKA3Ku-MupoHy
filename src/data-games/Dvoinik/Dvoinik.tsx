import React, { useState } from 'react';
import GameModal from '../GameModal';
import HeaderDvoinik from './Header';
import MainFieldDvoiniki from './MainField';

const idDvoinikGame = {
  title: 'Двойник',
  id: 'Dvoinik',
};

const Dvoinik: React.FC = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const handleStartGame = () => {
    setIsModalOpen(true);
  };
  return (
    <div>
      <h1 className="page-title">{idDvoinikGame.title}</h1>
      <button className="start-button" onClick={handleStartGame}>
        Начать игру
      </button>

      {isModalOpen && (
        <GameModal
          onClose={() => setIsModalOpen(false)}
          headerContent={<HeaderDvoinik />}
          gameFieldContent={<MainFieldDvoiniki />}
        />
      )}
    </div>
  );
};

export { Dvoinik, idDvoinikGame };
