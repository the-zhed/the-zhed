import React from 'react'
import { connect } from 'react-redux'
import Jumbotron from './pack/Jumbotron'
import PackList from './pack/PackList'
import { getLevelsPackList } from '../reducers/root'
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
    this.props.initializePack()
  }

  selectPack(pack) {
    this.props.selectPack(pack)
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

const mapStateToProps = (state) => ({
  currentPack: state.currentPack,
  list: getLevelsPackList(state, state.currentPack)
})

export default connect(
  mapStateToProps,
  {
    initializePack: initializePack,
    selectPack: selectPack,
  }
)(Pack)
