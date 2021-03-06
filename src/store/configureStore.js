import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension/logOnlyInProduction';
import thunkMiddleware from 'redux-thunk';
import _ from 'underscore';
import root from '../reducers/root';
import { loadState, saveState } from '../util/localStorage';

const configureStore = () => {
  const persistedState = loadState();
  const middleware = [thunkMiddleware];
  const store = createStore(
    root,
    persistedState,
    composeWithDevTools(
      applyMiddleware(...middleware)
    )
  );

  store.subscribe(_.throttle(() => {
    saveState({
      packList: store.getState().packList
    });
  }), 1000);

  return store;
};


export default configureStore;
