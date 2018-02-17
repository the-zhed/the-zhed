import configureMockStore from 'redux-mock-store'
import thunk from 'redux-thunk'
import { initailize } from '../backgroundMap'
import { INITIALIZE_BG_MAP } from '../../constants/ActionTypes'
import fetchMock from 'fetch-mock'

const middlewares = [thunk]
const mockStore = configureMockStore(middlewares)

describe('backgroundMap Test', () => {
  afterEach(() => {
    fetchMock.reset()
    fetchMock.restore()
  })

  it('should create an action to make backgroundMap', () => {

    const map = [[1,2,3][1,2,3][1,2,3]]
    const expectedAction = {
      type: types.ADD_TODO,
      map
    }
    expect(initailize(map)).toEqual(expectedAction)

  })
})
