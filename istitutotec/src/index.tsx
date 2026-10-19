import React from 'react';
import ReactDOM from 'react-dom/client';
import "./App.css";
import { HashRouter } from 'react-router-dom';
import App from "./App";

const element =
  <HashRouter>
    <App />
  </HashRouter>;

let radice = document.getElementById('root');

if (radice) {
  const root = ReactDOM.createRoot(radice);
  root.render(element);
}
