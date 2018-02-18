import * as PackListActions from './packList'
import * as CurrentPackActions from './currentPack'

export function initializePack() {
  return (dispatch) => {
    dispatch(PackListActions.initailize())
  }
}

export function selectPack(pack) {
  return (dispatch) => {
    dispatch(CurrentPackActions.selectCurrentPack(pack))
  }
}
