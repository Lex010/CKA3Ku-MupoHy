import React from 'react';
import './BalloonSettingsPanel.css';
import { SYMBOL_SETS } from './symbolSets';
import { useBalloonsSettings } from './settingsContext';
import ToggleSwitch from '../../utils/ToggleSwitch/ToggleSwitch';

interface BalloonSettingsPanelProps {
  onClose: () => void;
}

const BalloonSettingsPanel: React.FC<BalloonSettingsPanelProps> = ({ onClose }) => {
  const { symbolsSet, sequential, showFirework, setSymbolsSet, setSequential, setShowFirework } = useBalloonsSettings();

  return (
    <div className="balloons-settings-panel">
      <h3 className="balloons-settings-panel__title">Настройки шариков</h3>

      <div className="balloons-settings-panel__elem">
        <label htmlFor="balloonsSymbolsSetSelect">Содержимое Шариков: </label>
        <select
          id="balloonsSymbolsSetSelect"
          value={symbolsSet.id}
          onChange={(e) => setSymbolsSet(SYMBOL_SETS.find((set) => set.id === e.target.value)!)}
        >
          {SYMBOL_SETS.map((set) => (
            <option key={set.id} value={set.id}>
              {set.name}
            </option>
          ))}
        </select>
      </div>

      <div className="balloons-settings-panel__elem">
        <ToggleSwitch checked={sequential} onChange={(e) => setSequential(e.target.checked)} label="По порядку" />
      </div>

      <div className="balloons-settings-panel__elem">
        <ToggleSwitch checked={showFirework} onChange={(e) => setShowFirework(e.target.checked)} label="Конфетти" />
      </div>

      <button onClick={onClose} className="balloons-settings-panel__close-btn nav-btn">
        Х
      </button>
    </div>
  );
};

export default BalloonSettingsPanel;
