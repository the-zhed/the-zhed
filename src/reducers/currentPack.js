import {
  SELECT_CURRENT_PACK,
} from '../constants/ActionTypes'

function currentPack(
  state = '0',
  action
) {
  switch (action.type) {
    case SELECT_CURRENT_PACK:
      return action.pack
    default:
      return state
  }
}

export default currentPack
