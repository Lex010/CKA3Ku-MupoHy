// import React from 'react';
import { createRoot } from 'react-dom/client';
import './style.css';
import App from './App';
import { unregisterSWInDev, registerSWInProd } from './serviceWorker';

const root = createRoot(document.getElementById('root')!);
root.render(<App />);

unregisterSWInDev();
registerSWInProd();
