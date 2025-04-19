import './style.css';
import favIcon from './assets/favicon32x32.png';
import createElement from './utils/create-element';
import header from './header-headPage/header';

export default favIcon; // Костыль для создания assets/favicon32x32.png при сборке
const main = createElement('main', 'body');
header(main);
