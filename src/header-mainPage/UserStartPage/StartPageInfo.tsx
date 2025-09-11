import { useEffect, useState } from 'react';
// import './css/StartPageInfo.css';

interface StartPageInfoProps {
  onLinkClick?: () => void;
}

export default function StartPageInfo({ onLinkClick }: StartPageInfoProps) {
  const [startPage, setStartPage] = useState<string | null>(null);

  useEffect(() => {
    const saved = localStorage.getItem('startPage');
    setStartPage(saved ?? null);
  }, []);

  return (
    <div className="startpage-info">
      <strong>Текущая стартовая страница:</strong>
      {startPage ? (
        <a href={startPage} rel="noopener noreferrer" onClick={() => onLinkClick?.()}>
          {' '}
          {startPage}
        </a>
      ) : (
        <span>не назначена</span>
      )}
    </div>
  );
}
