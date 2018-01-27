import {
  REQUEST_ZHED,
  RECEIVE_ZHED,
} from '../actions';
import { makePackMap } from '../util';

const initPackMap = makePackMap();

function zhed(
  state = {
    isPass: false,
    isFetching: false,
    map: [],
  },
  action
) {
  switch (action.type) {
    case REQUEST_ZHED:
      return {
        ...state,
        isPass: false,
        isFetching: true,
        map: [],
      };
    case RECEIVE_ZHED:
      return {
        ...state,
        isPass: false,
        isFetching: false,
        map: action.zhed.map,
      };
    default:
      return state;
  }
}

function packZhed(
  state = initPackMap,
  action
) {
  switch (action.type) {
    case REQUEST_ZHED:
    case RECEIVE_ZHED:
      return {
        ...state,
        [action.level]: zhed(state[action.level], action)
      };
    default:
      return state;
  }
}

export default packZhed;
