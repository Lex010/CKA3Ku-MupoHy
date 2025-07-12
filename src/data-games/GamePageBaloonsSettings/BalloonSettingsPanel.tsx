import React from 'react';
import './BalloonSettingsPanel.css';
import { SYMBOL_SETS } from './symbolSets';
import { useBalloonsSettings } from './settingsContext';

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
        <label>
          <input
            type="checkbox"
            name="sequential"
            checked={sequential}
            onChange={(e) => setSequential(e.target.checked)}
          />{' '}
          По порядку
        </label>
      </div>

      <div className="balloons-settings-panel__elem">
        <label>
          <input
            type="checkbox"
            name="showFirework"
            checked={showFirework}
            onChange={(e) => setShowFirework(e.target.checked)}
          />{' '}
          Конфетти
        </label>
      </div>

      <button onClick={onClose} className="balloons-settings-panel__close-btn nav-btn">
        Х
      </button>
    </div>
  );
};

export default BalloonSettingsPanel;
