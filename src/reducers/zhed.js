import {
  COMPLETE_INITIALIZE_ZHED,
  COMPLETE_SELECT_ZHED_BUTTON,
  COMPLETE_SELECT_ZHED_DOT,
  COMPLETE_SUCCESS_ZHED,
  COMPLETE_FAILURE_ZHED,
  COMPLETE_RESTART_ZHED,
  COMPLETE_UNDO_ZHED,
} from '../constants/ActionTypes'

function zhed(
  state = '',
  action
) {
  switch (action.type) {
    case COMPLETE_INITIALIZE_ZHED:
    case COMPLETE_SELECT_ZHED_BUTTON:
    case COMPLETE_SELECT_ZHED_DOT:
    case COMPLETE_SUCCESS_ZHED:
    case COMPLETE_FAILURE_ZHED:
    case COMPLETE_RESTART_ZHED:
    case COMPLETE_UNDO_ZHED:
      return action.type
    default:
      return state
  }
}

export default zhed
