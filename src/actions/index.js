export const REQUEST_ZHED = 'REQUEST_ZHED';
export const RECEIVE_ZHED = 'RECEIVE_ZHED';

function requestZhed(level) {
  return {
    type: REQUEST_ZHED,
    level,
  };
}

function receiveZhed(level, zhed) {
  return {
    type: RECEIVE_ZHED,
    level,
    zhed,
  };
}

function fetchZhed(level) {
  return dispatch => {
    dispatch(requestZhed(level))
    return fetch(`https://github.io/the-zhed/data-json/dist/${level}.json`)
      .then(response => response.json())
      .then(zhed => dispatch(receiveZhed(level, zhed)))
  }
}

function shouldFetchZhed(state, level) {
  const pack = state.packByLevel[level]
  if (!pack) {
    return true
  } else if (pack.isFetching) {
    return false
  } else {
    return pack.didInvalidate
  }
}

export function fetchZhedIfNeeded(level) {
  return (dispatch, getState) => {
    if (shouldFetchZhed(getState(), level)) {
      return dispatch(fetchZhed(level))
    }
  }
}

export const SELECT_ZHED = 'SELECT_ZHED';

export function selectZhed(level) {
  return {
    type: SELECT_ZHED,
    level
  };
}

export const SELECT_ZHED_BUTTON = 'SELECT_ZHED_BUTTON';
export const SELECT_ZHED_DOT = 'SELECT_ZHED_DOT';
export const RESTART_ZHED = 'RESTART_ZHED';
export const UNDO_ZHED = 'UNDO_ZHED';

export function selectZhedButton({ rowIdx, colIdx }) {
  return {
    type: SELECT_ZHED_BUTTON,
    rowIdx,
    colIdx,
  };
}

export function selectZhedDot({ rowIdx, colIdx }) {
  return {
    type: SELECT_ZHED_DOT,
    rowIdx,
    colIdx,
  };
}

export function restartZhed() {
  return {
    type: RESTART_ZHED
  };
}

export function undoZhed() {
  return {
    type: UNDO_ZHED
  };
}
