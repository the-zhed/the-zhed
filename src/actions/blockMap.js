export const INITIALIZE_BLOCK_MAP = 'blockMap/INITIALIZE_BLOCK_MAP';
export const UNFOLD_BLOCK_MAP = 'blockMap/UNFOLD_BLOCK_MAP';

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

