import { getLocalstorage } from '../util';

function packZhed(
  state = {...getLocalstorage()},
  action
) {
  switch (action.type) {
    default:
      return state;
  }
}

export default packZhed;
