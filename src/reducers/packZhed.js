import {
  INITIALIZE_PACK_ZHED,
  UNLOCK_PACK_ZHED,
} from '../actions';

function makePackZhed() {
  const result = {};
  for (let i = 1; i <= 100; i++) {
    result[i] = {
      level: i.toString(),
      enabled: i === 1 ? true : false,
    };
  }
  return result;
}

function packZhed(
  state = {},
  action
) {
  switch (action.type) {
    case INITIALIZE_PACK_ZHED:
      const newState = makePackZhed();
      return {
        ...state,
        ...newState,
      };
    case UNLOCK_PACK_ZHED:
      return {

      };
    default:
      return state;
  }
}

export default packZhed;
