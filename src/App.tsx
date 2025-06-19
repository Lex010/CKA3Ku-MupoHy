import { HashRouter as Router, Routes, Route, Navigate, useNavigate } from 'react-router-dom';
import { useEffect } from 'react';
import ScrollToTop from './utils/ScrollToTop';
import Header from './header-mainPage/HeaderReact';
import MainPage from './header-mainPage/MainPage';
import { mainData } from './site-manager-object/mainData';
import userLogin from './firebase/userLogin';
import { DynamicPageTitle } from './utils/DynamicPageTitle';
import LoadingElement from './utils/LoadingPage/LoadingElement';

const AppContent = () => {
  const navigate = useNavigate();

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
            <Route path="*" element={<Navigate to="/" replace />} />
          </Routes>
        )}
      </main>
    </>
  );
};

const App = () => (
  <Router>
    <AppContent />
  </Router>
);

export default App;
