// PackZhed
export const INITIALIZED_PACK_ZHED = 'INITIALIZED_PACK_ZHED';
export const UNLOCK_PACK_ZHED = 'UNLOCK_PACK_ZHED';

function makePackZhed() {
  const result = {};
  for (let i = 1; i <= 100; i++) {
    result[i] = {
      level: i,
      enabled: i === 1 ? true : false,
    };
  }
  return result;
}

function initializePackZhed() {
  let pack = JSON.parse(window.localStorage.getItem('ZhedApp'));
  if (!pack) {
    pack = makePackZhed();
    window.localStorage.setItem('ZhedApp', JSON.stringify(pack));
  }
  return {
    type: INITIALIZED_PACK_ZHED,
    pack,
  };
}

function shouldInitializePackZhed(state) {
  const keys = Object.keys(state.packZhed);
  if (keys.length === 0) {
    return true;
  } else {
    return false;
  }
}

export function initializePackZhedIfNeeded() {
  return (dispatch, getState) => {
    if (shouldInitializePackZhed(getState())) {
      return dispatch(initializePackZhed());
    }
  }
}

// MapZhed
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
    dispatch(requestZhed(level));
    return fetch(`https://the-zhed.github.io/data-json/data/pack1/d.${level}.json`)
      .then(response => response.json())
      .then(zhed => dispatch(receiveZhed(level, zhed)));
  }
}

function shouldFetchZhed(state, level) {
  const pack = state.packZhed[level];
  if (!pack) {
    return true;
  } else if (pack.isFetching) {
    return false;
  } else {
    return pack.didInvalidate;
  }
}

export function fetchZhedIfNeeded(level) {
  return (dispatch, getState) => {
    if (shouldFetchZhed(getState(), level)) {
      return dispatch(fetchZhed(level));
    }
  };
}

// StageZhed
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
    type: RESTART_ZHED,
  };
}

export function undoZhed() {
  return {
    type: UNDO_ZHED,
  };
}
