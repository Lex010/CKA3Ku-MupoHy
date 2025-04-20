import { titleIdPushistayaPlaneta, pushistayaPlaneta } from './pushistaya-planeta/pushistaya-planeta';
import { titleIdCifrozavry, cifrozavry } from './cifrozavry/cifrozavry';

const allTales = {
  [titleIdPushistayaPlaneta.id]: {
    id: titleIdPushistayaPlaneta.id,
    title: titleIdPushistayaPlaneta.title,
    render: pushistayaPlaneta,
  },
  [titleIdCifrozavry.id]: {
    id: titleIdCifrozavry.id,
    title: titleIdCifrozavry.title,
    render: cifrozavry,
  },
};

export default allTales;
