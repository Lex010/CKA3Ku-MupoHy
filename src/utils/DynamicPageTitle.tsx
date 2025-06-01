import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { mainData } from '../site-manager-object/mainData';

export const DynamicPageTitle = (defaultTitle = 'МИР') => {
  const location = useLocation();

  useEffect(() => {
    const path = location.pathname.replace(/^\/+/, '');
    if (!path) {
      document.title = defaultTitle;
    } else if (mainData[path]) {
      document.title = `${defaultTitle} | ${mainData[path].title}`;
    } else {
      document.title = defaultTitle;
    }
  }, [location.pathname, defaultTitle]);
};
