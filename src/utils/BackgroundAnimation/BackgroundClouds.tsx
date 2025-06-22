import React from 'react';
import './BackgroundClouds.css';

const BackgroundClouds: React.FC<{ children?: React.ReactNode }> = ({ children }) => {
  return (
    <div className="container">
      <div className="background-animation">
        {Array.from({ length: 10 }).map((_, i) => (
          <div
            key={i}
            className={`background-animation__cloud ${i % 2 === 0 ? 'background-animation__cloud--foreground' : 'background-animation__cloud--background'}`}
            style={{
              top: `${i * 9}%`,
              animationDelay: `${(-120 / 6.5) * (i + 1)}s`,
              animationDuration: i % 2 === 0 ? `${120 - i * 4}s` : `${120 * 1.25 - i * 4}s`,
              height: i % 2 === 0 ? `${5 + i * 1.5}%` : `${10 / 1.1 - i * 2.25}%`,
            }}
          />
        ))}
      </div>
      <div className="background-animation__content">{children}</div>
    </div>
  );
};

export default BackgroundClouds;
