import React from 'react';
import { pushistayaPlanetaData } from './pushistayaPlanetaData';
import { StoryContentBlock } from '../StoryContentBlock';

const titleIdPushistayaPlaneta = {
  title: 'Пушистая Планета',
  id: 'pushistayaPlaneta',
};

const PushistayaPlaneta: React.FC = () => {
  return <StoryContentBlock title={titleIdPushistayaPlaneta.title} data={pushistayaPlanetaData} />;
};

export { PushistayaPlaneta, titleIdPushistayaPlaneta };
