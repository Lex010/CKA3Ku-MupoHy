import { useState, useEffect } from 'react';

export default function BookmarkButton() {
  const currentPage = `${window.location.origin}${window.location.pathname}${window.location.search}${window.location.hash}`;

  // Указываем, что bookmarks — массив строк
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

    console.log('Текущий список закладок:', updated);
  };

  return (
    <button className="nav-btn main-header__btn" onClick={toggleBookmark}>
      {isBookmarked ? '★' : '☆ Закладка'}
    </button>
  );
}
