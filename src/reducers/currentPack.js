import { SELECT_CURRENT_PACK } from '../actions';

function currentPack(
  state = 1,
  action
) {
  switch (action.type) {
    case SELECT_CURRENT_PACK:
      return action.pack;
    default:
      return state;
  }
}

export default currentPack;
