import React from 'react';
import classnames from 'classnames';
import PropTypes from 'prop-types';
import ZhedButton from './ZhedButton';
import ZhedDot from './ZhedDot';
import './ZhedTile.css';

const ZhedTile = (
  {
    background,
    zhedBlock,
    indicator,
    rowIdx,
    colIdx,
    selectZhedButton,
    selectZhedDot,
  }
) => (
  <div className={classnames('Zhed-tile', 'text-center', 'p-1', `gray-${background}00`)}>
    {zhedBlock !== '0' && indicator ? (
      <ZhedButton block='T' onClick={() => selectZhedButton({ rowIdx, colIdx })} />
    ) : (
      zhedBlock !== '0' ? (
      <ZhedButton block={zhedBlock} onClick={() => selectZhedButton({ rowIdx, colIdx })} />
    ) : (
      indicator ? (
      <ZhedDot indicator={indicator} onClick={() => selectZhedDot({ rowIdx, colIdx })} />
    ) : null
    ))
    }
    {/* {zhedBlock !== '0'
      ? <ZhedButton block={zhedBlock} onClick={() => selectZhedButton({ rowIdx, colIdx })} />
      : null
    }
    {indicator
      ? <ZhedDot indicator={indicator} onClick={() => selectZhedDot({ rowIdx, colIdx })} />
      : null
    } */}
  </div>
)

ZhedTile.propTypes = {
  background: PropTypes.number,
  zhedBlock: PropTypes.string,
  indicator: PropTypes.oneOfType([
    PropTypes.bool,
    PropTypes.number,
  ]),
  rowIdx: PropTypes.number,
  colIdx: PropTypes.number,
  selectZhedButton: PropTypes.func,
  selectZhedDot: PropTypes.func,
};

export default ZhedTile;
