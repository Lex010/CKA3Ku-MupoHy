import { mainData } from '../../site-manager-object/mainData';
import getPageNumberFromHashUrl from '../../header-mainPage/Bookmark/BookmarkMenu/parsePageNumber';

export function getReadablePageTitle(url: string): string {
  const pages = Object.values(mainData);
  const page = pages.find((p) => url.includes(p.id));

  const pageNumber = ((n) => (Number.isFinite(n) ? n : null))(getPageNumberFromHashUrl(url));

  return page ? `${page.title}${pageNumber && pageNumber > 1 ? ` (стр. ${pageNumber})` : ''}` : url;
}
