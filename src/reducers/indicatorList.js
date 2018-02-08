import {
  RESET_INDICATOR_LIST,
  STACK_INDICATOR_LIST
} from '../actions/indicatorList';

function indicatorList(
  state = {
    'up': [],
    'right': [],
    'down': [],
    'left': []
  },
  action
) {
  switch (action.type) {
    case RESET_INDICATOR_LIST:
      return action.list;
    case STACK_INDICATOR_LIST:
      return action.list;
    default:
      return state;
  }
}

export default indicatorList;
