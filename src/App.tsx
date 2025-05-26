import { useEffect, useState, useRef } from 'react';
import Header from './header-mainPage/HeaderReact';
import MainPage from './header-mainPage/MainPage';
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

    // если для текущей страницы есть React-компонент — ничего не делаем
    if (currentPage && mainData[currentPage]?.component) return;
    if (!currentPage) return; // <== если нет страницы, тоже ничего не делаем

    container.innerHTML = '';
    mainData[currentPage]?.render?.(container);
  }, [currentPage]);

  // инициализация userLogin
  useEffect(() => {
    userLogin(document.querySelector('header') as HTMLElement);
  }, []);

  const goHome = () => {
    localStorage.removeItem('currentPage');
    setCurrentPage(null);
  };

  const Component = currentPage ? mainData[currentPage]?.component : null;

  return (
    <>
      <Header goHome={goHome} />
      <main ref={containerRef}>
        {Component && <Component onSelect={setCurrentPage} />}
        {!Component && currentPage === null && <MainPage onSelect={setCurrentPage} />}
      </main>
    </>
  );
};

export default App;
