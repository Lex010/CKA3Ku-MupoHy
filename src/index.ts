import './style.css';
import pushistayaPlaneta from './data-fairy-tale/pushistaya-planeta/pushistaya-planeta';
import favIcon from './assets/favicon32x32.png';
import createElement from './utils/create-element';

export default favIcon; // Костыль для создания assets/favicon32x32.png при сборке
const main = createElement('main', 'body');
pushistayaPlaneta(main);
