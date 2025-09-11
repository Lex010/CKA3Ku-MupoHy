// import './css/StartPageToggleButton.css';

interface StartPageToggleButtonProps {
  startPage: string | null;
  onChange: (newPage: string | null) => void;
}

export default function StartPageToggleButton({ startPage, onChange }: StartPageToggleButtonProps) {
  const currentPage = `${window.location.origin}${window.location.pathname}${window.location.search}${window.location.hash}`;
  const isCurrentStart = startPage === currentPage;

  const assignStartPage = () => {
    localStorage.setItem('startPage', currentPage);
    onChange(currentPage);
    console.log(`✅ Назначена стартовая страница: ${currentPage}`);
  };

  const clearStartPage = () => {
    localStorage.removeItem('startPage');
    onChange(null);
    console.log('❌ Стартовая страница удалена');
  };

  return (
    <button
      className={`startpage-modal__toggle-btn ${isCurrentStart ? 'remove' : 'add'}`}
      onClick={isCurrentStart ? clearStartPage : assignStartPage}
    >
      {isCurrentStart ? 'Удалить из стартовых' : 'Назначить стартовой'}
    </button>
  );
}
