import {
  INITIALIZE_BLOCK_MAP,
  UNFOLD_BLOCK_MAP,
  SUCCESS_BLOCK_MAP,
  FAILURE_BLOCK_MAP,
  RESTART_BLOCK_MAP,
  UNDO_BLOCK_MAP,
} from '../constants/ActionTypes'
import * as PackListActions from './packList'

export function initializeBlockMap(map) {
  return {
    type: INITIALIZE_BLOCK_MAP,
    map
  }
}

function unfoldBlockMap(map) {
  return {
    type: UNFOLD_BLOCK_MAP,
    map
  }
}

function restartBlockMap(map) {
  return {
    type: RESTART_BLOCK_MAP,
    map
  }
}

export function restart() {
  return (dispatch, getState) => {
    const { currentLevel, blockMapList } = getState()
    const map = copyDeepMap(blockMapList[currentLevel])
    dispatch(restartBlockMap(map))
  }
}

function undoBlockMap(map) {
  return {
    type: UNDO_BLOCK_MAP,
    map
  }
}

export function undo() {
  return (dispatch, getState) => {
    const { blockMapHistory } = getState()
    if (blockMapHistory.length > 0) {
      const map = copyDeepMap(blockMapHistory[blockMapHistory.length - 1])
      dispatch(undoBlockMap(map))
    }
  }
}

function copyDeepMap(arr) {
  return arr.map(row => {
    return row.map(col => col)
  })
}

function makeBlockMap(blockMap, indicatorList, rowIdx, colIdx) {
  const map = copyDeepMap(blockMap)
  for (let direction in indicatorList) {
    const sameBlcok = indicatorList[direction].find(block =>
      block.row === rowIdx && block.col === colIdx)
    if (sameBlcok) {
      indicatorList[direction].forEach((block) => {
        map[block.row][block.col] = map[block.row][block.col] === 'Z' ? 'S' : 'B'
      })
    }
  }
  return map
}

export function unfold({ rowIdx, colIdx }) {
  return (dispatch, getState) => {
    const { blockMap, indicatorList } = getState()
    const map = makeBlockMap(blockMap, indicatorList, rowIdx, colIdx)
    dispatch(unfoldBlockMap(map))
  }
}


function fetchSuccess() {
  return {
    type: SUCCESS_BLOCK_MAP
  }
}

function fetchFailure() {
  return {
    type: FAILURE_BLOCK_MAP
  }
}

function isSuccess(map) {
  return map.some((row) => row.includes('S'))
}

function isFinish(map) {
  return map.every(row => row.every(col => !(col >= '1' && col <= '9')))
}

export function checkSuccess() {
  return (dispatch, getState) => {
    const { blockMap, currentLevel } = getState()
    if (isSuccess(blockMap)) {
      dispatch(fetchSuccess())
      dispatch(PackListActions.enabledLevelPack(parseInt(currentLevel, 10)))
    } else if (isFinish(blockMap)){
      dispatch(fetchFailure())
    }
    return;
  }
}
