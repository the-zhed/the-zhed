import React from 'react';
import { Link } from 'react-router-dom';

const PackList = ({ packList }) => (
  <div className="container">
    <div className="row">
      {packList.map((el) => (
        <div className="col-3" key={el.level}>
          {el.enabled ? (
            <Link to={`/zhed/${el.level}`} className="btn btn-dark btn-block mb-3">
              {el.level}
            </Link>
          ) : (
            <button className="btn btn-dark btn-block mb-3" disabled>
              {el.level}
            </button>
          )}
        </div>
      ))}
    </div>
  </div>
)

export default PackList;
