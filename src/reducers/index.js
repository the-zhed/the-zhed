import { combineReducers } from 'redux';
import {
  FETCH_PACKAGE,
  RECIEVE_PACKAGE,
  SELECT_PACKAGE,
  SELECT_ZHED_BUTTON,
  SELECT_ZHED_DOT,
  RESTART_ZHED,
  UNDO_ZHED,
} from '../actions';

const initialState = {
  currentGame: null,
  package: {},
};

function zhed(state = [], action) {

}

function zhedApp(state = initialState, action) {
  switch (action.type) {
    // case SET_VISIBILITY_FILTER:
    //   return Object.assign({}, state, {
    //     visibilityFilter: action.filter
    //   });
    case SELECT_PACKAGE:
      return state;

    case SELECT_ZHED_BUTTON:
      return Object.assign({}, state, {
        todos: zhed(state.todos, action)
      });

    case SELECT_ZHED_DOT:
      return state;

    case RESTART_ZHED:
      return state;

    case UNDO_ZHED:
      return state;

    default:
      return state;
  }
}

export const zhedApp;
