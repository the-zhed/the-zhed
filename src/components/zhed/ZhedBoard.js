import React from 'react';
import PropTypes from 'prop-types';
import FontAwesomeIcon from '@fortawesome/react-fontawesome';
import { faRedo, faReply } from '@fortawesome/fontawesome-free-solid';
import ZhedPanel from './ZhedPanel';

const ZhedBoard = ({ stageZhed, onSelectZhedButton, onSelectZhedDot, onRestartZhed, onUndoZhed }) => (
  <div className="card">
    <div className="card-header">
      ZhedBoard: {stageZhed.level}
    </div>
    <div className="card-body">
      {stageZhed.level ? (
        <ZhedPanel
          map={stageZhed.map}
          onSelectZhedButton={({ rowIdx, colIdx }) => onSelectZhedButton({ rowIdx, colIdx })}
          onSelectZhedDot={({ rowIdx, colIdx }) => onSelectZhedDot({ rowIdx, colIdx })}
        />
      ) : (
        <p>loading...</p>
      )}
    </div>
    <div className="card-footer text-muted">
      <button
        className="btn btn-outline-dark"
        onClick={() => onRestartZhed()}
      >
        <FontAwesomeIcon icon={faRedo} />
        <p className="mb-0">RESTART</p>
      </button>
      <button
        className="btn btn-outline-dark"
        onClick={() => onUndoZhed()}
      >
        <FontAwesomeIcon icon={faReply} />
        <p className="mb-0">UNDO</p>
      </button>
    </div>
  </div>
)

ZhedBoard.propTypes = {
  stageZhed: PropTypes.object,
  onSelectZhedButton: PropTypes.func,
  onSelectZhedDot: PropTypes.func,
  onRestartZhed: PropTypes.func,
  onUndoZhed: PropTypes.func,
};

export default ZhedBoard;
