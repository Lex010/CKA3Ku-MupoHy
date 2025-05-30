import { ContentItem } from './type';
import { titleIdPushistayaPlaneta, PushistayaPlaneta } from '../data-fairy-tale/pushistaya-planeta/PushistayaPlaneta';
import { titleIdCifrozavry, Cifrozavry } from '../data-fairy-tale/cifrozavry/Cifro-zavry';
import { titleIdVolshebnayaEda, VolshebnayaEda } from '../data-fairy-tale/volshebnayaEda/volshebnayaEda';

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
  [titleIdVolshebnayaEda.id]: {
    id: titleIdVolshebnayaEda.id,
    title: titleIdVolshebnayaEda.title,
    type: 'story',
    component: VolshebnayaEda,
  },
};

export default storyData;
