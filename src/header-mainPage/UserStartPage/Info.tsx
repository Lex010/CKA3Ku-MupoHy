import { getReadablePageTitle } from '../../utils/forHeader/getReadablePageTitle';
import { START_PAGE_UNSET_LABEL } from './startPageConstants';
// import './css/StartPageInfo.css';

interface StartPageInfoProps {
  startPage: string | null;
  onChange?: (newPage: string | null) => void;
  onLinkClick?: () => void;
}

export default function StartPageInfo({ startPage, onLinkClick }: StartPageInfoProps) {
  return (
    <div className="startpage-modal__info">
      <strong>Текущая стартовая страница:</strong>
      {startPage ? (
        <a href={startPage} rel="noopener noreferrer" onClick={() => onLinkClick?.()}>
          {' '}
          {getReadablePageTitle(startPage)}
        </a>
      ) : (
        <span>{START_PAGE_UNSET_LABEL}</span>
      )}
    </div>
  );
}
