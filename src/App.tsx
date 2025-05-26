import React, { useEffect, useState, useRef } from 'react';
import Header from './header-mainPage/HeaderReact';
import mainPage from './header-mainPage/mainPage';
import { mainData } from './site-manager-object/mainData';
import userLogin from './firebase/userLogin';

const App = () => {
  const [currentPage, setCurrentPage] = useState<string | null>(null);
  const containerRef = useRef<HTMLElement | null>(null);

  // загружаем сохранённую страницу
  useEffect(() => {
    const saved = localStorage.getItem('currentPage');
    setCurrentPage(saved ?? null);
  }, []);

  // рендерим нужную страницу в main
  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    container.innerHTML = '';
    if (currentPage && mainData[currentPage]) {
      mainData[currentPage].render(container);
    } else {
      mainPage(container);
    }
  }, [currentPage]);

  // инициализация userLogin
  useEffect(() => {
    userLogin(document.querySelector('header') as HTMLElement);
  }, []);

  const goHome = () => {
    localStorage.removeItem('currentPage');
    setCurrentPage(null);
  };

  return (
    <>
      <Header goHome={goHome} />
      <main ref={containerRef} />
    </>
  );
};

export default App;
