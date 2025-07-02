import React from 'react';
import FlyingBooks from './StoryPage/FlyingBooks';
import GamePageAnimation from './GamePage/GamePageAnimation';
import StarshineBackground from './Stars/StarshineBackground';
import './BackgroundClouds.css';
import { useNightMode } from '../../header-mainPage/ThemeToggle/ThemeToggleContext';

const BackgroundClouds: React.FC<{
  children?: React.ReactNode;
  withFlyingBooks?: boolean;
  withGamePageAnimation?: boolean;
}> = ({ children, withFlyingBooks = false, withGamePageAnimation = false }) => {
  const { isDay } = useNightMode();

  return (
    <div className="background-animation__container">
      <div className={`background-animation ${!isDay ? 'background-animation-night' : ''}`}>
        {!isDay && <StarshineBackground count={25} />}
        {Array.from({ length: 10 }).map((_, i) => (
          <div
            key={i}
            className={`background-animation__cloud ${
              i % 2 === 0 ? 'background-animation__cloud--foreground' : 'background-animation__cloud--background'
            }`}
            style={{
              top: `${i * 9}%`,
              animationDelay: `${(-120 / 6.5) * (i + 1)}s`,
              animationDuration: i % 2 === 0 ? `${120 - i * 4}s` : `${120 * 1.25 - i * 4}s`,
              height: i % 2 === 0 ? `${5 + i * 1.5}%` : `${10 / 1.1 - i * 2.25}%`,
            }}
          />
        ))}
        {withFlyingBooks && <FlyingBooks />}
        {withGamePageAnimation && <GamePageAnimation />}
      </div>
      <div className="background-animation__content">{children}</div>
    </div>
  );
};

export default BackgroundClouds;
