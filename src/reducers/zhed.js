import {
  COMPLETE_INITIALIZE_ZHED,
  COMPLETE_SELECT_ZHED_BUTTON,
  COMPLETE_SELECT_ZHED_DOT,
  COMPLETE_RESTART_ZHED,
  COMPLETE_UNDO_ZHED,
} from '../constants/ActionTypes'

function zhed(
  state = {},
  action
) {
  switch (action.type) {
    case COMPLETE_INITIALIZE_ZHED:
      return action.code
    case COMPLETE_SELECT_ZHED_BUTTON:
    case COMPLETE_SELECT_ZHED_DOT:
    case COMPLETE_RESTART_ZHED:
    case COMPLETE_UNDO_ZHED:
      return state
    default:
      return state
  }
}

export default zhed
