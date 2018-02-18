import React from 'react';
import PropTypes from 'prop-types';
import ZhedTile from './ZhedTile';

const ZhedPanel = (
  {
    blockMap,
    backgroundMap,
    indicatorMap,
    selectZhedButton,
    selectZhedDot,
  }
) => (
  <div>
    {blockMap.map((row, rowIdx) => (
      <div className="d-flex justify-content-center" key={rowIdx}>
        {row.map((col, colIdx) => (
          <ZhedTile
            key={colIdx}
            background={backgroundMap[rowIdx][colIdx]}
            zhedBlock={col}
            indicator={indicatorMap[rowIdx][colIdx]}
            rowIdx={rowIdx}
            colIdx={colIdx}
            selectZhedButton={selectZhedButton}
            selectZhedDot={selectZhedDot}
          />
        ))}
      </div>
    ))}
  </div>
)

ZhedPanel.propTypes = {
  blockMap: PropTypes.array,
  backgroundMap: PropTypes.array,
  indicatorMap: PropTypes.array,
  selectZhedButton: PropTypes.func,
  selectZhedDot: PropTypes.func,
};

export default ZhedPanel;
