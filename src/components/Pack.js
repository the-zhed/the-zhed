import React from 'react'
import { connect } from 'react-redux'

import Jumbotron from './pack/Jumbotron'
import PackList from './pack/PackList'

const Pack = ({ packZhed }) => (
  <div>
    <Jumbotron />
    <PackList list={packZhed} />
  </div>
)

function mapStateToProps(state) {
  const { packZhed } = state
  return {
    packZhed,
  }
}

export default connect(
  mapStateToProps
)(Pack)
