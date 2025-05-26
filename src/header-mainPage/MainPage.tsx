import React from 'react';
import { mainData } from '../site-manager-object/mainData';

interface MainPageProps {
  onSelect: (id: string) => void;
}

const MainPage: React.FC<MainPageProps> = ({ onSelect }) => {
  const menuItems = Object.values(mainData).filter((item) => item.type === 'menu');

  return (
    <div>
      <h1 className="fairy-title">Главная</h1>
      <div className="fairy-list">
        {menuItems.map((item) => (
          <div key={item.id} className="ckazki" onClick={() => onSelect(item.id)}>
            {item.title}
          </div>
        ))}
      </div>
    </div>
  );
};

export default MainPage;
