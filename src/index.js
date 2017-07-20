import 'sanitize.css';
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { injectGlobal } from 'styled-components';
import store from './store/store';
import App from './components/App';

injectGlobal`
  @import url('https://fonts.googleapis.com/css?family=Nova+Mono');

  html, body {
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: black;
    font-family: 'Nova Mono', monospace;
    font-size: 11px;
    color: white;
  }
`;

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root'),
);
