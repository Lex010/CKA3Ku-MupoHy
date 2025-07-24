import React from 'react';
import { mainData } from '../site-manager-object/mainData';
import Tooltip from '../utils/Tooltip';
import BackgroundClouds from '../utils/BackgroundAnimation/BackgroundClouds';
import AppPaginatedMenu from '../components/menus/AppPaginatedMenu';

const MainPage: React.FC = () => {
  const menuItems = Object.values(mainData).filter((item) => item.type === 'menu');

  return (
    <BackgroundClouds>
      <AppPaginatedMenu
        renderTitle={() => (
          <h1 className="page-title">
            Главная - "МИР"{' '}
            <Tooltip text="МИР — Мирону Интересные Развлечения">
              <span className="page-tooltipTriger">?</span>
            </Tooltip>
          </h1>
        )}
        items={menuItems}
        itemsPerPage={5}
      />
    </BackgroundClouds>
  );
};

export default MainPage;
