import createPageWithLocalStorage from '../utils/createPageWithLocalStorage';
import { titleIdPushistayaPlaneta, pushistayaPlaneta } from '../data-fairy-tale/pushistaya-planeta/pushistaya-planeta';
import { titleIdCifrozavry, cifrozavry } from '../data-fairy-tale/cifrozavry/cifrozavry';
import { ContentItem } from './type';

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
    render: createPageWithLocalStorage(cifrozavry, titleIdCifrozavry.id),
  },
};

export default storyData;
