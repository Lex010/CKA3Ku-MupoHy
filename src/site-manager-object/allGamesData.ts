import { ContentItem } from './type';
import { idXoGame, XoGame } from '../data-games/xoGame/XoGameReact';

const gamesData: ContentItem = {
  [idXoGame.id]: {
    id: idXoGame.id,
    title: idXoGame.title,
    type: 'game',
    component: XoGame,
  },
};

export default gamesData;
