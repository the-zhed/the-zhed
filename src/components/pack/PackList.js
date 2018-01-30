import React from 'react';
import { withRouter } from 'react-router-dom';

const PackList = ({ packZhed, initializePack, history }) => (
  <div className="container">
    <div className="row">
      {Object.keys(packZhed).map((item) => (
        <div className="col-3" key={packZhed[item].level}>
          <button
            className="btn btn-dark btn-block mb-3"
            onClick={() => history.push(`/zhed/${packZhed[item].level}`)}
            disabled={!packZhed[item].enabled}
          >
            {packZhed[item].level}
          </button>
        </div>
      ))}
    </div>
  </div>
)

export default withRouter(PackList);
