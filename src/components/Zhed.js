import React from 'react'
// import PropTypes from 'prop-types'
import { withRouter } from 'react-router-dom'
import { connect } from 'react-redux'
import { fetchZhedIfNeeded } from '../actions'

class Zhed extends React.Component {
  componentDidMount() {
    const { dispatch, match } = this.props
    dispatch(fetchZhedIfNeeded(match.params.level))
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
  const { packZhed, mapZhed, stateZhed } = state
  return {
    packZhed,
    mapZhed,
    stateZhed,
  }
}

export default withRouter(connect(mapStateToProps)(Zhed))
