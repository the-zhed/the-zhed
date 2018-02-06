import { SELECT_CURRENT_LEVEL } from '../actions';

function currentLevel(
  state = '',
  action
) {
  switch (action.type) {
    case SELECT_CURRENT_LEVEL:
      return action.level;
    default:
      return state;
  }
}

export default currentLevel;
