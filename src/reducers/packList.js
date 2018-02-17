import {
  INITIALIZE_PACK_LIST,
  ENABLED_LEVEL_PACK,
} from '../constants/ActionTypes'

function packList(
  state = {},
  action
) {
  switch (action.type) {
    case INITIALIZE_PACK_LIST:
      return action.list
    case ENABLED_LEVEL_PACK:
      return {
        ...state,
        [action.level]: {
          ...state[action.level],
          enabled: true
        }
      }
    default:
      return state
  }
}

export default packList
