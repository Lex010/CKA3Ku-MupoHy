import { ContentItem } from './type';
import { titleIdPushistayaPlaneta, PushistayaPlaneta } from '../data-fairy-tale/pushistaya-planeta/PushistayaPlaneta';
import { titleIdCifrozavry, Cifrozavry } from '../data-fairy-tale/cifrozavry/Cifro-zavry';

const storyData: ContentItem = {
  [titleIdPushistayaPlaneta.id]: {
    id: titleIdPushistayaPlaneta.id,
    title: titleIdPushistayaPlaneta.title,
    type: 'story',
    component: PushistayaPlaneta,
  },
  [titleIdCifrozavry.id]: {
    id: titleIdCifrozavry.id,
    title: titleIdCifrozavry.title,
    type: 'story',
    component: Cifrozavry,
  },
};

export default storyData;
