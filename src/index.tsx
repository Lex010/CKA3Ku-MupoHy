// import React from 'react';
import { createRoot } from 'react-dom/client';
import './style.css';
import App from './App';
import favIcon from './assets/favicon32x32.png';

export default favIcon; // Костыль для создания assets/favicon32x32.png при сборке

const container = document.getElementById('root');

if (!container) {
  throw new Error('Не найден элемент #root в index.html');
}

const root = createRoot(container);
root.render(<App />);
