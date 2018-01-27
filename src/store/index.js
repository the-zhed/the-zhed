import { createStore } from 'redux';
import zhedApp from '../reducers';

const store = createStore(
  zhedApp,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

export default store;
