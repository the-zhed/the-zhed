import React from 'react';
import './cell.css';

class Cell extends React.Component {
  render() {
    if (this.props.data === 0) {
      return (
        <button type="button" className="btn btn-secondary btn-cell btn-block rounded-0  " disabled>
          0
        </button>
      )
    }
    return (
      <button type="button" className="btn btn-primary btn-cell btn-block rounded-0">
        {this.props.data}
      </button>
    )
  }
}

export default Cell;
