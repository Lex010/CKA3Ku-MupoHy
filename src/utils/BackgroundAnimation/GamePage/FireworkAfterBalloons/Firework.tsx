import React, { useEffect } from 'react';
import './Firework.css';

interface FireworkProps {
  left: string;
  bottom: string;
  onComplete?: () => void;
}

const Firework: React.FC<FireworkProps> = ({ left, bottom, onComplete }) => {
  useEffect(() => {
    const timeout = setTimeout(() => {
      if (onComplete) onComplete();
    }, 800); // Длительность анимации

    return () => clearTimeout(timeout);
  }, [onComplete]);

  return (
    <div className="ballon-firework" style={{ left, bottom }}>
      <div className="ballon-firework__container">
        <div className="ballon-firework__before"></div>
        <div className="ballon-firework__after"></div>
      </div>
    </div>
  );
};

export default Firework;
