import {
  INITIALIZE_BLOCK_MAP,
  UNFOLD_BLOCK_MAP,
  RESTART_BLOCK_MAP,
  UNDO_BLOCK_MAP,
} from '../constants/ActionTypes';

export function initializeBlockMap(map) {
  return {
    type: INITIALIZE_BLOCK_MAP,
    map
  };
}

function unfoldBlockMap(map) {
  return {
    type: UNFOLD_BLOCK_MAP,
    map
  };
}

function restartBlockMap(map) {
  return {
    type: RESTART_BLOCK_MAP,
    map
  };
}

export function restart() {
  return (dispatch, getState) => {
    const { currentLevel, blockMapList } = getState()
    const map = copyDeepMap(blockMapList[currentLevel])
    dispatch(restartBlockMap(map))
  }
}

function undoBlockMap(map) {
  return {
    type: UNDO_BLOCK_MAP,
    map
  };
}

export function undo() {
  return (dispatch, getState) => {
    const { blockMapList } = getState()
    const map = copyDeepMap(blockMapList[blockMapList.length - 1])
    dispatch(undoBlockMap(map))
  }
}

function copyDeepMap(arr) {
  return arr.map(row => {
    return row.map(col => col);
  });
}

function drawBlockMap(state, rowIdx, colIdx) {
  const map = copyDeepMap(state.blockMap);
  for (let direction in state.indicatorList) {
    const sameBlcok = state.indicatorList[direction].find(block => 
      block.row === rowIdx && block.col === colIdx)
    if (sameBlcok) {
      state.indicatorList[direction].forEach((block) => {
        map[block.row][block.col] = 'B';
      });
    }
  };
  return map;
}

export function blockMap(rowIdx, colIdx) {
  return (dispatch, getState) => {
    const map = drawBlockMap(getState(), rowIdx, colIdx);
    dispatch(unfoldBlockMap(map))
  }
}

