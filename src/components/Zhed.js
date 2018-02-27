import React from 'react'
import { connect } from 'react-redux'
import ZhedBoard from './zhed/ZhedBoard'
import ControlPanel from './zhed/ControlPanel'
import {
  initailizeZhed,
  selectZhedButton,
  selectZhedDot,
  restartZhed,
  undoZhed,
} from '../actions/zhed'

class Zhed extends React.Component {
  componentDidMount() {
    const { initailizeZhed } = this.props
    const { level } = this.props.match.params
    initailizeZhed(level)
  }

  render() {
    const { currentLevel, blockMap, backgroundMap, indicatorMap, zhed } = this.props
    const { selectZhedButton, selectZhedDot, restartZhed, undoZhed } = this.props
    if (!zhed) {
      return <h2>loading...</h2>;
    }
    return (
      <div className="container">
        <div>
          <h2>{currentLevel}</h2>
        </div>
        <div>
          <ZhedBoard
            blockMap={blockMap}
            backgroundMap={backgroundMap}
            indicatorMap={indicatorMap}
            selectZhedButton={selectZhedButton}
            selectZhedDot={selectZhedDot}
          />
        </div>
        <div className="text-center">
          <ControlPanel
            restartZhed={restartZhed}
            undoZhed={undoZhed}
          />
        </div>
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

export default connect(
  mapStateToProps,
  {
    initailizeZhed: initailizeZhed,
    selectZhedButton: selectZhedButton,
    selectZhedDot: selectZhedDot,
    restartZhed: restartZhed,
    undoZhed: undoZhed,
  }
)(Zhed)
