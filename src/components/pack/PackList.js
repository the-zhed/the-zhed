import React from 'react';
import { Link } from 'react-router-dom';

const PackList = ({ list }) => (
  <div className="container">
    <div className="row">
      {list.map((item) => (
        <div className="col-3" key={item.level}>
          {item.enabled ? (
            <Link to={`/zhed/${item.level}`} className="btn btn-dark">
              {item.level}
            </Link>
          ) : (
            <button className="btn btn-dark" disabled>{item.level}</button>
          )}
        </div>
      ))}
    </div>
  </div>
)

export default PackList;
