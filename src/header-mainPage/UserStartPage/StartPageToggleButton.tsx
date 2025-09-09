import { useState, useEffect } from 'react';
// import './css/StartPageToggleButton.css';

export default function StartPageToggleButton() {
  const currentPage = `${window.location.origin}${window.location.pathname}${window.location.search}${window.location.hash}`;

  const [startPage, setStartPage] = useState<string | null>(null);
  const isCurrentStart = startPage === currentPage;

  useEffect(() => {
    const saved = localStorage.getItem('startPage');
    setStartPage(saved ?? null);
  }, []);

  const assignStartPage = () => {
    localStorage.setItem('startPage', currentPage);
    setStartPage(currentPage);
    console.log(`✅ Назначена стартовая страница: ${currentPage}`);
  };

  const clearStartPage = () => {
    localStorage.removeItem('startPage');
    setStartPage(null);
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
