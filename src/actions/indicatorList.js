import {
  RESET_INDICATOR_LIST,
  STACK_INDICATOR_LIST,
} from '../contants/ActionTypes';

export function resetIndicatorList() {
  return {
    type: RESET_INDICATOR_LIST,
    list: {
      'up': [],
      'right': [],
      'down': [],
      'left': []
    }
  };
}

function stackIndicatorList(list) {
  return {
    type: STACK_INDICATOR_LIST,
    list
  };
}


