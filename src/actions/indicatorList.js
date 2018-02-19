import {
  RESET_INDICATOR_LIST,
  STACK_INDICATOR_LIST,
} from '../constants/ActionTypes'

export function resetIndicatorList() {
  return {
    type: RESET_INDICATOR_LIST,
    list: {
      'up': [],
      'right': [],
      'down': [],
      'left': [],
    }
  }
}

function stackIndicatorList(list) {
  return {
    type: STACK_INDICATOR_LIST,
    list,
  }
}

function makeIndicatorList(map, list, { rowIdx, colIdx }) {
  const indicatorList = { up: [], right: [], down: [], left: [] }
  
  if (list['up'][0] &&
      list['up'][0].row === rowIdx &&
      list['up'][0].col === colIdx) {
    return indicatorList
  }
  
  const blockNumber = parseInt(map[rowIdx][colIdx], 10)
  const directionList = [
    { x:  0 , y: -1, n: blockNumber, d: 'up'    },
    { x:  1 , y:  0, n: blockNumber, d: 'right' },
    { x:  0 , y:  1, n: blockNumber, d: 'down'  },
    { x: -1 , y:  0, n: blockNumber, d: 'left'  },
  ]
  directionList.forEach((direction) => {
    let index = 0
    let row = rowIdx
    let col = colIdx
    indicatorList[direction.d].push({ row, col, index })

    while (index < direction.n) {
      row += direction.y
      col += direction.x
      if (
        row >= 0
        && row < map.length
        && col >= 0
        && col < map[0].length
      ) {
        const zhedBlock = map[row][col]
        if (zhedBlock === '0' || zhedBlock === 'Z') {
          index += 1
          // newIndicatorMap[row][col] = index
          indicatorList[direction.d].push({ row, col, index })
        } else {
          continue
        }
      } else {
        break
      }
    }
  })
  // newIndicatorMap[rowIdx][colIdx] = 0
  return indicatorList
}

export function stack({ rowIdx, colIdx }) {
  return (dispatch, getState) => {
    const { blockMap, indicatorList } = getState()
    const list = makeIndicatorList(blockMap, indicatorList, { rowIdx, colIdx })
    dispatch(stackIndicatorList(list))
  }
}


