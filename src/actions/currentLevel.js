import { SELECT_CURRENT_LEVEL } from '../constants/ActionTypes';

export function selectCurrentLevel(level) {
  return {
    type: SELECT_CURRENT_LEVEL,
    level
  }
}
