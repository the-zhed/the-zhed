import {
  RESET_INDICATOR_MAP,
  UNFOLD_INDICATOR_MAP,
} from '../contants/ActionTypes';

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
