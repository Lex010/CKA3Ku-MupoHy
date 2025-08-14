import { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';

export default function BookmarkButton() {
  const location = useLocation();
  const currentPage = location.pathname;

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
  };

  return <button onClick={toggleBookmark}>{isBookmarked ? '★ В закладках' : '☆ Добавить в закладки'}</button>;
}
