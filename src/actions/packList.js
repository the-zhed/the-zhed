import {
  INITIALIZE_PACK_LIST,
  ENABLED_LEVEL_PACK,
} from '../constants/ActionTypes'

function initializePackList(list) {
  return {
    type: INITIALIZE_PACK_LIST,
    list
  }
}

function makePackList() {
  const result = {};
  for (let i = 0; i < 100; i++) {
    result[i + 1] = {
      level: (i + 1).toString(),
      enabled: i === 0 ? true : false,
      package: parseInt((i / 20), 10) + 1,
    }
  }
  return result
}

function getLocalstorage() {
  const appName = 'ZhedApp';
  let pack = JSON.parse(window.localStorage.getItem(appName));
  if (!pack) {
    pack = makePackList();
    window.localStorage.setItem(appName, JSON.stringify(pack));
  }
  return pack
}

export function initailize() {
  return (dispatch, getState) => {
    let { packList } = getState()
    if (Object.keys(packList).length === 0) {
      packList = getLocalstorage()
    }
    dispatch(initializePackList(packList))
  }
}

export function enabledLevelPack(level) {
  return {
    type: ENABLED_LEVEL_PACK,
    level
  }
}
