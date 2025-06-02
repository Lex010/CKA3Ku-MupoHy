import React from 'react';
import { useNavigate } from 'react-router-dom';
import { mainData } from '../site-manager-object/mainData';
import Tooltip from '../utils/Tooltip';

const MainPage: React.FC = () => {
  const navigate = useNavigate();

  const menuItems = Object.values(mainData).filter((item) => item.type === 'menu');

  return (
    <div>
      <h1 className="page-title">
        Главная - "МИР"{' '}
        <Tooltip text="МИР — Мирону Интересные Развлечения">
          <span className="page-tooltipTriger">?</span>
        </Tooltip>
      </h1>
      <div className="page-list">
        {menuItems.map((item) => (
          <div
            key={item.id}
            className="page-unit"
            onClick={() => navigate(`/${item.id}`)}
            style={{ cursor: 'pointer' }}
          >
            {item.title}
          </div>
        ))}
      </div>
    </div>
  );
};

export default MainPage;
