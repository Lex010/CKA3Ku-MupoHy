import React from 'react';
import { slovoData } from './slovoData';
import { StoryContentBlock } from '../StoryContentBlock';

const titleIdSlovo = {
  title: 'Слово',
  id: 'Slovo',
};

const Slovo: React.FC = () => {
  return <StoryContentBlock title={titleIdSlovo.title} data={slovoData} />;
};

export { Slovo, titleIdSlovo };
