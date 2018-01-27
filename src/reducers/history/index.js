import { combineReducers } from 'redux';
import packZhed from 'packZhed';
import selectedZhed from 'selectedZhed';
import currentZhed from 'currentZhed';

const zhedApp = combineReducers({
  packZhed,
  selectedZhed,
  currentZhed,
});

export default zhedApp;
