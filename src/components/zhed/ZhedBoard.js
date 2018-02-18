import React from 'react'
import PropTypes from 'prop-types'
import FontAwesomeIcon from '@fortawesome/react-fontawesome'
import { faRedo, faReply } from '@fortawesome/fontawesome-free-solid'
import ZhedPanel from './ZhedPanel'

const ZhedBoard = (
  {
    currentLevel,
    blockMap,
    backgroundMap,
    indicatorMap,
    selectZhedButton,
    selectZhedDot,
    restartZhed,
    undoZhed,
  }
) => (
  <div className="card">
    <div className="card-header">
      ZhedBoard: {currentLevel}
    </div>
    <div className="card-body">
      <ZhedPanel
        blockMap={blockMap}
        backgroundMap={backgroundMap}
        indicatorMap={indicatorMap}
        selectZhedButton={selectZhedButton}
        selectZhedDot={selectZhedDot}
      />
    </div>
    <div className="card-footer text-muted">
      <button
        className="btn btn-outline-dark"
        onClick={() => restartZhed()}
      >
        <FontAwesomeIcon icon={faRedo} />
        <p className="mb-0">RESTART</p>
      </button>
      <button
        className="btn btn-outline-dark"
        onClick={() => undoZhed()}
      >
        <FontAwesomeIcon icon={faReply} />
        <p className="mb-0">UNDO</p>
      </button>
    </div>
  </div>
)

ZhedBoard.propTypes = {
  currentLevel: PropTypes.string,
  blockMap: PropTypes.array,
  backgroundMap: PropTypes.array,
  indicatorMap: PropTypes.array,
  selectZhedButton: PropTypes.func,
  selectZhedDot: PropTypes.func,
  restartZhed: PropTypes.func,
  undoZhed: PropTypes.func,
}

export default ZhedBoard
