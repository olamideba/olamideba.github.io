import React from 'react';
import './src/styles.css';
import ReactDOM from 'react-dom/client';
import App from './App';

// This checks the HTML for a div with id="root"
const rootElement = document.getElementById('root');

if (!rootElement) {
  throw new Error("Could not find root element to mount to. Make sure index.html has a <div id='root'></div>");
}

// React 18 uses createRoot instead of render
const root = ReactDOM.createRoot(rootElement);

// React.StrictMode helps catch bugs during development by double-invoking lifecycle methods
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);