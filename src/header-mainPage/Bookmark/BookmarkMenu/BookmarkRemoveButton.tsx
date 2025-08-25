import { useState, useEffect } from 'react';
import ConfirmPopup from '../../../components/ConfirmPopup/ConfirmPopup';
import { Bookmark } from '../BookmarkButton';
import './css/BookmarkRemoveButton.css';

interface BookmarkRemoveButtonProps {
  url: string;
  onRemove?: (url: string) => void; // колбэк для обновления списка в родителе
}

export default function BookmarkRemoveButton({ url, onRemove }: BookmarkRemoveButtonProps) {
  const [bookmarks, setBookmarks] = useState<Bookmark[]>([]);
  const [showConfirm, setShowConfirm] = useState(false);
  const [bookmarkTitle, setBookmarkTitle] = useState<string>('');

  useEffect(() => {
    const savedRaw = localStorage.getItem('bookmarks');
    const saved: Bookmark[] = savedRaw ? JSON.parse(savedRaw) : [];
    setBookmarks(saved);

    const current = saved.find((b) => b.url === url);
    if (current) {
      setBookmarkTitle(`${current.title}`);
    }
  }, [url]);

  const handleRemoveClick = () => {
    setShowConfirm(true);
  };

  const confirmRemove = () => {
    const updated = bookmarks.filter((b) => b.url !== url);
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
      <ConfirmPopup
        isOpen={showConfirm}
        onConfirm={confirmRemove}
        onCancel={cancelRemove}
        title="Удалить закладку?"
        message={bookmarkTitle ? `${bookmarkTitle}` : `${url}`}
        confirmText="Да"
        cancelText="Отмена"
      />
    </>
  );
}
