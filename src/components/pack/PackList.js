import React from 'react';

const PackList = ({ list }) => (
  <div className="container">
    <div className="row">
      {list.map((item) => (
        <div className="col-3">
          <p key={item.level}>{item.level}</p>
        </div>
      ))}
    </div>
  </div>
)

export default PackList;
