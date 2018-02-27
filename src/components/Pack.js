import React from 'react'
import { connect } from 'react-redux'
import _ from 'underscore'
import Jumbotron from './pack/Jumbotron'
import PackList from './pack/PackList'
import {
  initializePack,
  selectPack,
} from '../actions/pack'

class Pack extends React.Component {
  constructor(props) {
    super(props)
    this.selectPack = this.selectPack.bind(this)
  }

  componentDidMount() {
    const { dispatch } = this.props
    dispatch(initializePack())
  }

  selectPack(pack) {
    const { dispatch } = this.props
    dispatch(selectPack(pack))
  }

  render() {
    const { currentPack, list } = this.props
    return (
      <div>
        <Jumbotron
          currentPack={currentPack}
          selectPack={this.selectPack}
        />
        <PackList
          packList={list}
        />
      </div>
    );
  }
}

const mapStateToProps = ({ currentPack, packList }) => ({
  currentPack,
  list: _.filter(packList, (el) => ( el.pack === currentPack ))
})

export default connect(mapStateToProps)(Pack)
