import React from 'react';
import { useNavigate } from 'react-router-dom';
import { mainData } from '../site-manager-object/mainData';
import BackgroundClouds from '../utils/BackgroundAnimation/BackgroundClouds';

const idGamesPage = {
  title: `${String.fromCodePoint(0x1f3af)} ИГРЫ`,
  id: 'gamesPage',
};

const GamesPage: React.FC = () => {
  const gamesItems = Object.values(mainData).filter((item) => item.type === 'game');
  const navigate = useNavigate();
  return (
    <BackgroundClouds withGamePageAnimation>
      <div>
        <h1 className="page-title">{idGamesPage.title}</h1>
        <div className="page-list">
          {gamesItems.map((item) => (
            <div key={item.id} className="page-unit" onClick={() => navigate(`/${item.id}`)}>
              {item.title}
            </div>
          ))}
        </div>
      </div>
    </BackgroundClouds>
  );
};

export { GamesPage, idGamesPage };
