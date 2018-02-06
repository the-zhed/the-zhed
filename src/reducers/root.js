import { combineReducers } from 'redux';
import currentPack from './currentPack';
import currentLevel from './currentLevel';
import packList from './packList';
import blockMapList from './blockMapList';
import backgroundMap from './backgroundMap';
import blockMap from './blockMap';
import indicatorMap from './indicatorMap';
import indicatorList from './indicatorList';
import blockMapHistory from './blockMapHistory';

const root = combineReducers({
  currentPack,
  currentLevel,
  packList,
  blockMapList,
  backgroundMap,
  blockMap,
  indicatorMap,
  indicatorList,
  blockMapHistory
});

export default root;
