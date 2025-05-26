import React from 'react';
import { mainData } from '../site-manager-object/mainData';
// import { idGamesPage } from './games-page';
const idGamesPage = {
  title: `${String.fromCodePoint(0x1f3af)} ИГРЫ`,
  id: 'gamesPage',
};

interface GamesPageProps {
  onSelect: (id: string) => void;
}

const GamesPage: React.FC<GamesPageProps> = ({ onSelect }) => {
  const gamesItems = Object.values(mainData).filter((item) => item.type === 'game');

  return (
    <div>
      <h1 className="fairy-title">{idGamesPage.title}</h1>
      <div className="fairy-list">
        {gamesItems.map((item) => (
          <div key={item.id} className="ckazki" onClick={() => onSelect(item.id)}>
            {item.title}
          </div>
        ))}
      </div>
    </div>
  );
};

export { GamesPage, idGamesPage };
