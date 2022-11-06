import React from 'react';
import ReactDOM from 'react-dom/client';
import 'bootstrap/scss/bootstrap.scss'
import reportWebVitals from './reportWebVitals';
import {BrowserRouter} from "react-router-dom";
import RouterRoot from "./RouterRoot";


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <RouterRoot />
  </BrowserRouter>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
