import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { mainData } from '../site-manager-object/mainData';

export const DynamicPageTitle = (defaultTitle = 'МИР') => {
  const location = useLocation();

  useEffect(() => {
    const path = location.pathname.replace(/^\/+/, ''); // убираем слеш
    if (!path) {
      document.title = defaultTitle;
    } else if (mainData[path]) {
      document.title = `${mainData[path].title} | ${defaultTitle}`;
    } else {
      document.title = defaultTitle;
    }
  }, [location.pathname, defaultTitle]);
};
