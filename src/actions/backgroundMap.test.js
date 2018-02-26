import configureMockStore from 'redux-mock-store'
import thunk from 'redux-thunk'
import * as actions from './backgroundMap'
import * as types from '../constants/ActionTypes'

const middlewares = [thunk]
const mockStore = configureMockStore(middlewares)

describe('BackgroundMapActions', () => {
  let map
  let expectedActions
  let store

  beforeEach(() => {
    map = [
      [1,2,3,4],
      [1,2,3,4],
      [1,2,3,4],
      [1,2,3,4],
    ]
    expectedActions = { type: types.INITIALIZE_BG_MAP, map }
    store = mockStore({
      blockMap: [
        ["0","0","1","2"],
        ["0","0","1","2"],
        ["0","Z","1","2"],
        ["0","0","1","2"],
      ],
      backgroundMap: []
    })
  })

  it('should create an action to initialize a backgroundMap', () => {
    expect(store.dispatch(actions.initailize()).map[0]).toHaveLength(4)
  })

  it('should create an action to initialize a backgroundMap', () => {
    expect(store.dispatch(actions.initailize()).map[0][0]).toBeGreaterThanOrEqual(1);
  })

  it('should create an action to initialize a backgroundMap', () => {
    expect(store.dispatch(actions.initailize()).map[0][0]).toBeLessThanOrEqual(4);
  })
})
