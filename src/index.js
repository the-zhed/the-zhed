import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import './index.css';
import store from './store';
import Zhed from './container/Zhed';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(
  <Provider store={store}>
    <Zhed />
  </Provider>,
  document.getElementById('root')
);
registerServiceWorker();
