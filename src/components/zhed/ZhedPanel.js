import React from 'react';
import PropTypes from 'prop-types';
import ZhedTile from './ZhedTile';

const ZhedPanel = (
  {
    blockMap,
    backgroundMap,
    indicatorMap,
    onSelectZhedButton,
    onSelectZhedDot,
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
            onSelectZhedButton={onSelectZhedButton}
            onSelectZhedDot={onSelectZhedDot}
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
  onSelectZhedButton: PropTypes.func,
  onSelectZhedDot: PropTypes.func,
};

export default ZhedPanel;
