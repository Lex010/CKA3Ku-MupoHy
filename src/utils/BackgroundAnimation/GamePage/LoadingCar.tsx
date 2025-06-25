import React from 'react';
import FlyingCar from './FlyingCar';

const LoadingCar: React.FC = () => {
  return (
    <div className="car-container">
      <FlyingCar from="left" />
      <FlyingCar from="right" />
    </div>
  );
};

export default LoadingCar;
