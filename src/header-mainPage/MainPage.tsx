import React from 'react';
import { useNavigate } from 'react-router-dom';
import { mainData } from '../site-manager-object/mainData';

const MainPage: React.FC = () => {
  const navigate = useNavigate();

  const menuItems = Object.values(mainData).filter((item) => item.type === 'menu');

  return (
    <div>
      <h1 className="fairy-title">Главная</h1>
      <div className="fairy-list">
        {menuItems.map((item) => (
          <div key={item.id} className="ckazki" onClick={() => navigate(`/${item.id}`)} style={{ cursor: 'pointer' }}>
            {item.title}
          </div>
        ))}
      </div>
    </div>
  );
};

export default MainPage;
