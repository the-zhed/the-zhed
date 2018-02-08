export const REQUEST_BLOCK = 'blockMapList/REQUEST_BLOCK';
export const RECEIVE_BLOCK = 'blockMapList/RECEIVE_BLOCK';

function reqeustBlock(level) {
  return {
    type: REQUEST_BLOCK,
    level
  };
}

function receiveBlock(level, block) {
  return{
    type: RECEIVE_BLOCK,
    level,
    block
  };
}

export function fetchBlock(level) {
  return (dispatch) => {
    dispatch(reqeustBlock(level));
    return fetch('/data/test.json')
      .then(response => response.json())
      .then(block => dispatch(receiveBlock(level, block)));
  };
}
