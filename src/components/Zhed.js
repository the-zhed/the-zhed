import React from 'react'
import { withRouter } from 'react-router-dom'
import { connect } from 'react-redux'
import {
  fetchZhedIfNeeded,
  selectZhedButton,
  selectZhedDot,
  restartZhed,
  undoZhed,
} from '../actions'
import ZhedBoard from './zhed/ZhedBoard'

class Zhed extends React.Component {
  componentDidMount() {
    const { fetchZhed, match } = this.props
    fetchZhed(match.params.level)
  }

  render() {
    const { stageZhed, selectZhedButton, selectZhedDot } = this.props
    return (
      <ZhedBoard
        stageZhed={stageZhed}
        onSelectZhedButton={selectZhedButton}
        onSelectZhedDot={selectZhedDot}
      />
    )
  }
}

const mapStateToProps = (state) => {
  const { stageZhed } = state
  return {
    stageZhed,
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    fetchZhed: level => {
      dispatch(fetchZhedIfNeeded(level))
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

export default withRouter(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )(Zhed)
)
