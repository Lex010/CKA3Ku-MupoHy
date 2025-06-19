import React from 'react';
import './LoadingElement.css';

const LoadingElement: React.FC = () => {
  return (
    <div className="loading-element">
      <h1 className="loading-element__text">
        <span className="loading-element__core">ЗАГРУЗКА</span>
        <span className="loading-element__dot loading-element__dot--1">.</span>
        <span className="loading-element__dot loading-element__dot--2">.</span>
        <span className="loading-element__dot loading-element__dot--3">.</span>
      </h1>
    </div>
  );
};

export default LoadingElement;
