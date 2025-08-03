import { ContentItem } from './type';
import { titleIdPushistayaPlaneta, PushistayaPlaneta } from '../data-fairy-tale/pushistaya-planeta/PushistayaPlaneta';
import { titleIdCifrozavry, Cifrozavry } from '../data-fairy-tale/cifrozavry/Cifro-zavry';
import { titleIdVolshebnayaEda, VolshebnayaEda } from '../data-fairy-tale/volshebnayaEda/volshebnayaEda';
import { titleIdMamynTort, MamynTort } from '../data-fairy-tale/mamynTort/mamynTort';
import { titleIdMeloch, Meloch } from '../data-fairy-tale/Meloch/Meloch';
import { titleIdSlovo, Slovo } from '../data-fairy-tale/Slovo/Slovo';

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
  [titleIdMamynTort.id]: {
    id: titleIdMamynTort.id,
    title: titleIdMamynTort.title,
    type: 'story',
    component: MamynTort,
  },
  [titleIdMeloch.id]: {
    id: titleIdMeloch.id,
    title: titleIdMeloch.title,
    type: 'story',
    component: Meloch,
  },
  [titleIdSlovo.id]: {
    id: titleIdSlovo.id,
    title: titleIdSlovo.title,
    type: 'story',
    component: Slovo,
  },
};

export default storyData;
