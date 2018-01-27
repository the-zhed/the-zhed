import {
  SELECT_ZHED_BUTTON,
  SELECT_ZHED_DOT,
  RESTART_ZHED,
  UNDO_ZHED,
} from '../actions';

import level10 from '../schema/level10';
import { randomMap, nullMap } from '../util';

level10.backgroundMap = randomMap(level10.map);
level10.zhedBlockMap = level10.map;
level10.indicatorMap = nullMap(level10.map);

function current(
  state = {
    backgroundMap: [],
    zhedBlockMap: [],
    indicatorMap: [],
  },
  action
) {
  switch (action.type) {
    case SELECT_ZHED_BUTTON:
      const indicatorMap = state.indicatorMap.slice();
      const { rowIdx, colIdx } = action.coordinate;
      const zhedBlock = parseInt(state.zhedBlockMap[rowIdx][colIdx], 10);
      const directions = [
        { y: 0, x: 0 },
        { y: 0, x: 0 },
        { y: 0, x: 0 },
        { y: 0, x: 0 },
      ];

      for (let i = 0; i < zhedBlock; i++) {
        for (let m = 0; m < directions.length; m++) {
          let direction = directions[m];
          do {
            if (m === 0) {
              direction.y -= 1;
              if (direction.y < 0) {
                direction.y = 0;
              }
            } else if (m === 1) {
              direction.x += 1;
            } else if (m === 2) {
              direction.y += 1;
            } else if (m === 3) {
              direction.x -= 1;
            }
            var block = state.zhedBlockMap[rowIdx + direction.y][colIdx + direction.x];
          } while (block !== '0');
          indicatorMap[rowIdx + direction.y][colIdx + direction.x] = true;
        }
      }
      return Object.assign({}, state, {
        indicatorMap
      });
    case SELECT_ZHED_DOT:
    case RESTART_ZHED:
    case UNDO_ZHED:
      return state;

    default:
      return state;
  }
}

export default current;
