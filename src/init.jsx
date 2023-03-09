import React from 'react';
import { Provider } from 'react-redux';
import App from './App.jsx';
import store from './slices/index.js';

export default () => (
  <Provider store={store}>
    <App />
  </Provider>
);
