import { useState, useEffect } from 'react';
import pngBookmark from '../../assets/bookmarks/bookmark.png';
import { mainData } from '../../site-manager-object/mainData';
import getPageNumberFromHashUrl from '../../utils/forHeader/parsePageNumber';
import './BookmarkButton.css';

export interface Bookmark {
  url: string;
  title: string;
}

export function BookmarkButton() {
  const currentPage = `${window.location.origin}${window.location.pathname}${window.location.search}${window.location.hash}`;

  const [bookmarks, setBookmarks] = useState<Bookmark[]>([]);
  const isBookmarked = bookmarks.some((b) => b.url === currentPage);

  useEffect(() => {
    const savedRaw = localStorage.getItem('bookmarks');
    const saved: Bookmark[] = savedRaw ? JSON.parse(savedRaw) : [];
    setBookmarks(saved);
  }, []);

  const toggleBookmark = () => {
    let updated: Bookmark[];
    if (isBookmarked) {
      updated = bookmarks.filter((b) => b.url !== currentPage);
    } else {
      const pages = Object.values(mainData);
      const page = pages.find((p) => currentPage.includes(p.id));
      const pageNumber = ((n) => (Number.isFinite(n) ? n : null))(getPageNumberFromHashUrl(currentPage));

      const newBookmark: Bookmark = {
        url: currentPage,
        title: page ? `${page.title}${pageNumber && pageNumber > 1 ? ` (стр. ${pageNumber})` : ''}` : currentPage,
      };
      updated = [...bookmarks, newBookmark];
    }
    setBookmarks(updated);
    localStorage.setItem('bookmarks', JSON.stringify(updated));
  };

  return (
    <div className="main-header__bookmark-btns-cont">
      <div className="main-header__bookmark-div-for-img">
        <img src={pngBookmark} alt="Закладка" className="main-header__bookmark-img" />
      </div>
      <button
        className={`nav-btn main-header__btn ${isBookmarked ? 'main-header__btn--remove' : 'main-header__btn--add'}`}
        onClick={toggleBookmark}
      >
        {isBookmarked ? '- Удалить' : '+ Добавить'}
      </button>
    </div>
  );
}
