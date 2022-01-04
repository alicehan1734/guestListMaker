import React from 'react';
import ReactDOM from 'react-dom';
import './index.module.css';
import App from './App';
import AuthService from './service/auth_service'
import { BrowserRouter } from 'react-router-dom';

const authService = new AuthService;

ReactDOM.render(

  <React.StrictMode>
    <BrowserRouter>
      <App authService={authService} />
    </BrowserRouter>

  </React.StrictMode>,
  document.getElementById('root')
);

