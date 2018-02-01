import { createStore, applyMiddleware } from 'redux';
import thunkMiddleware from 'redux-thunk';
import zhedApp from '../reducers';

const store = createStore(
  zhedApp,
  applyMiddleware(thunkMiddleware),
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
);

export default store;
