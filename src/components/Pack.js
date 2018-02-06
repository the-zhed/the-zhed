import React from 'react'
import { withRouter } from 'react-router-dom'
import { connect } from 'react-redux'
import Jumbotron from './pack/Jumbotron'
import PackList from './pack/PackList'

class Pack extends React.Component {
  render() {
    const { packZhed } = this.props
    return (
      <div>
        <Jumbotron />
        <PackList
          packZhed={packZhed}
        />
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  const { packZhed } = state
  return {
    packZhed,
  }
}

export default withRouter(connect(
  mapStateToProps
)(Pack))
