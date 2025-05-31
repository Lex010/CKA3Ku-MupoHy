import React from 'react';
import { cifrozavryData } from './cifrozavryData';
import { StoryContentBlock } from '../StoryContentBlock';

const titleIdCifrozavry = {
  title: 'Цифрозавры',
  id: 'cifrozavry',
};

const Cifrozavry: React.FC = () => <StoryContentBlock title={titleIdCifrozavry.title} data={cifrozavryData} />;

export { Cifrozavry, titleIdCifrozavry };
