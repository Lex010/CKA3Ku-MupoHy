import createPageWithLocalStorage from '../utils/createPageWithLocalStorage';
import { ContentItem } from './type';
import { idFiGame, fGame } from '../data-games/firstGame/fGame';

const gamesData: ContentItem = {
  [idFiGame.id]: {
    id: idFiGame.id,
    title: idFiGame.title,
    type: 'game',
    render: createPageWithLocalStorage(fGame, idFiGame.id),
  },
};

export default gamesData;
