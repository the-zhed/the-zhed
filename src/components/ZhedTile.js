import React from 'react';
import classnames from 'classnames';
import ZhedButton from './ZhedButton';
import ZhedDot from './ZhedDot';
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
  renderButton(block) {
    if (block !== '0') {
      return <ZhedButton block={block} onClick={this.props.onClick} />;
    }
    return null;
  }
  renderDot(dot) {
    if (dot) {
      return <ZhedDot onClick={this.props.onClick} />;
    }
    return null;
  }
  render() {
    const color = this.state.background;
    const block = this.state.zhedBlock;
    const dot = this.state.indicator;
    return (
      <div className={classnames('Zhed-tile', 'p-1', `gray-${color}00`)}>
        {this.renderButton(block)}
        {this.renderDot(dot)}
      </div>
    )
  }
}

export default ZhedTile;
