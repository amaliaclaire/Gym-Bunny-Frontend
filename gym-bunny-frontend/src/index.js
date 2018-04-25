import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css';
import App from './App';
import { BrowserRouter, Route, Link } from 'react-router-dom'

// import { Button } from 'reactstrap';


// import 'bootstrap/dist/css/bootstrap.css';
// import 'bootstrap/dist/css/bootstrap-theme.css';
// import 'font-awesome/css/font-awesome.css';

ReactDOM.render(
  <BrowserRouter>
   <App />
  </BrowserRouter>
   , document.getElementById('root'));
