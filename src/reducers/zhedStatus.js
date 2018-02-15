import {
  COMPLETE_INITIALIZE_ZHED,
  COMPLETE_SELECT_ZHED_BUTTON,
  COMPLETE_SELECT_ZHED_DOT,
  COMPLETE_RESTART_ZHED,
  COMPLETE_UNDO_ZHED,
} from '../contants/ActionTypes';

function zhedStatus(
  state = '',
  actoin
) {
  switch (actoin.tpye) {
    case COMPLETE_INITIALIZE_ZHED:
    case COMPLETE_SELECT_ZHED_BUTTON:
    case COMPLETE_SELECT_ZHED_DOT:
    case COMPLETE_RESTART_ZHED:
    case COMPLETE_UNDO_ZHED:
      return action.status;
    default:
      return state;
  }
}

export default zhedStatus;
