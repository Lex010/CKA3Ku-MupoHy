import { titleIdPushistayaPlaneta, pushistayaPlaneta } from './pushistaya-planeta/pushistaya-planeta';

const allTales = {
  [titleIdPushistayaPlaneta.id]: {
    id: titleIdPushistayaPlaneta.id,
    title: titleIdPushistayaPlaneta.title,
    render: pushistayaPlaneta,
  },
};

export default allTales;
