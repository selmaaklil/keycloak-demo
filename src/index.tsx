import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';

import { initKeycloak } from './services/KeyCloak';
import { configure } from './services/requests';

const root_ = document.getElementById('root');
const root = ReactDOM.createRoot(root_!);
const renderApp = () => root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
initKeycloak(renderApp);
configure();

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals(console.log);
