import React from 'react';
import { useNavigate } from 'react-router-dom';
import { mainData } from '../site-manager-object/mainData';
import Tooltip from '../utils/Tooltip';
import BackgroundClouds from '../utils/BackgroundAnimation/BackgroundClouds';
import { Pagination } from '../utils/Pagination/Pagination';

const MainPage: React.FC = () => {
  const navigate = useNavigate();

  const menuItems = Object.values(mainData).filter((item) => item.type === 'menu');

  return (
    <BackgroundClouds>
      <div>
        <h1 className="page-title">
          Главная - "МИР"{' '}
          <Tooltip text="МИР — Мирону Интересные Развлечения">
            <span className="page-tooltipTriger">?</span>
          </Tooltip>
        </h1>
        <Pagination items={menuItems} itemsPerPage={5}>
          {(currentItems, controls) => (
            <div className="page-list">
              {currentItems.map((item) => (
                <div
                  key={item.id}
                  className="page-unit"
                  onClick={() => navigate(`/${item.id}`)}
                  style={{ cursor: 'pointer' }}
                >
                  {item.title}
                </div>
              ))}
              {controls}
            </div>
          )}
        </Pagination>
      </div>
    </BackgroundClouds>
  );
};

export default MainPage;
