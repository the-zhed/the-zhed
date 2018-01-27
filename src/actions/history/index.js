export const REQUEST_PACK = 'REQUEST_PACK';
export const RECEIVE_PACK = 'RECEIVE_PACK';
export const SELECT_PACK = 'SELECT_PACK';
export const SELECT_ZHED_BUTTON = 'SELECT_ZHED_BUTTON';
export const SELECT_ZHED_DOT = 'SELECT_ZHED_DOT';
export const RESTART_ZHED = 'RESTART_ZHED';
export const UNDO_ZHED = 'UNDO_ZHED';

function requestPack(level) {
  return {
    type: REQUEST_PACK,
    level
  };
}

function receivePack(level, json) {
  return {
    type: RECEIVE_PACK,
    level,
    pack: json.data.children,
    receivedAt: Date.now()
  };
}

function fetchPack(level) {
  return dispatch => {
    dispatch(requestPack(level))
    return fetch(`https://github.io/the-zhed/data-json/dist/${level}.json`)
      .then(response => response.json())
      .then(json => dispatch(receivePack(level, json)))
  }
}

function shouldFetchPack(state, level) {
  const pack = state.packByLevel[level]
  if (!pack) {
    return true
  } else if (pack.isFetching) {
    return false
  } else {
    return pack.didInvalidate
  }
}

export function fetchPackIfNeeded(level) {
  return (dispatch, getState) => {
    if (shouldFetchPack(getState(), level)) {
      return dispatch(fetchPack(level))
    }
  }
}

export function selectPack(level) {
  return {
    type: SELECT_PACK,
    level
  };
}

export function selectZhedButton(coordinate) {
  return {
    type: SELECT_ZHED_BUTTON,
    coordinate
  };
}

export function selectZhedDot(coordinate) {
  return {
    type: SELECT_ZHED_DOT,
    coordinate
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
