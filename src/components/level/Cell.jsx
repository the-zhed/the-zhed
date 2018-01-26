import React from 'react';
import classnames from 'classnames';
import './cell.css';

class Cell extends React.Component {
  constructor(props) {
    super(props);

    this.selectCell = this.selectCell.bind(this);
  }

  selectCell(e) {
    const rowIdx = parseInt(e.target.dataset.row, 10);
    const colIdx = parseInt(e.target.dataset.col, 10);
    const cell = parseInt(this.props.data, 10);
    this.props.handler({
      rowIdx,
      colIdx,
      cell,
    });
  }

  renderDot() {

  }

  render() {
    let cell;

    if (this.props.data === 0) {
      cell = null;
    }
    else if (Number.isInteger(parseInt(this.props.data, 10))) {
      cell = (
        <button
          type="button"
          className="btn btn-primary btn-block"
          data-row={this.props.row}
          data-col={this.props.col}
          onClick={this.selectCell}
        >
          {this.props.data}
        </button>
      );
    }
    else {
      cell = <span>{this.props.data}</span>
    }

    return (
      <div className={classnames('Cell', 'p-1', `gray-${this.props.bg}00`)}>
        {cell}
      </div>
    )
  }
}

export default Cell;
