import { idSkazkiPage, SkazkiPage } from '../data-fairy-tale/SkazkiPage';
import { GamesPage, idGamesPage } from '../data-games/GamesPage';
import { ContentItem } from './type';
import storyData from './allSkazkiData';
import gamesData from './allGamesData';

export const menuData: ContentItem = {
  [idSkazkiPage.id]: {
    id: idSkazkiPage.id,
    title: idSkazkiPage.title,
    type: 'menu',
    component: SkazkiPage,
  },
  [idGamesPage.id]: {
    id: idGamesPage.id,
    title: idGamesPage.title,
    type: 'menu',
    component: GamesPage,
  },
};

export const mainData: ContentItem = { ...menuData, ...storyData, ...gamesData };
