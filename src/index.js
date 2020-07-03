import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App.js';

const a = React.createElement('div','','Hola mundo')
  
ReactDOM.render(
  <App />, 
  document.getElementById('root')
);

