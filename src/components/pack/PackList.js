import React from 'react';
import { Link } from 'react-router-dom';

const PackList = ({ packZhed }) => (
  <div className="container">
    <div className="row">
      {Object.keys(packZhed).map((item) => (
        <div className="col-3" key={item.level}>
          {item.enabled ? (
            <Link to={`/zhed/${item.level}`} className="btn btn-dark btn-block mb-3">
              {item.level}
            </Link>
          ) : (
            <button className="btn btn-dark btn-block mb-3" disabled>
              {item.level}
            </button>
          )}
        </div>
      ))}
    </div>
  </div>
)

export default PackList;
