import { useState, useEffect } from 'react';
import pngBookmark from '../../assets/bookmarks/bookmark.png';
import { getReadablePageTitle } from '../../utils/forHeader/getReadablePageTitle';
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
      const newBookmark: Bookmark = {
        url: currentPage,
        title: getReadablePageTitle(currentPage),
      };
      updated = [...bookmarks, newBookmark];
    }
    setBookmarks(updated);
    localStorage.setItem('bookmarks', JSON.stringify(updated));
  };

  return (
    <div className="main-header__bookmark-btns-cont">
      <button
        className={`nav-btn main-header__btn main-header__btn-bookmark ${isBookmarked ? 'main-header__btn--remove' : 'main-header__btn--add'}`}
        onClick={toggleBookmark}
      >
        <span className="main-header__bookmark-div-for-img">
          <img src={pngBookmark} alt="Закладка" className="main-header__bookmark-img" />
        </span>
        {isBookmarked ? '- Удалить' : '+ Добавить'}
      </button>
    </div>
  );
}
