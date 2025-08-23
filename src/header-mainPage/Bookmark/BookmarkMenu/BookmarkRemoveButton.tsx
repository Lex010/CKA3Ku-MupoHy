import { useState, useEffect } from 'react';
import BookmarkRemoveConfirmPopup from './BookmarkRemoveConfirmPopup';
import './css/BookmarkRemoveButton.css';

interface BookmarkRemoveButtonProps {
  url: string;
  onRemove?: (url: string) => void; // колбэк для обновления списка в родителе
}

export default function BookmarkRemoveButton({ url, onRemove }: BookmarkRemoveButtonProps) {
  const [bookmarks, setBookmarks] = useState<string[]>([]);
  const [showConfirm, setShowConfirm] = useState(false);

  useEffect(() => {
    const savedRaw = localStorage.getItem('bookmarks');
    const saved: string[] = savedRaw ? JSON.parse(savedRaw) : [];
    setBookmarks(saved);
  }, []);

  const handleRemoveClick = () => {
    setShowConfirm(true);
  };

  const confirmRemove = () => {
    const updated = bookmarks.filter((b) => b !== url);
    setBookmarks(updated);
    localStorage.setItem('bookmarks', JSON.stringify(updated));

    if (onRemove) {
      onRemove(url);
    }
    setShowConfirm(false);
  };

  const cancelRemove = () => {
    setShowConfirm(false);
  };

  return (
    <>
      <button className="pages-bookmarks__remove-btn" onClick={handleRemoveClick}>
        ✖
      </button>
      <BookmarkRemoveConfirmPopup isOpen={showConfirm} onConfirm={confirmRemove} onCancel={cancelRemove} />
    </>
  );
}
