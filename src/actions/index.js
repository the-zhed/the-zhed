export const FETCH_PACKAGE = 'FETCH_PACKAGE';
export const RECIEVE_PACKAGE = 'RECIEVE_PACKAGE';
export const SELECT_PACKAGE = 'SELECT_PACKAGE';
export const SELECT_ZHED_BUTTON = 'SELECT_ZHED_BUTTON';
export const SELECT_ZHED_DOT = 'SELECT_ZHED_DOT';
export const RESTART_ZHED = 'RESTART_ZHED';
export const UNDO_ZHED = 'UNDO_ZHED';

export function fetchPackage(level) {
  return {
    type: FETCH_PACKAGE,
    level
  };
}

export function selectZhedButton(coordinate) {
  return {
    type: SELECT_ZHED_BUTTON,
    coordinate
  };
}

export function selectZhedDot(coordinate) {
  return {
    type: SELECT_ZHED_DOT,
    coordinate
  };
}

export function restartZhed() {
  return {
    type: RESTART_ZHED
  };
}

export function undoZhed() {
  return {
    type: UNDO_ZHED
  };
}
