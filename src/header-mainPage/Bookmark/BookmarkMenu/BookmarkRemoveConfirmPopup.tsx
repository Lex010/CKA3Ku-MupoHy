import { useEffect } from 'react';
import './css/BookmarkRemoveConfirmPopup.css';

interface BookmarkRemoveConfirmPopupProps {
  isOpen: boolean;
  onConfirm: () => void;
  onCancel: () => void;
  message?: string;
}

export default function BookmarkRemoveConfirmPopup({
  isOpen,
  onConfirm,
  onCancel,
  message = 'Удалить закладку?',
}: BookmarkRemoveConfirmPopupProps) {
  // закрытие по ESC
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onCancel();
    };
    if (isOpen) {
      document.addEventListener('keydown', handleKeyDown);
    }
    return () => {
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, onCancel]);

  if (!isOpen) return null;

  return (
    <div className="confirm-popup__overlay">
      <div className="confirm-popup__content">
        <p className="confirm-popup__message">{message}</p>
        <div className="confirm-popup__buttons">
          <button className="confirm-popup__btn confirm-popup__btn--confirm" onClick={onConfirm}>
            Да
          </button>
          <button className="confirm-popup__btn confirm-popup__btn--cancel" onClick={onCancel}>
            Отмена
          </button>
        </div>
      </div>
    </div>
  );
}
