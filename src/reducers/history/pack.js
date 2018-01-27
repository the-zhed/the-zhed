import {
  REQUEST_PACK,
  RECEIVE_PACK,
  SELECT_PACK,
} from '../actions';

function selectedZhedLevel(state = 'zhed-1', action) {
  switch (action.type) {
    case SELECT_PACK:
      return action.level;
    default:
      return state;
  }
}

function pack(
  state = {
    isFetching: false,
    items: []
  },
  action
) {
  switch (action.type) {
    case SELECT_PACK:
      return {
        ...state,
        [action.level]: selectedZhedLevel(state[action.level], action),
      };
    case REQUEST_PACK:
      return {
        ...state,
        isFetching: true,
      };
    case RECEIVE_PACK:
      return {
        ...state,
        isFetching: false,
        items: action.pack,
        lastUpdated: action.receivedAt,
      };

    default:
      return state;
  }
}

export default pack;
