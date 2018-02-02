import React from 'react';
import classnames from 'classnames';
import PropTypes from 'prop-types';
import ZhedButton from './ZhedButton';
import ZhedDot from './ZhedDot';
import './ZhedTile.css';

const ZhedTile = ({ background, zhedBlock, indicator, onSelectZhedButton, onSelectZhedDot }) => (
  <div className={classnames('Zhed-tile', 'p-1', `gray-${background}00`)}>
    {zhedBlock !== '0'
      ? <ZhedButton block={zhedBlock} onClick={() => onSelectZhedButton()} />
      : null
    }
    {indicator
      ? <ZhedDot indicator={indicator} onClick={() => onSelectZhedDot()} />
      : null
    }
  </div>
)

ZhedTile.propTypes = {
  background: PropTypes.number,
  zhedBlock: PropTypes.string,
  indicator: PropTypes.oneOfType([
    PropTypes.bool,
    PropTypes.number,
  ]),
  onSelectZhedButton: PropTypes.func,
  onSelectZhedDot: PropTypes.func,
};

export default ZhedTile;
