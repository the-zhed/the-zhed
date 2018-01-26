import React from 'react';
import FontAwesomeIcon from '@fortawesome/react-fontawesome';
import { faRedo, faReply } from '@fortawesome/fontawesome-free-solid';
import ZhedPanel from './ZhedPanel';

class ZhedBoard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      backgroundMap: props.backgroundMap,
      zhedBlockMap: props.zhedBlockMap,
      indicatorMap: props.indicatorMap,
    };
  }
  render() {
    return (
      <div className="card">
        <div className="card-header">
          ZhedBoard
        </div>
        <div className="card-body">
          <ZhedPanel {...this.state} />
        </div>
        <div className="card-footer text-muted">
          <button className="btn btn-outline-dark">
            <FontAwesomeIcon icon={faRedo} />
            <p className="mb-0">RESTART</p>
          </button>
          <button className="btn btn-outline-dark">
            <FontAwesomeIcon icon={faReply} />
            <p className="mb-0">UNDO</p>
          </button>
        </div>
      </div>
    );
  }
}

export default ZhedBoard;
