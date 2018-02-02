import {
  INITIALIZE_PACK_ZHED,
  UNLOCK_PACK_ZHED,
} from '../actions';

function packZhed(
  state = {},
  action
) {
  switch (action.type) {
    case INITIALIZE_PACK_ZHED:
      return {
        ...state,
        ...action.pack
      };
    case UNLOCK_PACK_ZHED:
      return {

      };
    default:
      return state;
  }
}

export default packZhed;
