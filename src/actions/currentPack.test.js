import * as actions from './currentPack'
import * as types from '../constants/ActionTypes'

describe('CurrentPackActions', () => {
  it('should create an action to select a currentPack', () => {
    const pack = 19;
    const expectedAction = {
      type: types.SELECT_CURRENT_PACK,
      pack
    }
    expect(actions.selectCurrentPack(19)).toEqual(expectedAction)
  })
})
