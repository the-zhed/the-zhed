import { combineReducers } from 'redux';
import currentPack from './currentPack';
import packList from './packList';
import currentLevel from './currentLevel';
import blockMapList from './blockMapList';
import zhedStatus from './zhedStatus';
import backgroundMap from './backgroundMap';
import blockMap from './blockMap';
import indicatorMap from './indicatorMap';
import indicatorList from './indicatorList';
import blockMapHistory from './blockMapHistory';

const root = combineReducers({
  currentPack,
  packList,
  currentLevel,
  blockMapList,
  zhedStatus,
  backgroundMap,
  blockMap,
  indicatorMap,
  indicatorList,
  blockMapHistory,
});

export default root;
