import { idSkazkiPage, skazkiPage } from '../data-fairy-tale/skazki-page';
import { GamesPage, idGamesPage } from '../data-games/GamesPage';
import createPageWithLocalStorage from '../utils/createPageWithLocalStorage';
import { ContentItem } from './type';
import storyData from './allSkazkiData';
import gamesData from './allGamesData';

export const menuData: ContentItem = {
  [idSkazkiPage.id]: {
    id: idSkazkiPage.id,
    title: idSkazkiPage.title,
    type: 'menu',
    render: createPageWithLocalStorage(skazkiPage, idSkazkiPage.id),
  },
  [idGamesPage.id]: {
    id: idGamesPage.id,
    title: idGamesPage.title,
    type: 'menu',
    component: GamesPage,
  },
};

export const mainData: ContentItem = { ...menuData, ...storyData, ...gamesData };
