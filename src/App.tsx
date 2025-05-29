import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { useEffect } from 'react';
import ScrollToTop from './utils/ScrollToTop';
import Header from './header-mainPage/HeaderReact';
import MainPage from './header-mainPage/MainPage';
import { mainData } from './site-manager-object/mainData';
import userLogin from './firebase/userLogin';

const App = () => {
  useEffect(() => {
    userLogin(document.querySelector('header') as HTMLElement);
  }, []);

  return (
    <Router>
      <ScrollToTop />
      <Header goHome={() => {}} />
      <main>
        <Routes>
          <Route path="/" element={<MainPage />} />
          {Object.entries(mainData).map(([key, { component: Component }]) => (
            <Route key={key} path={`/${key}`} element={<Component />} />
          ))}
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </main>
    </Router>
  );
};

export default App;
