import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.min.css'
import App from './App.js';
import './styles/index.scss';

const a = React.createElement('div','','Hola mundo')
  
ReactDOM.render(
  <App />, 
  document.getElementById('root')
);

