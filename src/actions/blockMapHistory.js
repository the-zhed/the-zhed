import {
  RESET_BLOCK_MAP_HISTORY,
  NEXT_BLOCK_MAP_HISTORY,
  UNDO_BLOCK_MAP_HISTORY,
} from '../contants/ActionTypes';


function resetBlockMapHistory(map) {
  return {
    type: RESET_BLOCK_MAP_HISTORY,
    map
  };
}

function nextBlockMapHistory(map) {
  return {
    type: RESET_BLOCK_MAP_HISTORY,
    map
  };
}

function undoBlockMapHistory(map) {
  return {
    type: UNDO_BLOCK_MAP_HISTORY,
    map
  };
}
