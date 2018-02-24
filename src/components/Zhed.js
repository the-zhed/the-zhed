import React from 'react'
import { connect } from 'react-redux'
// import ZhedBoard from './zhed/ZhedBoard'
import BackgroundMap from './zhed/BackgroundMap'
import BlockMap from './zhed/BlockMap'
import IndicatorMap from './zhed/IndicatorMap'
import {
  initailizeZhed,
  selectZhedButton,
  selectZhedDot,
  restartZhed,
  undoZhed,
} from '../actions/zhed'
import {
  COMPLETE_INITIALIZE_ZHED,
} from '../constants/ActionTypes'

class Zhed extends React.Component {
  componentDidMount() {
    const { initailizeZhed } = this.props
    const { level } = this.props.match.params
    initailizeZhed(level)
  }

  render() {
    const { currentLevel, blockMap, backgroundMap, indicatorMap, zhed } = this.props
    const { selectZhedButton, selectZhedDot, restartZhed, undoZhed } = this.props
    return (
      <div className="container">
        {zhed ? (
          <div className="position-relative">
            <div className="position-absolute">
              <BackgroundMap backgrounds={backgroundMap} />
            </div>
            <div className="position-absolute">
              <IndicatorMap
                indicators={indicatorMap}
                selectDot={selectZhedDot}
              />
            </div>
            <div className="position-absolute">
              <BlockMap
                blocks={blockMap}
                selectButton={selectZhedButton}
              />
            </div>
          </div>
        ) : (
          <h2>loading...</h2>
        )}
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  const { currentLevel, backgroundMap, blockMap, indicatorMap, zhed } = state
  return {
    currentLevel,
    blockMap,
    backgroundMap,
    indicatorMap,
    zhed,
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    initailizeZhed: (level) => {
      dispatch(initailizeZhed(level))
    },
    selectZhedButton: ({ rowIdx, colIdx }) => {
      dispatch(selectZhedButton({ rowIdx, colIdx }))
    },
    selectZhedDot: ({ rowIdx, colIdx }) => {
      dispatch(selectZhedDot({ rowIdx, colIdx }))
    },
    restartZhed: () => {
      dispatch(restartZhed())
    },
    undoZhed: () => {
      dispatch(undoZhed())
    },
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Zhed)
