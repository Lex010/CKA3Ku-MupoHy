import React from 'react';
import { mamynTortData } from './mamynTortData';
import { StoryContentBlock } from '../StoryContentBlock';

const titleIdMamynTort = {
  title: 'Торт для Мамы',
  id: 'mamynTort',
};

const MamynTort: React.FC = () => {
  return <StoryContentBlock title={titleIdMamynTort.title} data={mamynTortData} />;
};

export { MamynTort, titleIdMamynTort };
