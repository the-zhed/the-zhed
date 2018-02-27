import React from 'react'
import PropTypes from 'prop-types'
import FontAwesomeIcon from '@fortawesome/react-fontawesome'
import { faRedo, faReply } from '@fortawesome/fontawesome-free-solid'

// const ControlPanel = ({ restartZhed, undoZhed }) => (
class ControlPanel extends React.Component {
  shouldComponentUpdate(nextProps, nextState) {
    return this.props.restartZhed !== nextProps.restartZhed
  }

  render() {
    const { restartZhed, undoZhed } = this.props
    return (
      <div className="alert alert-info my-1" role="alert">
        <button
          className="btn btn-outline-dark"
          onClick={restartZhed}
        >
          <FontAwesomeIcon icon={faRedo} />
          <p className="mb-0">RESTART</p>
        </button>
        <button
          className="btn btn-outline-dark"
          onClick={undoZhed}
        >
          <FontAwesomeIcon icon={faReply} />
          <p className="mb-0">UNDO</p>
        </button>
      </div>
    )
  }
}


ControlPanel.propTypes = {
  restartZhed: PropTypes.func,
  undoZhed: PropTypes.func,
}

export default ControlPanel
