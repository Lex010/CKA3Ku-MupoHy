import { useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { getStartPageWithoutHash } from './getStartPage';

export function useStartPageRedirect() {
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    // Если уже есть нормальный хеш, то не перенаправляем
    if (location.hash && location.hash !== '#/') return;

    const savedStart = getStartPageWithoutHash();

    if (savedStart) {
      navigate(savedStart, { replace: true });
    } else {
      navigate('/', { replace: true });
    }
  }, []); // выполняется только один раз при монтировании
}
