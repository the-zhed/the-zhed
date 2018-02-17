import {
  SELECT_CURRENT_LEVEL,
} from '../constants/ActionTypes'

function currentLevel(
  state = '0',
  action
) {
  switch (action.type) {
    case SELECT_CURRENT_LEVEL:
      return action.level
    default:
      return state
  }
}

export default currentLevel
