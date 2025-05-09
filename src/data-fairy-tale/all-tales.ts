import createPageWithLocalStorage from '../utils/createPageWithLocalStorage';
import { titleIdPushistayaPlaneta, pushistayaPlaneta } from './pushistaya-planeta/pushistaya-planeta';
import { titleIdCifrozavry, cifrozavry } from './cifrozavry/cifrozavry';

const allTales = {
  [titleIdPushistayaPlaneta.id]: {
    id: titleIdPushistayaPlaneta.id,
    title: titleIdPushistayaPlaneta.title,
    render: createPageWithLocalStorage(pushistayaPlaneta, titleIdPushistayaPlaneta.id),
  },
  [titleIdCifrozavry.id]: {
    id: titleIdCifrozavry.id,
    title: titleIdCifrozavry.title,
    render: createPageWithLocalStorage(cifrozavry, titleIdCifrozavry.id),
  },
};

export default allTales;
