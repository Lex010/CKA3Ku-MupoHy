import Tooltip from '../../utils/Tooltip';
import StartPageToggleButton from './StartPageToggleButton';
import StartPageInfo from './StartPageInfo';
import './css/StartPageMenu.css';

export default function StartPageMenu() {
  return (
    <div className="startpage-modal__content">
      <h2>
        Меню стартовой страницы
        <br />
        <Tooltip text="Приложение открывается с стартовой страницы">
          <span className="page-tooltipTriger">?</span>
        </Tooltip>
      </h2>

      <StartPageInfo />
      <StartPageToggleButton />
    </div>
  );
}
