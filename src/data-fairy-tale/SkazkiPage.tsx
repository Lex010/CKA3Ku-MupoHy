import React from 'react';
import { mainData } from '../site-manager-object/mainData';

export const idSkazkiPage = {
  title: `${String.fromCodePoint(0x1f4d6)} КНИГА РАССКАЗОВ`,
  id: 'skazkiPage',
};

interface SkazkiPageProps {
  onSelect: (id: string) => void;
}

const SkazkiPage: React.FC<SkazkiPageProps> = ({ onSelect }) => {
  const skazkiItems = Object.values(mainData).filter((item) => item.type === 'story');

  return (
    <div>
      <h1 className="fairy-title">{idSkazkiPage.title}</h1>
      <div className="fairy-list">
        {skazkiItems.map((item) => (
          <div key={item.id} className="ckazki" onClick={() => onSelect(item.id)}>
            {item.title}
          </div>
        ))}
      </div>
    </div>
  );
};

export { SkazkiPage };
