import { INITIALIZE_BG_MAP } from '../actions/backgroundMap';

function backgroundMap(
  state = [],
  action
) {
  switch (action.type) {
    case INITIALIZE_BG_MAP:
      return action.map;
    default:
      return state;
  }
}

export default backgroundMap;
