import React from 'react';
import { useNavigate } from 'react-router-dom';
import './NotFoundPage.css';

const NotFoundPage: React.FC = () => {
  const navigate = useNavigate();

  return (
    <div className="not-found-page__cont">
      <h1 id="h1">404 — Страница не найдена</h1>
      <p className="not-found-page__p">Возможно, вы ошиблись в адресе или такой страницы не существует.</p>
      <button className="nav-btn" onClick={() => navigate('/')}>
        На главную
      </button>
    </div>
  );
};

export default NotFoundPage;
