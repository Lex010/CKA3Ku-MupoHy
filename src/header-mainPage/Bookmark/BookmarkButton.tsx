import { useState, useEffect } from 'react';
import pngBookmark from '../../assets/bookmarks/bookmark.png';
import './BookmarkButton.css';

export default function BookmarkButton() {
  const currentPage = `${window.location.origin}${window.location.pathname}${window.location.search}${window.location.hash}`;

  const [bookmarks, setBookmarks] = useState<string[]>([]);
  const isBookmarked = bookmarks.includes(currentPage);

  useEffect(() => {
    const savedRaw = localStorage.getItem('bookmarks');
    const saved: string[] = savedRaw ? JSON.parse(savedRaw) : [];
    setBookmarks(saved);
  }, []);

  const toggleBookmark = () => {
    let updated: string[];
    if (isBookmarked) {
      updated = bookmarks.filter((url) => url !== currentPage);
    } else {
      updated = [...bookmarks, currentPage];
    }
    setBookmarks(updated);
    localStorage.setItem('bookmarks', JSON.stringify(updated));
  };

  return (
    <div className="main-header__bookmark-btns-cont">
      <div className="main-header__bookmark-div-for-img">
        <img src={pngBookmark} alt="Закладка" className="main-header__bookmark-img" />
      </div>
      <button className="nav-btn main-header__btn" onClick={toggleBookmark}>
        {isBookmarked ? '- Удалить' : '+ Добавить'}
      </button>
    </div>
  );
}
