export const RESET_INDICATOR_MAP = 'indicatorMap/RESET_INDICATOR_MAP';
export const UNFOLD_INDICATOR_MAP = 'indicatorMap/UNFOLD_INDICATOR_MAP';

function resetIndicatorMap(map) {
  return {
    type: RESET_INDICATOR_MAP,
    map
  };
}

function unfoldIndicatorMap(map) {
  return {
    type: UNFOLD_INDICATOR_MAP,
    map
  };
}

function nullMap(arr) {
  return arr.map(row => {
    return row.map(col => false);
  });
}

export function reset() {
  return (dispatch, getState) => {
    const map = nullMap(getState().blockMap);
    dispatch(resetIndicatorMap(map));
  }
}

function makeIndicatorMap(state, rowIdx, colIdx) {
  const map = nullMap(getState().blockMap);
  return map;
}

export function unfold(rowIdx, colIdx) {
  return (dispatch, getState) => {
    const map = makeIndicatorMap(getState().blockMap, rowIdx, colIdx);
    dispatch(unfoldIndicatorMap(map));
  }
}
