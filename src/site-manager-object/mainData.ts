import { idSkazkiPage, skazkiPage } from '../data-fairy-tale/skazki-page';
import createPageWithLocalStorage from '../utils/createPageWithLocalStorage';
import { ContentItem } from './type';
import storyData from './allSkazkiData';

export const menuData: ContentItem = {
  [idSkazkiPage.id]: {
    id: idSkazkiPage.id,
    title: idSkazkiPage.title,
    type: 'menu',
    render: createPageWithLocalStorage(skazkiPage, idSkazkiPage.id),
  },
};

export const mainData: ContentItem = { ...menuData, ...storyData };
