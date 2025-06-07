import { ContentItem } from './type';
import { idXoGame, XoGame } from '../data-games/xoGame/XoGameReact';
import { Dvoinik, idDvoinikGame } from '../data-games/Dvoinik/Dvoinik';
import { Kybik, idKybikGame } from '../data-games/Kybik/Kybik';

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
  [idKybikGame.id]: {
    id: idKybikGame.id,
    title: idKybikGame.title,
    type: 'game',
    component: Kybik,
  },
};

export default gamesData;
