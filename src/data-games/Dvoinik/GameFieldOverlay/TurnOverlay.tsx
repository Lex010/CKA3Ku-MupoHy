import React, { useEffect } from 'react';
import '../css/TurnOverlay.css';

interface TurnOverlayProps {
  playerName: string;
  onClose: () => void;
  autoClose: boolean;
  setAutoClose: (value: boolean) => void;
}

const TurnOverlay: React.FC<TurnOverlayProps> = ({ playerName, onClose, autoClose, setAutoClose }) => {
  useEffect(() => {
    let timeout: NodeJS.Timeout;
    if (autoClose) {
      timeout = setTimeout(onClose, 1000);
    }
    return () => clearTimeout(timeout);
  }, [autoClose, onClose]);

  const handleBackgroundClick = (e: React.MouseEvent<HTMLDivElement>) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  return (
    <div className="turn-overlay--dvoiniki" onClick={handleBackgroundClick}>
      <div className="t-o-content--dvoiniki">
        <p>Ход игрока</p>
        <div className="t-o-content--dvoiniki__wrap">
          <div className="player-name-dvoiniki pn-dvoiniki--active">{playerName}</div>
        </div>
        <div className="tsLabel--dvoiniki-wrap">
          <label htmlFor="t-s__label--dvoiniki">Автозакрытие (1 сек)</label>
          <label className="close-label--dvoiniki">
            <input
              id="t-s__label--dvoiniki"
              type="checkbox"
              checked={autoClose}
              onChange={(e) => setAutoClose(e.target.checked)}
            />
            <span className="slider__close-label--dvoiniki" />
          </label>
        </div>
        <button onClick={onClose}>ОК</button>
      </div>
    </div>
  );
};

export default TurnOverlay;
