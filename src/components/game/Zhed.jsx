import React from 'react';
import Cell from './Cell';

class Zhed extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      defaultData: props.map,
      mapData: props.map,
    };
  }
  render() {
    return (
      <div className="container">
        {this.state.mapData.map((row, rowIdx) => {
          return (
            <div className="row no-gutters" key={rowIdx}>
              {row.map((col, colIdx) => {
                return (
                  <div className="col-sm" key={colIdx}>
                    <Cell data={col} />
                  </div>
                )
              })}
            </div>
          )
        })}
      </div>
    );  
  }
}

export default Zhed;
