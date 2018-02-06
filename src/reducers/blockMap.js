import {
  INITIALIZE_BLOCK_MAP,
  UNFOLD_BLOCK_MAP
} from '../actions';

function blockMap(
  state = [],
  action
) {
  switch (action.type) {
    case INITIALIZE_BLOCK_MAP:
      return action.map;
    case UNFOLD_BLOCK_MAP:
      return action.map;
    default:
      return state;
  }
}

export default blockMap;
