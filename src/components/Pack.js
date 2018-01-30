import React from 'react'
import { connect } from 'react-redux'
import { initializePackZhedIfNeeded } from '../actions'
import Jumbotron from './pack/Jumbotron'
import PackList from './pack/PackList'

class Pack extends React.Component {
  constructor(props) {
    super(props)
    // this.handleChange = this.handleChange.bind(this)
    // this.handleRefreshClick = this.handleRefreshClick.bind(this)
  }

  componentDidMount() {
    const { initializePack } = this.props
    initializePack()
  }

  render() {
    return (
      <div>
        <Jumbotron />
        <PackList
          packZhed={this.props.packZhed}
          initializePack={this.props.initializePack}
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
const mapDispatchToProps = dispatch => {
  return {
    initializePack: () => {
      dispatch(initializePackZhedIfNeeded())
    }
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Pack)
