import { useEffect, useState } from 'react';
import Tooltip from '../../utils/Tooltip';
import StartPageToggleButton from './StartPageToggleButton';
import StartPageInfo from './StartPageInfo';
import './css/StartPageMenu.css';

interface StartPageMenuProps {
  onCloseAll?: () => void;
}

export default function StartPageMenu({ onCloseAll }: StartPageMenuProps) {
  const [startPage, setStartPage] = useState<string | null>(null);

  useEffect(() => {
    const saved = localStorage.getItem('startPage');
    setStartPage(saved ?? null);
  }, []);

  return (
    <div className="startpage-modal__content">
      <h2>
        Меню стартовой страницы
        <br />
        <Tooltip text="Приложение открывается с стартовой страницы">
          <span className="page-tooltipTriger">?</span>
        </Tooltip>
      </h2>

      <StartPageInfo startPage={startPage} onChange={setStartPage} onLinkClick={onCloseAll} />
      <StartPageToggleButton startPage={startPage} onChange={setStartPage} />
    </div>
  );
}
