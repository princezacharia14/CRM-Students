import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import axios from 'axios';

// let headers = new fetch.Headers()
// const Headers = require("node-fetch").Headers;

// Headers('Access-Control-Allow-Origin: *');
// Headers('Access-Control-Allow-Methods: POST, GET, OPTIONS, PUT, DELETE');
// Headers('Access-Control-Allow-Headers: Origin, Content-Type, Accept, Authorization, X- Request-With');

// axios.defaults.baseURL = 'http://localhost:4111/';
// axios.defaults.headers.common['Authorization'] = 'Bearer ' + localStorage.getItem('token');

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
