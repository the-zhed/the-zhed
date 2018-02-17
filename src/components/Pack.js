import React from 'react'
import { connect } from 'react-redux'
import Jumbotron from './pack/Jumbotron'
import PackList from './pack/PackList'
import {
  initialize,
  select
} from '../actions/packActions'

class Pack extends React.Component {
  componentDidMount() {
    const { dispatch } = this.props
    dispatch(initialize())
  }

  render() {
    const { packList } = this.props
    return (
      <div>
        <Jumbotron />
        <PackList
          packList={packList}
        />
      </div>
    );
  }
}

const mapStateToProps = ({ packList }) => {
  return {
    packList,
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    select: (pack) => {
      dispatch(select(pack))
    }
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Pack)
