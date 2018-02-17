import { INITIALIZE_BG_MAP } from '../constants/ActionTypes';

function initializeBackgroundMap(map) {
  return {
    type: INITIALIZE_BG_MAP,
    map
  };
}

function randomMap(arr) {
  return arr.map(row => {
    return row.map(col => Math.floor(Math.random() * (4)) + 1);
  })
}

export function initailize() {
  return (dispatch, getState) => {
    const map = randomMap(getState().blockMap);
    return dispatch(initializeBackgroundMap(map))
  }
}
