import { SELECT_CURRENT_PACK } from '../contants/ActionTypes';

export function selectCurrentPack(pack) {
  return {
    type: SELECT_CURRENT_PACK,
    pack
  };
}
