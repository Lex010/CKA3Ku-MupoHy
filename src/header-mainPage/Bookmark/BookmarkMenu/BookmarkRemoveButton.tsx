import { useState, useEffect } from 'react';
import './css/BookmarkRemoveButton.css';

interface BookmarkRemoveButtonProps {
  url: string;
  onRemove?: (url: string) => void; // колбэк для обновления списка в родителе
}

export default function BookmarkRemoveButton({ url, onRemove }: BookmarkRemoveButtonProps) {
  const [bookmarks, setBookmarks] = useState<string[]>([]);

  useEffect(() => {
    const savedRaw = localStorage.getItem('bookmarks');
    const saved: string[] = savedRaw ? JSON.parse(savedRaw) : [];
    setBookmarks(saved);
  }, []);

  const removeBookmark = () => {
    const updated = bookmarks.filter((b) => b !== url);
    setBookmarks(updated);
    localStorage.setItem('bookmarks', JSON.stringify(updated));

    if (onRemove) {
      onRemove(url); // сообщаем родителю
    }
  };

  return (
    <button className="pages-bookmarks__remove-btn" onClick={removeBookmark}>
      ✖
    </button>
  );
}
