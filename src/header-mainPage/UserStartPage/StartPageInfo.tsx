import { useEffect, useState } from 'react';
// import './css/StartPageInfo.css';

export default function StartPageInfo() {
  const [startPage, setStartPage] = useState<string | null>(null);

  useEffect(() => {
    const saved = localStorage.getItem('startPage');
    setStartPage(saved ?? null);
  }, []);

  return (
    <div className="startpage-info">
      <strong>Текущая стартовая страница:</strong>
      {startPage ? (
        <a href={startPage} rel="noopener noreferrer">
          {startPage}
        </a>
      ) : (
        <span>не назначена</span>
      )}
    </div>
  );
}
