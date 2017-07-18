import 'sanitize.css';
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { injectGlobal } from 'styled-components';
import store from './store/store';
import App from './components/App';

injectGlobal`
  html, body {
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: black;
  }
`;

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root'),
);
