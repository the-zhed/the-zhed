export const SELECT_CURRENT_LEVEL = 'currentLevel/SELECT_CURRENT_LEVEL';

export function selectCurrentLevel(level) {
  return {
    type: SELECT_CURRENT_LEVEL,
    level
  };
}
