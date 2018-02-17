import {
  RESET_BLOCK_MAP_HISTORY,
  NEXT_BLOCK_MAP_HISTORY,
  UNDO_BLOCK_MAP_HISTORY,
} from '../constants/ActionTypes';

export function resetBlockMapHistory() {
  return {
    type: RESET_BLOCK_MAP_HISTORY
  };
}

// function reset() {
//   return (dispatch, getState) => {
//     getState().blockMap
//   }
// }

function nextBlockMapHistory(map) {
  return {
    type: NEXT_BLOCK_MAP_HISTORY,
    map
  };
}

function copyDeepMap(arr) {
  return arr.map(row => {
    return row.map(col => col);
  });
}

export function next() {
  return (dispatch, getState) => {
    const map = copyDeepMap(getState.blockMap)
    dispatch(nextBlockMapHistory(map))
  }
}

export function undoBlockMapHistory(map) {
  return {
    type: UNDO_BLOCK_MAP_HISTORY,
  }
}
