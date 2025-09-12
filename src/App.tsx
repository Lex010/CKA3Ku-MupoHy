import { HashRouter as Router, Routes, Route, useNavigate } from 'react-router-dom';
import { useEffect } from 'react';
import ScrollToTop from './utils/ScrollToTop';
import Header from './header-mainPage/HeaderReact';
import MainPage from './header-mainPage/MainPage';
import { mainData } from './site-manager-object/mainData';
import userLogin from './firebase/userLogin';
import { DynamicPageTitle } from './utils/DynamicPageTitle';
import LoadingElement from './utils/LoadingPage/LoadingElement';
import { NightModeProvider } from './header-mainPage/ThemeToggle/ThemeToggleContext';
import NotFoundPage from './header-mainPage/NotFoundPage/NotFoundPage';
import { useStartPageRedirect } from './utils/forHeader/useStartPageRedirect';

const AppContent = () => {
  const navigate = useNavigate();

  useStartPageRedirect();

  useEffect(() => {
    // если хеша нет — сразу направляет на "#/"
    if (!window.location.hash) {
      navigate('/', { replace: true });
    }
  }, [navigate]);

  useEffect(() => {
    userLogin(document.querySelector('header') as HTMLElement);
  }, []);

  DynamicPageTitle();

  return (
    <>
      <ScrollToTop />
      <Header goHome={() => navigate('/')} />
      <main>
        {Object.keys(mainData).length === 0 ? (
          <LoadingElement />
        ) : (
          <Routes>
            <Route path="/" element={<MainPage />} />
            {Object.entries(mainData).map(([key, { component: Component }]) => (
              <Route key={key} path={`/${key}`} element={<Component />} />
            ))}
            <Route path="*" element={<NotFoundPage />} />
          </Routes>
        )}
      </main>
    </>
  );
};

const App = () => (
  <NightModeProvider>
    <Router>
      <AppContent />
    </Router>
  </NightModeProvider>
);

export default App;
