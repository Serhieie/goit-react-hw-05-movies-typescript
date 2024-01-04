import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { App } from './components/App.tsx';
import './index.css';

const rootElement = document.getElementById('root');
if (rootElement) {
  ReactDOM.createRoot(rootElement).render(
    <React.StrictMode>
      <BrowserRouter basename="/goit-react-hw-05-movies">
        <App />
      </BrowserRouter>
    </React.StrictMode>
  );
} else {
  throw new Error('Root element with id "root" not found in the document.');
}
