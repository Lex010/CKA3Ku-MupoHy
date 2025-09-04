import { useState, useEffect } from 'react';
import png from '../../assets/nav-menu/users-starting-page.png';
import './UserStartPageButton.css';

export function UserStartPageButton() {
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
    <div className="main-header__startpage-btns-cont">
      <button
        className={`nav-btn main-header__btn ${isCurrentStart ? 'main-header__btn--remove' : 'main-header__btn--add'}`}
        onClick={isCurrentStart ? clearStartPage : assignStartPage}
      >
        <img src={png} alt="Стартовая страница" className="main-header__startpage-icon" />
        {isCurrentStart ? 'Удалить' : 'Назначить'}
      </button>
    </div>
  );
}
