import React from 'react';
import ZhedTile from './ZhedTile';

class ZhedPanel extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      backgroundMap: props.backgroundMap,
      zhedBlockMap: props.zhedBlockMap,
      indicatorMap: props.indicatorMap,
    };
  }
  handleClick(rowIdx, colIdx) {
    console.log(rowIdx, colIdx);
  }
  render() {
    return (
      <div>
        ZhedPanel
        {this.state.zhedBlockMap.map((row, rowIdx) => (
          <div className="d-flex justify-content-center" key={rowIdx}>
            {row.map((col, colIdx) => (
              <ZhedTile
                key={colIdx}
                onClick={() => this.handleClick(rowIdx, colIdx)}
                background={this.state.backgroundMap[rowIdx][colIdx]}
                zhedBlock={col}
                indicator={this.state.indicatorMap[rowIdx][colIdx]}
              />
            ))}
          </div>
        ))}
      </div>
    );
  }
}

export default ZhedPanel;
