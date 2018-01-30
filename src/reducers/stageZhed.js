import {
  SELECT_ZHED_BUTTON,
  SELECT_ZHED_DOT,
  RESTART_ZHED,
  UNDO_ZHED,
} from '../actions';

function stageZhed(
  state = {
    level: 'not found',
    backgroundMap: [],
    zhedBlockMap: [],
    indicatorMap: [],
  },
  action
) {
  switch (action.type) {
    case SELECT_ZHED_BUTTON:
    case SELECT_ZHED_DOT:
    case RESTART_ZHED:
    case UNDO_ZHED:
      return state;

    default:
      return state;
  }
}

export default stageZhed;
