import { getReadablePageTitle } from '../../utils/forHeader/getReadablePageTitle';
import { START_PAGE_UNSET_LABEL } from './startPageConstants';
import './css/Info.css';

interface StartPageInfoProps {
  startPage: string | null;
  onChange?: (newPage: string | null) => void;
  onLinkClick?: () => void;
}

export default function StartPageInfo({ startPage, onLinkClick }: StartPageInfoProps) {
  return (
    <div className="pages-bookmarks__li startpage-modal__info">
      <span className="startpage-modal__label">Сейчас стартовая страница:</span>
      {startPage ? (
        <a
          className="pages-bookmarks__a startpage-modal__link"
          href={startPage}
          rel="noopener noreferrer"
          onClick={() => onLinkClick?.()}
        >
          {getReadablePageTitle(startPage)}
        </a>
      ) : (
        <span className="startpage-modal__unset">{START_PAGE_UNSET_LABEL}</span>
      )}
    </div>
  );
}
