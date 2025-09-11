import { setStartPage, clearStartPage } from '../../utils/forHeader/startPageUtils';
// import './css/StartPageToggleButton.css';

interface StartPageToggleButtonProps {
  startPage: string | null;
  onChange: (newPage: string | null) => void;
}

export default function StartPageToggleButton({ startPage, onChange }: StartPageToggleButtonProps) {
  const currentPage = `${window.location.origin}${window.location.pathname}${window.location.search}${window.location.hash}`;
  const isCurrentStart = startPage === currentPage;

  const assignStartPage = () => {
    setStartPage(currentPage);
    onChange(currentPage);
  };

  const removeStartPage = () => {
    clearStartPage();
    onChange(null);
  };

  return (
    <button
      className={`startpage-modal__toggle-btn ${isCurrentStart ? 'remove' : 'add'}`}
      onClick={isCurrentStart ? removeStartPage : assignStartPage}
    >
      {isCurrentStart ? 'Удалить из стартовых' : 'Назначить стартовой'}
    </button>
  );
}
