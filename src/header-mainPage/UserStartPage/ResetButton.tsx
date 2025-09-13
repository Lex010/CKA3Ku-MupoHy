import { useState } from 'react';
import ConfirmPopup from '../../components/ConfirmPopup/ConfirmPopup';
import { resetStartPageToDefault } from '../../utils/forHeader/startPageUtils';

interface StartPageResetButtonProps {
  onChange: (newPage: string | null) => void;
}

export default function StartPageResetButton({ onChange }: StartPageResetButtonProps) {
  const [showConfirm, setShowConfirm] = useState(false);

  const handleClick = () => {
    setShowConfirm(true);
  };

  const confirmReset = () => {
    const defaultPage = resetStartPageToDefault();
    onChange(defaultPage);
    setShowConfirm(false);
  };

  const cancelReset = () => {
    setShowConfirm(false);
  };

  return (
    <>
      <button className="startpage-modal__reset-btn" onClick={handleClick}>
        Вернуть по умолчанию
      </button>

      <ConfirmPopup
        isOpen={showConfirm}
        onConfirm={confirmReset}
        onCancel={cancelReset}
        title="Сбросить стартовую страницу?"
        message="Текущая стартовая страница будет заменена на значение по умолчанию"
        confirmText="Да"
        cancelText="Отмена"
      />
    </>
  );
}
