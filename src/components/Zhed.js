import React from 'react'
import PropTypes from 'prop-types'
import { withRouter } from 'react-router-dom'
import { connect } from 'react-redux'
import { selectZhed, fetchZhedIfNeeded } from '../actions'

class Zhed extends React.Component {
  componentDidMount() {
    const { dispatch, match } = this.props
    const { level } = match.params
    dispatch(selectZhed(level))
    dispatch(fetchZhedIfNeeded(level))
  }
  render() {
    return (
      <div>
        Zhed {this.props.match.params.level}
      </div>
    )
  }
}

function mapStateToProps(state) {
  const { selectedZhed } = state

  return {
    selectedZhed,
  }
}

export default withRouter(connect(mapStateToProps)(Zhed))
