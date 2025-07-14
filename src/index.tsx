// import React from 'react';
import { createRoot } from 'react-dom/client';
import './style.css';
import App from './App';

const root = createRoot(document.getElementById('root')!);
root.render(<App />);

if ('serviceWorker' in navigator) {
  window.addEventListener('load', () => {
    navigator.serviceWorker
      .register('/service-worker.js')
      .then((registration) => {
        console.log('Service Worker зарегистрирован:', registration);
      })
      .catch((error) => {
        console.log('Service Worker ошибка регистрации:', error);
      });
  });
}
