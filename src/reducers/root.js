import { combineReducers } from 'redux';
import currentPack from './currentPack';
import packList from './packList';
import zhedStatus from './zhedStatus';
import currentLevel from './currentLevel';
import blockMapList from './blockMapList';
import backgroundMap from './backgroundMap';
import blockMap from './blockMap';
import indicatorMap from './indicatorMap';
import indicatorList from './indicatorList';
import blockMapHistory from './blockMapHistory';

const root = combineReducers({
  currentPack,
  packList,
  zhedStatus,
  currentLevel,
  blockMapList,
  backgroundMap,
  blockMap,
  indicatorMap,
  indicatorList,
  blockMapHistory,
});

export default root;
