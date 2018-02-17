import React from 'react';
import { Link } from 'react-router-dom';

const PackList = ({ packList }) => (
  <div className="container">
    <div className="row">
      {Object.keys(packList).map((key) => (
        <div className="col-3" key={packList[key].level}>
          {packList[key].enabled ? (
            <Link to={`/zhed/${packList[key].level}`} className="btn btn-dark btn-block mb-3">
              {packList[key].level}
            </Link>
          ) : (
            <button className="btn btn-dark btn-block mb-3" disabled>
              {packList[key].level}
            </button>
          )}
        </div>
      ))}
    </div>
  </div>
)

export default PackList;
