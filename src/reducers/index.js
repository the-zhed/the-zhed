import { combineReducers } from 'redux';
import packZhed from './packZhed';
import mapZhed from './mapZhed';
import stageZhed from './stageZhed';

const zhedApp = combineReducers({
  packZhed,
  mapZhed,
  stageZhed,
});

export default zhedApp;
