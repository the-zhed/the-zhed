export const FETCH_PACK = 'FETCH_PACK';
export const RECIEVE_PACK = 'RECIEVE_PACK';
export const SELECT_PACK = 'SELECT_PACK';
export const SELECT_ZHED_BUTTON = 'SELECT_ZHED_BUTTON';
export const SELECT_ZHED_DOT = 'SELECT_ZHED_DOT';
export const RESTART_ZHED = 'RESTART_ZHED';
export const UNDO_ZHED = 'UNDO_ZHED';

export function fetchPack(level) {
  return {
    type: FETCH_PACK,
    level
  };
}

export function recievePack(pack) {
  return {
    type: RECIEVE_PACK,
    pack
  };
}

export function selectPack(level) {
  return {
    type: SELECT_PACK,
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
