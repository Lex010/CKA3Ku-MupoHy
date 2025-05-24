import React from 'react';
import mainPage from './mainPage';
import { mainData } from '../site-manager-object/mainData';
import userLogin from '../firebase/userLogin';

const Header = () => {
  const goHome = () => {
    localStorage.removeItem('currentPage');
    window.location.reload(); // временный способ "сбросить" mainPage
  };

  const scrollUp = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  React.useEffect(() => {
    const savedPage = localStorage.getItem('currentPage');
    const container = document.querySelector('main');
    if (!container) return;

    container.innerHTML = '';
    if (savedPage && mainData[savedPage]) {
      mainData[savedPage].render(container);
    } else {
      mainPage(container);
    }

    userLogin(document.querySelector('header') as HTMLElement);
  }, []);

  return (
    <header className="main-header">
      <button className="nav-btn" onClick={goHome}>
        🏠 На главную
      </button>
      <button className="nav-btn" onClick={scrollUp}>
        🔝
      </button>
    </header>
  );
};

export default Header;
