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
  const result = []
  for (let i = 0; i < 100; i++) {
    result.push({
      level: (i + 1).toString(),
      enabled: i === 0 ? true : false,
      pack: parseInt((i / 20), 10) + 1,
    })
  }
  return result
}

export function initailize() {
  return (dispatch, getState) => {
    let { packList } = getState()
    if (Object.keys(packList).length === 0) {
      packList = makePackList()
      dispatch(initializePackList(packList))
    }
    return false;
  }
}

export function enabledLevelPack(level) {
  return {
    type: ENABLED_LEVEL_PACK,
    level
  }
}
