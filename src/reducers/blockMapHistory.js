import {
  RESET_BLOCK_MAP_HISTORY,
  NEXT_BLOCK_MAP_HISTORY,
  UNDO_BLOCK_MAP_HISTORY
} from '../actions';

function blockMapHistory(
  state = [],
  action
) {
  switch (action.type) {
    case RESET_BLOCK_MAP_HISTORY:
      return [];
    case NEXT_BLOCK_MAP_HISTORY:
      return [
        ...state,
        action.map
      ];
    case UNDO_BLOCK_MAP_HISTORY:
      return [
        ...state.splice(0, state.length)
      ];
    default:
      break;
  }
}