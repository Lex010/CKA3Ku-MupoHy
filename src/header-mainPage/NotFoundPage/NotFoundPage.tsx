import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './NotFoundPage.css';

const NotFoundPage: React.FC = () => {
  const navigate = useNavigate();
  const [canGoBack, setCanGoBack] = useState(false);

  useEffect(() => {
    // Проверяем, есть ли возможность вернуться назад
    // Проверяет всю историю и если она доступна только вперед то кнопка тоже работает
    setCanGoBack(window.history.length > 1);
  }, []);

  const handleBack = () => {
    if (canGoBack) {
      navigate(-1);
    }
  };

  return (
    <div className="not-found-page__cont">
      <h1 id="h1">404 — Страница не найдена</h1>

      <button className="nav-btn not-found-page__btn" onClick={() => navigate('/')}>
        ◉ На главную
      </button>

      <p className="not-found-page__p">Возможно, вы ошиблись в адресе или такой страницы не существует.</p>

      <button className="nav-btn not-found-page__btn-back" onClick={handleBack} disabled={!canGoBack}>
        ⇱ Назад
      </button>
    </div>
  );
};

export default NotFoundPage;
