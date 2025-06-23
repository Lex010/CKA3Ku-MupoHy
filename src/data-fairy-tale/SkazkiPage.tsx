import React from 'react';
import { useNavigate } from 'react-router-dom';
import { mainData } from '../site-manager-object/mainData';
import BackgroundClouds from '../utils/BackgroundAnimation/BackgroundClouds';

export const idSkazkiPage = {
  title: `${String.fromCodePoint(0x1f4d6)} КНИГА РАССКАЗОВ`,
  id: 'skazkiPage',
};

const SkazkiPage: React.FC = () => {
  const skazkiItems = Object.values(mainData).filter((item) => item.type === 'story');
  const navigate = useNavigate();

  return (
    <BackgroundClouds withFlyingBooks>
      <div>
        <h1 className="page-title">{idSkazkiPage.title}</h1>
        <div className="page-list">
          {skazkiItems.map((item) => (
            <div key={item.id} className="page-unit" onClick={() => navigate(`/${item.id}`)}>
              {item.title}
            </div>
          ))}
        </div>
      </div>
    </BackgroundClouds>
  );
};

export { SkazkiPage };
