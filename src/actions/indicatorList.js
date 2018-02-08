export const RESET_INDICATOR_LIST = 'indicatorList/RESET_INDICATOR_LIST';
export const STACK_INDICATOR_LIST = 'indicatorList/STACK_INDICATOR_LIST';

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


