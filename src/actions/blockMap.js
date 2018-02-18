import {
  INITIALIZE_BLOCK_MAP,
  UNFOLD_BLOCK_MAP,
  RESTART_BLOCK_MAP,
  UNDO_BLOCK_MAP,
} from '../constants/ActionTypes'

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
    const map = copyDeepMap(blockMapHistory[blockMapHistory.length - 1])
    dispatch(undoBlockMap(map))
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
        map[block.row][block.col] = 'B'
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
