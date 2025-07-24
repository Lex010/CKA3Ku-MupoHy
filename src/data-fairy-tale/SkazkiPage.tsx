import React from 'react';
import { mainData } from '../site-manager-object/mainData';
import BackgroundClouds from '../utils/BackgroundAnimation/BackgroundClouds';
import AppPaginatedMenu from '../components/menus/AppPaginatedMenu';

export const idSkazkiPage = {
  title: `${String.fromCodePoint(0x1f4d6)} КНИГА РАССКАЗОВ`,
  id: 'skazkiPage',
};

const SkazkiPage: React.FC = () => {
  const skazkiItems = Object.values(mainData).filter((item) => item.type === 'story');

  return (
    <BackgroundClouds withFlyingBooks>
      <AppPaginatedMenu title={idSkazkiPage.title} items={skazkiItems} itemsPerPage={5} />
    </BackgroundClouds>
  );
};

export { SkazkiPage };
