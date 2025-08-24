import { useEffect } from 'react';
import './ConfirmPopup.css';

interface ConfirmPopupProps {
  isOpen: boolean;
  onConfirm: () => void;
  onCancel: () => void;
  title?: string;
  message?: string;
  confirmText?: string;
  cancelText?: string;
}

export default function ConfirmPopup({
  isOpen,
  onConfirm,
  onCancel,
  title = 'Подтверждение',
  message = 'Вы уверены?',
  confirmText = 'Да',
  cancelText = 'Отмена',
}: ConfirmPopupProps) {
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
        <h3 className="confirm-popup__title">{title}</h3>
        <p className="confirm-popup__message">{message}</p>
        <div className="confirm-popup__buttons">
          <button className="confirm-popup__btn confirm-popup__btn--confirm" onClick={onConfirm}>
            {confirmText}
          </button>
          <button className="confirm-popup__btn confirm-popup__btn--cancel" onClick={onCancel}>
            {cancelText}
          </button>
        </div>
      </div>
    </div>
  );
}
