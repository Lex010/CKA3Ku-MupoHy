import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { mainData } from '../site-manager-object/mainData';
import BackgroundClouds from '../utils/BackgroundAnimation/BackgroundClouds';
import ToggleSwitch from '../utils/ToggleSwitch/ToggleSwitch';
import './GamesPage.css';
import BalloonSettingsIcon from './GamePageBaloonsSettings/BalloonSettingsIcon';
import BalloonSettingsPanel from './GamePageBaloonsSettings/BalloonSettingsPanel';
import { BalloonsSettingsProvider } from './GamePageBaloonsSettings/settingsContext';

const idGamesPage = {
  title: `${String.fromCodePoint(0x1f3af)} ИГРЫ`,
  id: 'gamesPage',
};

const GamesPage: React.FC = () => {
  const [isListVisible, setIsListVisible] = useState(true);
  const [isSettingsBalloonsVisible, setIsSettingsBalloonsVisible] = useState(false);
  const gamesItems = Object.values(mainData).filter((item) => item.type === 'game');
  const navigate = useNavigate();

  useEffect(() => {
    if (isListVisible && isSettingsBalloonsVisible) {
      setIsSettingsBalloonsVisible(false);
    }
  }, [isListVisible, isSettingsBalloonsVisible]);

  const handleSettingsBalloonsClick = () => {
    setIsSettingsBalloonsVisible((prev) => !prev);
    setIsListVisible(false);
  };

  return (
    <BalloonsSettingsProvider>
      <BackgroundClouds withGamePageAnimation>
        <div>
          <div className="game-page__title-container page-title">
            <h1 className="page-title game-page__page-title">{idGamesPage.title}</h1>
            <div className="game-page__controls-container">
              <div className="game-page__toggle-switch">
                <ToggleSwitch
                  checked={!isListVisible}
                  onChange={() => setIsListVisible((prev) => !prev)}
                  label="Скрыть Игры"
                />
              </div>
              <button
                className="game-page__baloon-setting-btn"
                title="Настройки шариков"
                onClick={handleSettingsBalloonsClick}
              >
                <BalloonSettingsIcon size={16} />
              </button>
            </div>
            {isSettingsBalloonsVisible && <BalloonSettingsPanel onClose={() => setIsSettingsBalloonsVisible(false)} />}
          </div>

          <div className="page-list" style={{ display: isListVisible ? 'flex' : 'none' }}>
            {gamesItems.map((item) => (
              <div key={item.id} className="page-unit" onClick={() => navigate(`/${item.id}`)}>
                {item.title}
              </div>
            ))}
          </div>
        </div>
      </BackgroundClouds>
    </BalloonsSettingsProvider>
  );
};

export { GamesPage, idGamesPage };
