import React from 'react'
import { connect } from 'react-redux'
import ZhedBoard from './zhed/ZhedBoard'
import {
  initailizeZhed,
  selectZhedButton,
  selectZhedDot,
  restartZhed,
  undoZhed,
} from '../actions/zhedStatus'
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
    const { currentLevel, blockMap, backgroundMap, indicatorMap, zhedStatus } = this.props
    const { selectZhedButton, selectZhedDot, restartZhed, undoZhed } = this.props
    return (
      <div className="container">
      { zhedStatus === COMPLETE_INITIALIZE_ZHED ? (
        <ZhedBoard
          currentLevel={currentLevel}
          blockMap={blockMap}
          backgroundMap={backgroundMap}
          indicatorMap={indicatorMap}
          onSelectZhedButton={selectZhedButton}
          onSelectZhedDot={selectZhedDot}
        />
      ) : (
        <h2>loading...</h2>
      )}
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  const { currentLevel, backgroundMap, blockMap, indicatorMap, zhedStatus } = state
  return {
    currentLevel,
    blockMap,
    backgroundMap,
    indicatorMap,
    zhedStatus,
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
