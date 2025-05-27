import createPageWithLocalStorage from '../utils/createPageWithLocalStorage';
import { ContentItem } from './type';
import { titleIdPushistayaPlaneta, pushistayaPlaneta } from '../data-fairy-tale/pushistaya-planeta/pushistaya-planeta';
import { titleIdCifrozavry, Cifrozavry } from '../data-fairy-tale/cifrozavry/Cifro-zavry';

const storyData: ContentItem = {
  [titleIdPushistayaPlaneta.id]: {
    id: titleIdPushistayaPlaneta.id,
    title: titleIdPushistayaPlaneta.title,
    type: 'story',
    render: createPageWithLocalStorage(pushistayaPlaneta, titleIdPushistayaPlaneta.id),
  },
  [titleIdCifrozavry.id]: {
    id: titleIdCifrozavry.id,
    title: titleIdCifrozavry.title,
    type: 'story',
    component: Cifrozavry,
  },
};

export default storyData;
