import React from 'react';
import './BalloonSettingsPanel.css';

interface BalloonSettingsPanelProps {
  onClose: () => void;
}

const BalloonSettingsPanel: React.FC<BalloonSettingsPanelProps> = ({ onClose }) => {
  return (
    <div className="balloons-settings-panel">
      <div>
        <hr className="balloons-settings-panel__title-line" />
        <h3 className="balloons-settings-panel__title">Настройки шариков</h3>
      </div>
      {/* элементы настроек тут */}
      <div className="balloons-settings-panel__elem">символы, порядок(случайно или в ряд)</div>
      <button onClick={onClose} className="balloons-settings-panel__close-btn nav-btn">
        Х
      </button>
    </div>
  );
};

export default BalloonSettingsPanel;
