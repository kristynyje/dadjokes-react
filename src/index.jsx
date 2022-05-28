import React from 'react';
import { createRoot } from 'react-dom/client';
import { App } from '/src/App/index.jsx';
import './style.css';

createRoot(document.querySelector('#app')).render(<App />);
