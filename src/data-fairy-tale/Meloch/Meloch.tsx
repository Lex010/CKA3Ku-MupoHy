import React from 'react';
import { melochData } from './melochData';
import { StoryContentBlock } from '../StoryContentBlock';

const titleIdMeloch = {
  title: 'Мелочь',
  id: 'meloch',
};

const Meloch: React.FC = () => {
  return <StoryContentBlock title={titleIdMeloch.title} data={melochData} />;
};

export { Meloch, titleIdMeloch };
