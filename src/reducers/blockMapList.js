import { 
  REQUEST_BLOCK,
  RECEIVE_BLOCK,
} from '../constants/ActionTypes'

function blockMapList(
  state = {},
  action
) {
  switch (action.type) {
    case REQUEST_BLOCK:
      return {
        ...state,
        [action.level]: []
      }
    case RECEIVE_BLOCK:
      return {
        ...state,
        [action.level]: action.block
      }
    default:
      return state
  }
}

export default blockMapList
