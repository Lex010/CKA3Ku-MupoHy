import { useState } from 'react';
import { setStartPage, clearStartPage } from '../../utils/forHeader/startPageUtils';
import ConfirmPopup from '../../components/ConfirmPopup/ConfirmPopup';
import { START_PAGE_UNSET_LABEL } from './startPageConstants';
import { getReadablePageTitle } from '../../utils/forHeader/getReadablePageTitle';
// import './css/StartPageToggleButton.css';

interface StartPageToggleButtonProps {
  startPage: string | null;
  onChange: (newPage: string | null) => void;
}

export default function StartPageToggleButton({ startPage, onChange }: StartPageToggleButtonProps) {
  const currentPage = `${window.location.origin}${window.location.pathname}${window.location.search}${window.location.hash}`;
  const isCurrentStart = startPage === currentPage;

  const [showConfirm, setShowConfirm] = useState(false);

  const assignStartPage = () => {
    setStartPage(currentPage);
    onChange(currentPage);
    setShowConfirm(false);
  };

  const removeStartPage = () => {
    clearStartPage();
    onChange(null);
    setShowConfirm(false);
  };

  const handleClick = () => {
    setShowConfirm(true);
  };

  return (
    <>
      <button className={`startpage-modal__toggle-btn ${isCurrentStart ? 'remove' : 'add'}`} onClick={handleClick}>
        {isCurrentStart ? 'Удалить из стартовых' : 'Назначить стартовой'}
      </button>

      <ConfirmPopup
        isOpen={showConfirm}
        onConfirm={isCurrentStart ? removeStartPage : assignStartPage}
        onCancel={() => setShowConfirm(false)}
        title={
          isCurrentStart ? 'Удалить стартовую страницу?' : `Назначить «${getReadablePageTitle(currentPage)}» стартовой?`
        }
        message={
          isCurrentStart
            ? `После удаления при запуске будет открываться «${START_PAGE_UNSET_LABEL}».`
            : `Сделать текущую страницу стартовой?`
        }
        confirmText="Да"
        cancelText="Отмена"
      />
    </>
  );
}
