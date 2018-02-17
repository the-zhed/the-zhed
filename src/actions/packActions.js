import * as PackListActions from './packList'
import * as CurrentPackActions from './currentPack'

export function initialize() {
  // return (dispatch) => {
  //   dispatch(PackListActions.initailize())
  // }
  console.log('inin');
  return PackListActions.initailize()
}

export function select(pack) {
  return (dispatch) => {
    dispatch(CurrentPackActions.selectCurrentPack(pack))
  }
}
