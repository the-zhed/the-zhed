import React from 'react'
import { connect } from 'react-redux'
import { initializePackZhedIfNeeded } from '../actions'
import Jumbotron from './pack/Jumbotron'
import PackList from './pack/PackList'

class Pack extends React.Component {
  componentDidMount() {
    const { dispatch } = this.props
    dispatch(initializePackZhedIfNeeded())
  }

  render() {
    return (
      <div>
        <Jumbotron />
        <PackList
          packZhed={this.props.packZhed}
        />
      </div>
    );
  }
}

function mapStateToProps(state) {
  const { packZhed } = state
  return {
    packZhed,
  }
}

export default connect(
  mapStateToProps
)(Pack)
