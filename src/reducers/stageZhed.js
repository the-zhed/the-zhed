import {
  INITIALIZE_STAGE_ZHED,
  SELECT_ZHED_BUTTON,
  MAKED_ZHED_BLOCKS,
  SELECT_ZHED_DOT,
  RESTART_ZHED,
  UNDO_ZHED,
} from '../actions';

function stageZhed(
  state = {
    level: null,
    map: {},
  },
  action
) {
  switch (action.type) {
    case INITIALIZE_STAGE_ZHED:
      return {
        ...state,
        level: action.level,
        map: {
          backgroundMap: action.backgroundMap,
          zhedBlockMap: action.zhedBlockMap,
          indicatorMap: action.indicatorMap,
        },
      }
    case SELECT_ZHED_BUTTON:
      return {
        ...state,
        map: {
          ...state.map,
          indicatorMap: action.indicatorMap
        },
      }
    case MAKED_ZHED_BLOCKS:
      return {
        ...state,
        map: {
          ...state.map,
          blocks: action.blocks
        },
      }
    case SELECT_ZHED_DOT:
    case RESTART_ZHED:
    case UNDO_ZHED:
      return state;

    default:
      return state;
  }
}

export default stageZhed;
