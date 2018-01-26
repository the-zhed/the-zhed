import React from 'react';
import './ZhedTile.css';

class ZhedTile extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      background: props.background,
      zhedBlock: props.zhedBlock,
      indicator: props.indicator,
    };
  }
  render() {
    return (
      <div className="Zhed-tile">
        {this.state.zhedBlock}
      </div>
    )
  }
}

export default ZhedTile;
