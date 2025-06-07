import React, { useState } from 'react';
import GameModal from '../GameModal';

const idKybikGame = {
  title: 'Кубик 🎲',
  id: 'Kybik',
};

const Kybik: React.FC = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleStartGame = () => {
    setIsModalOpen(true);
  };

  return (
    <div>
      <h1 className="page-title">{idKybikGame.title}</h1>
      <button className="start-button" onClick={handleStartGame}>
        Начать игру
      </button>
      {isModalOpen && <GameModal onClose={() => setIsModalOpen(false)} />}
    </div>
  );
};

export { Kybik, idKybikGame };
