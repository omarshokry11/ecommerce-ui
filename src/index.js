import React from 'react';
import ReactDOM from 'react-dom';
import App from './App.js';

// global css
import "normalize.css";
import "@fortawesome/fontawesome-free/css/all.css";
import "bootstrap-v4-rtl/dist/css/bootstrap-rtl.min.css";
import "./Layout/components/style/Main.scss";


ReactDOM.render(
  <div>
    <App />
  </div>,
  document.querySelector('#root')
);
