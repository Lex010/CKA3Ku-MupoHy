import { useEffect, useState } from 'react';
import Tooltip from '../../utils/Tooltip';
import StartPageToggleButton from './ToggleButton';
import StartPageInfo from './Info';
import StartPageResetButton from './ResetButton';
import { START_PAGE_KEY } from '../../utils/forHeader/startPageUtils';
import './css/StartPageMenu.css';

interface StartPageMenuProps {
  onCloseAll?: () => void;
}

export default function StartPageMenu({ onCloseAll }: StartPageMenuProps) {
  const [startPage, setStartPage] = useState<string | null>(null);

  useEffect(() => {
    const saved = localStorage.getItem(START_PAGE_KEY);
    setStartPage(saved ?? null);
  }, []);

  return (
    <div className="startpage-modal__content">
      <h2 className="page-title startpage-modal__h2">
        Меню стартовой страницы
        <br />
        <Tooltip text="Стартовая - страница с которой будет открываться приложение">
          <span className="page-tooltipTriger">?</span>
        </Tooltip>
      </h2>

      <StartPageInfo startPage={startPage} onChange={setStartPage} onLinkClick={onCloseAll} />
      <StartPageToggleButton startPage={startPage} onChange={setStartPage} />
      <StartPageResetButton startPage={startPage} onChange={setStartPage} />
    </div>
  );
}
