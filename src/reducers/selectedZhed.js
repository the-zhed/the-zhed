import {
  SELECT_ZHED,
} from '../actions';

function selectedZhed(
  state = 'zhed-1',
  action
) {
  switch (action.type) {
    case SELECT_ZHED:
      return action.level;
    default:
      return state;
  }
}

export default selectedZhed;
