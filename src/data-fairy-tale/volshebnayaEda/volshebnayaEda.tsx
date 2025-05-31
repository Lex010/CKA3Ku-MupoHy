import React from 'react';
import { volshebnayaEdaData } from './volshebnayaEdaData';
import { StoryContentBlock } from '../StoryContentBlock';

const titleIdVolshebnayaEda = {
  title: 'Волшебная Еда',
  id: 'volshebnayaEda',
};

const VolshebnayaEda: React.FC = () => {
  return <StoryContentBlock title={titleIdVolshebnayaEda.title} data={volshebnayaEdaData} />;
};

export { VolshebnayaEda, titleIdVolshebnayaEda };
