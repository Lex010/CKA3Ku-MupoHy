import React from 'react';
import { useNavigate } from 'react-router-dom';
import { mainData } from '../site-manager-object/mainData';

export const idSkazkiPage = {
  title: `${String.fromCodePoint(0x1f4d6)} КНИГА РАССКАЗОВ`,
  id: 'skazkiPage',
};

const SkazkiPage: React.FC = () => {
  const skazkiItems = Object.values(mainData).filter((item) => item.type === 'story');
  const navigate = useNavigate();

  return (
    <div>
      <h1 className="fairy-title">{idSkazkiPage.title}</h1>
      <div className="fairy-list">
        {skazkiItems.map((item) => (
          <div key={item.id} className="ckazki" onClick={() => navigate(`/${item.id}`)}>
            {item.title}
          </div>
        ))}
      </div>
    </div>
  );
};

export { SkazkiPage };
