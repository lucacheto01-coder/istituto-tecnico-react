import React from 'react';
import ReactDOM from 'react-dom/client';
import "./App.css";
import { BrowserRouter } from 'react-router-dom';
import App from "./App";

const element = 
 <BrowserRouter>
    <App />
 </BrowserRouter>   

let radice = document.getElementById('root');

if (radice) {
    const root = ReactDOM.createRoot(radice);
    root.render(element);
}