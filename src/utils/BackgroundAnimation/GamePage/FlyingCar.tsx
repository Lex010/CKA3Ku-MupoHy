import React, { useEffect, useState } from 'react';
import './LoadingCar.css';

interface FlyingCarProps {
  from: 'left' | 'right';
}

const FlyingCar: React.FC<FlyingCarProps> = ({ from }) => {
  const [animationKey, setAnimationKey] = useState(0);
  const [top, setTop] = useState(0);

  useEffect(() => {
    setTop(Math.random() * 80);

    const timeout = setTimeout(() => {
      setAnimationKey((prev) => prev + 1); // перезапуск анимации
    }, 4000); // продолжительность вылета

    return () => clearTimeout(timeout);
  }, [animationKey]);

  return (
    <div
      key={animationKey}
      className={`flying-car ${from}`}
      style={{
        top: `${top}%`,
      }}
    >
      <div
        className="car"
        style={{
          transform: ` ${from === 'right' ? 'scaleX(-1)' : ''}`,
        }}
      >
        <div className="strike"></div>
        <div className="strike strike2"></div>
        <div className="strike strike3"></div>
        <div className="strike strike4"></div>
        <div className="strike strike5"></div>

        <div className="carDetail spoiler"></div>
        <div className="carDetail back"></div>
        <div className="carDetail center"></div>
        <div className="carDetail center1"></div>
        <div className="carDetail front"></div>
        <div className="carDetail wheel"></div>
        <div className="carDetail wheel wheel2"></div>
      </div>
    </div>
  );
};

export default FlyingCar;
