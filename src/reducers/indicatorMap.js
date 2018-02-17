import {
  RESET_INDICATOR_MAP,
  UNFOLD_INDICATOR_MAP
} from '../constants/ActionTypes'

function indicatorMap(
  state = [],
  action
) {
  switch (action.type) {
    case RESET_INDICATOR_MAP:
    case UNFOLD_INDICATOR_MAP:
      return action.map
    default:
      return state
  }
}

export default indicatorMap
