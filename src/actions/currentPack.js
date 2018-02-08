export const SELECT_CURRENT_PACK = 'currentPack/SELECT_CURRENT_PACK';

export function selectCurrentPack(pack) {
  return {
    type: SELECT_CURRENT_PACK,
    pack
  };
}
