import {
  INITIALIZE_PACK_LIST,
  ENABLED_LEVEL_PACK,
} from '../contants/ActionTypes';

function initializePackList(list) {
  return {
    type: INITIALIZE_PACK_LIST,
    list
  };
}

function makePackList() {
  const result = {};
  for (let i = 1; i <= 100; i++) {
    result[i] = {
      level: i.toString(),
      enabled: i === 1 ? true : false,
      package: parseInt((i / 20), 10) + 1,
    };
  }
  return result;
}

function getLocalstorage() {
  const appName = 'ZhedApp';
  let list = JSON.parse(window.localStorage.getItem(appName));
  if (!pack) {
    list = makePackList();
    window.localStorage.setItem(appName, JSON.stringify(pack));
  }
  return list;
}

export function initailize() {
  return (dispatch) => {
    const list = getLocalstorage();
    return dispatch(initializePackList(list))
  }
}

export function enabledLevelPack(level) {
  return {
    type: ENABLED_LEVEL_PACK,
    level
  };
}
