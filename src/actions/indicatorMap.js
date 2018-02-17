import {
  RESET_INDICATOR_MAP,
  UNFOLD_INDICATOR_MAP,
} from '../constants/ActionTypes';

function resetIndicatorMap(map) {
  return {
    type: RESET_INDICATOR_MAP,
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

function unfoldIndicatorMap(map) {
  return {
    type: UNFOLD_INDICATOR_MAP,
    map
  };
}

function makeIndicatorMap(list, map) {
  for (let el in list) {
    list[el].forEach(dot => {
      map[dot.row][dot.col] = dot.index
    })
  }
  return map
}

export function unfold() {
  return (dispatch, getState) => {
    const { indicatorList, indicatorMap } = getState()
    const map = makeIndicatorMap(indicatorList, nullMap(indicatorMap))
    dispatch(unfoldIndicatorMap(map));
  }
}
