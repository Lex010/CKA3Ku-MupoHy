import React, { useEffect, useRef } from 'react';
import './StarshineBackground.css';

interface StarshineBackgroundProps {
  count?: number;
}

const StarshineBackground: React.FC<StarshineBackgroundProps> = ({ count = 30 }) => {
  const containerRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    container.innerHTML = '';

    for (let i = 0; i < count; i += 1) {
      const shine = document.createElement('div');
      shine.className = 'background-animation__star';
      shine.style.top = `${Math.random() * 100}%`;
      shine.style.left = `${Math.random() * 100}%`;
      shine.style.animationDuration = `${2 + Math.random() * 4}s`;
      container.appendChild(shine);
    }
  }, [count]);

  return <div className="background-animation__stars-container" ref={containerRef}></div>;
};

export default StarshineBackground;
