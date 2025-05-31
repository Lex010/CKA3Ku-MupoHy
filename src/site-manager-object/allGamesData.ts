import { ContentItem } from './type';
import { idXoGame, XoGame } from '../data-games/xoGame/XoGameReact';
import { Dvoinik, idDvoinikGame } from '../data-games/Dvoinik/Dvoinik';

const gamesData: ContentItem = {
  [idXoGame.id]: {
    id: idXoGame.id,
    title: idXoGame.title,
    type: 'game',
    component: XoGame,
  },
  [idDvoinikGame.id]: {
    id: idDvoinikGame.id,
    title: idDvoinikGame.title,
    type: 'game',
    component: Dvoinik,
  },
};

export default gamesData;
