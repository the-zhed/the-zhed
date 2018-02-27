import { combineReducers } from 'redux';
import currentPack from './currentPack';
import packList, * as fromPackList from './packList';
import zhed from './zhed';
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
  zhed,
  currentLevel,
  blockMapList,
  backgroundMap,
  blockMap,
  indicatorMap,
  indicatorList,
  blockMapHistory,
});

export default root;

export const getLevelsPackList = (state, filter) =>
  fromPackList.getLevelsPackList(state.packList, filter)
