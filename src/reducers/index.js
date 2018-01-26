import { combineReducers } from 'redux';
import {
  FETCH_PACK,
  RECIEVE_PACK,
  SELECT_PACK,
  SELECT_ZHED_BUTTON,
  SELECT_ZHED_DOT,
  RESTART_ZHED,
  UNDO_ZHED,
} from '../actions';

import level10 from '../schema/level10';
import { randomMap, nullMap } from '../util';

level10.backgroundMap = randomMap(level10.map);
level10.zhedBlockMap = level10.map;
level10.indicatorMap = nullMap(level10.map);

function pack(state = [], action) {
  switch (action.type) {
    case FETCH_PACK:
    case RECIEVE_PACK:
    case SELECT_PACK:
      return state;

    default:
      return state;
  }
}

function current(state = level10, action) {
  switch (action.type) {
    case SELECT_ZHED_BUTTON:
      console.log(action.coordinate);
    case SELECT_ZHED_DOT:
    case RESTART_ZHED:
    case UNDO_ZHED:
      return state;

    default:
      return state;
  }
}

const zhedApp = combineReducers({
  pack,
  current
});

export default zhedApp;
