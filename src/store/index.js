import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension/logOnlyInProduction';
import thunkMiddleware from 'redux-thunk';
import logger from 'redux-logger';
import root from '../reducers/root';
import { loadState, saveState } from '../util/localStorage';

const persistedState = loadState();
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

store.subscribe(() => {
  saveState(store.getState());
});

export default store;
