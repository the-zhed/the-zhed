import { combineReducers } from 'redux';
import packZhed from './packZhed';
import selectedZhed from './selectedZhed';
import stagingZhed from './stagingZhed';

const zhedApp = combineReducers({
  packZhed,
  selectedZhed,
  stagingZhed,
});

export default zhedApp;
