import React from 'react';
import { useNavigate } from 'react-router-dom';
import { mainData } from '../site-manager-object/mainData';

const idGamesPage = {
  title: `${String.fromCodePoint(0x1f3af)} ИГРЫ`,
  id: 'gamesPage',
};

const GamesPage: React.FC = () => {
  const gamesItems = Object.values(mainData).filter((item) => item.type === 'game');
  const navigate = useNavigate();
  return (
    <div>
      <h1 className="fairy-title">{idGamesPage.title}</h1>
      <div className="fairy-list">
        {gamesItems.map((item) => (
          <div key={item.id} className="ckazki" onClick={() => navigate(`/${item.id}`)}>
            {item.title}
          </div>
        ))}
      </div>
    </div>
  );
};

export { GamesPage, idGamesPage };
