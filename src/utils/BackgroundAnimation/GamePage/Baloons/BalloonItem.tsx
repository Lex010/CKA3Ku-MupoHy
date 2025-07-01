import React from 'react';
import { Balloon } from './balloonTypes';

interface Props {
  balloon: Balloon;
  onPop: (id: string) => void;
}

const BalloonItem: React.FC<Props> = ({ balloon, onPop }) => {
  const handleClick = () => {
    if (!balloon.isPopping) {
      onPop(balloon.id);
    }
  };

  return (
    <div
      key={balloon.id}
      id={`balloon-outer-${balloon.id}`}
      className={`game-page-animation__balloon-outer ${!balloon.isPopping ? 'game-page-animation__fly' : ''}`}
      style={{
        left: `${balloon.left}%`,
        animationDuration: `${balloon.duration}s`,
        animationDelay: `${balloon.delay}s`,
      }}
    >
      <div
        className={`game-page-animation__balloon-inner ${balloon.isPopping ? 'game-page-animation__pop' : ''}`}
        onClick={handleClick}
      >
        <div className="game-page-animation__balloon-shape" style={{ backgroundColor: balloon.color }}>
          <div className="game-page-animation__balloon-knot" style={{ borderBottomColor: balloon.color }} />
        </div>
      </div>
    </div>
  );
};

export default BalloonItem;
