import React from 'react';

const idDvoinikGame = {
  title: 'Двойник',
  id: 'Dvoinik',
};

const Dvoinik: React.FC = () => {
  return (
    <div>
      <h1 className="fairy-title">{idDvoinikGame.title}</h1>
    </div>
  );
};

export { Dvoinik, idDvoinikGame };
