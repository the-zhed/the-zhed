import React from 'react';
import { withRouter } from 'react-router-dom';

const PackList = ({ list, history }) => (
  <div className="container">
    <div className="row">
      {list.map((item) => (
        <div className="col-3" key={item.level}>
          <button
            onClick={() => history.push(`/zhed/${item.level}`)}
            className="btn btn-dark"
            disabled={!item.enabled}
          >
            {item.level}
          </button>
        </div>
      ))}
    </div>
  </div>
)

export default withRouter(PackList);
