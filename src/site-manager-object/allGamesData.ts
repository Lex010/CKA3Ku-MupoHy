import createPageWithLocalStorage from '../utils/createPageWithLocalStorage';
import { ContentItem } from './type';
import { idXoGame, xoGame } from '../data-games/xoGame/xoGame';

const gamesData: ContentItem = {
  [idXoGame.id]: {
    id: idXoGame.id,
    title: idXoGame.title,
    type: 'game',
    render: createPageWithLocalStorage(xoGame, idXoGame.id),
  },
};

export default gamesData;
