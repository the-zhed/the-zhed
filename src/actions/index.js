// PackZhed
export const INITIALIZE_PACK_ZHED = 'INITIALIZE_PACK_ZHED';
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

function getLocalstorage(appName) {
  let pack = JSON.parse(window.localStorage.getItem(appName));
  if (!pack) {
    pack = makePackZhed();
    window.localStorage.setItem(appName, JSON.stringify(pack));
  }
  return pack;
}

function initializePackZhed(pack) {
  return {
    type: INITIALIZE_PACK_ZHED,
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
      const pack = getLocalstorage('ZhedApp');
      return dispatch(initializePackZhed(pack));
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
  return (dispatch) => {
    dispatch(requestZhed(level));
    return fetch(`https://the-zhed.github.io/data-json/data/pack1/d.${level}.json`)
      .then(response => response.json())
      .then(zhed => dispatch(receiveZhed(level, zhed)))
      .then(action => dispatch(initializedStageZhed(level, action.zhed)))
  }
}

function shouldFetchZhed(state, level) {
  const pack = state.mapZhed[level];
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
export const INITIALIZE_STAGE_ZHED = 'INITIALIZE_STAGE_ZHED';
export const SELECT_ZHED_BUTTON = 'SELECT_ZHED_BUTTON';
export const SELECT_ZHED_DOT = 'SELECT_ZHED_DOT';
export const RESTART_ZHED = 'RESTART_ZHED';
export const UNDO_ZHED = 'UNDO_ZHED';

function randomMap(arr) {
  return arr.map(row => {
    return row.map(col => Math.floor(Math.random() * (4)) + 1);
  });
}

function nullMap(arr) {
  return arr.map(row => {
    return row.map(col => false);
  });
}

function initializedStageZhed(level, zhed) {
  return {
    type: INITIALIZE_STAGE_ZHED,
    level: level,
    backgroundMap: randomMap(zhed.map),
    zhedBlockMap: zhed.map,
    indicatorMap: nullMap(zhed.map),
  }
}

function selectedZhedButton(indicatorMap) {
  return {
    type: SELECT_ZHED_BUTTON,
    indicatorMap,
  };
}

function maekNewIndicatorMap(map, { rowIdx, colIdx }) {
  console.log(map);
  console.log({ rowIdx, colIdx });
}

export function selectZhedButton({ rowIdx, colIdx }) {
  return (dispatch, getState) => {
    const map = getState().stageZhed.map;
    const indicatorMap = maekNewIndicatorMap(map, { rowIdx, colIdx });
    dispatch(selectedZhedButton(indicatorMap));
  }
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
