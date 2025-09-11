import Tooltip from '../../utils/Tooltip';
import StartPageToggleButton from './StartPageToggleButton';
import StartPageInfo from './StartPageInfo';
import './css/StartPageMenu.css';

interface StartPageMenuProps {
  onCloseAll?: () => void;
}

export default function StartPageMenu({ onCloseAll }: StartPageMenuProps) {
  return (
    <div className="startpage-modal__content">
      <h2>
        Меню стартовой страницы
        <br />
        <Tooltip text="Приложение открывается с стартовой страницы">
          <span className="page-tooltipTriger">?</span>
        </Tooltip>
      </h2>

      <StartPageInfo onLinkClick={onCloseAll} />
      <StartPageToggleButton />
    </div>
  );
}
