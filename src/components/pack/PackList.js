import React from 'react';
import { Link } from 'react-router-dom';

const PackList = ({ packZhed }) => (
  <div className="container">
    <div className="row">
      {Object.keys(packZhed).map((key) => (
        <div className="col-3" key={packZhed[key].level}>
          {packZhed[key].enabled ? (
            <Link to={`/zhed/${packZhed[key].level}`} className="btn btn-dark btn-block mb-3">
              {packZhed[key].level}
            </Link>
          ) : (
            <button className="btn btn-dark btn-block mb-3" disabled>
              {packZhed[key].level}
            </button>
          )}
        </div>
      ))}
    </div>
  </div>
)

export default PackList;
