import {
  INITIALIZE_BLOCK_MAP,
  UNFOLD_BLOCK_MAP,
  RESTART_BLOCK_MAP,
  UNDO_BLOCK_MAP
} from '../actions/blockMap';

function blockMap(
  state = [],
  action
) {
  switch (action.type) {
    case INITIALIZE_BLOCK_MAP:
    case UNFOLD_BLOCK_MAP:
    case RESTART_BLOCK_MAP:
    case UNDO_BLOCK_MAP:
      return action.map;
    default:
      return state;
  }
}

export default blockMap;
