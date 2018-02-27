import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension/logOnlyInProduction';
import thunkMiddleware from 'redux-thunk';
import logger from 'redux-logger';
import root from '../reducers/root';

const persistedState = {

};

const store = createStore(
  root,
  persistedState,
  composeWithDevTools(
    applyMiddleware(
      thunkMiddleware,
      logger,
    )
  )
);

export default store;
