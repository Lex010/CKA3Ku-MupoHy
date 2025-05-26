// import React from 'react';
import { createRoot } from 'react-dom/client';
import './style.css';
import App from './App';
import favIcon from './assets/favicon32x32.png';

export default favIcon; // Костыль для создания assets/favicon32x32.png при сборке

const root = createRoot(document.getElementById('root')!);
root.render(<App />);
