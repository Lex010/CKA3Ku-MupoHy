// import './css/StartPageInfo.css';

interface StartPageInfoProps {
  startPage: string | null;
  onChange?: (newPage: string | null) => void;
  onLinkClick?: () => void;
}

export default function StartPageInfo({ startPage, onLinkClick }: StartPageInfoProps) {
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
