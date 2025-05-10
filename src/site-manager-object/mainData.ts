import { idSkazkiPage, skazkiPage } from '../header-headPage/skazki-page';
import createPageWithLocalStorage from '../utils/createPageWithLocalStorage';

type ContItemInside = {
  id: string;
  title: string;
  type: 'story' | 'game' | 'menu';
  render: (container: HTMLElement) => void;
};

type ContentItem = {
  [K in string]: K extends ContItemInside['id'] ? ContItemInside : never;
};
// тип ContentItem содержит ключь соответствующий ContItemInside['id']

export const mainData: ContentItem = {
  [idSkazkiPage.id]: {
    id: idSkazkiPage.id,
    title: idSkazkiPage.title,
    type: 'menu',
    render: createPageWithLocalStorage(skazkiPage, idSkazkiPage.id),
  },
};
