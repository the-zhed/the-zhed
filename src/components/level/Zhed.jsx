import React from 'react';
import Cell from './Cell';

class Zhed extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      mapData: props.mapData,
      bgData: props.bgData,
    };

    this.selectCell = this.selectCell.bind(this);
  }

  selectCell({rowIdx, colIdx, cell}) {
    const preData = this.state.mapData.slice();

    let yUp = cell;
    let yDn = cell;
    let xUp = cell;
    let xDn = cell;
    
    for (let i = 1; i <= yUp; i++) {
      const yIdx = rowIdx - i;
      const xIdx = colIdx;
      if (preData[yIdx][xIdx]) {
        yUp += 1;
        continue;
      } else {
        preData[yIdx][xIdx] = '•';
      }
    }
    for (let i = 1; i <= yDn; i++) {
      const yIdx = rowIdx + i;
      const xIdx = colIdx;
      if (preData[yIdx][xIdx]) {
        yDn += 1;
        continue;
      } else {
        preData[yIdx][xIdx] = '•';
      }
    }
    for (let i = 1; i <= xUp; i++) {
      const yIdx = rowIdx;
      const xIdx = colIdx - i;
      if (preData[yIdx][xIdx]) {
        xUp += 1;
        continue;
      } else {
        preData[yIdx][xIdx] = '•';
      }
    }
    for (let i = 1; i <= xDn; i++) {
      const yIdx = rowIdx;
      const xIdx = colIdx + i;
      if (preData[yIdx][xIdx]) {
        xDn += 1;
        continue;
      } else {
        preData[yIdx][xIdx] = '•';
      }
    }
    this.setState({
      mapData: preData
    });
  }

  render() {
    return (
      <div className="Zhed">
        {this.state.mapData.map((row, rowIdx) => {
          return (
            <div className="d-flex justify-content-center" key={rowIdx}>
              {row.map((col, colIdx) => {
                return (
                  <Cell
                    key={colIdx}
                    data={col}
                    row={rowIdx}
                    col={colIdx}
                    bg={this.state.bgData[rowIdx][colIdx]}
                    handler={this.selectCell}
                  />
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
