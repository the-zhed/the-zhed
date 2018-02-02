import React from 'react';
import PropTypes from 'prop-types';
import ZhedTile from './ZhedTile';

const ZhedPanel = ({ map, onSelectZhedButton, onSelectZhedDot }) => (
  <div>
    {map.zhedBlockMap.map((row, rowIdx) => (
      <div className="d-flex justify-content-center" key={rowIdx}>
        {row.map((col, colIdx) => (
          <ZhedTile
            key={colIdx}
            background={map.backgroundMap[rowIdx][colIdx]}
            zhedBlock={col}
            indicator={map.indicatorMap[rowIdx][colIdx]}
            onSelectZhedButton={() => onSelectZhedButton({ rowIdx, colIdx, col })}
            onSelectZhedDot={() => onSelectZhedDot({ rowIdx, colIdx, col })}
          />
        ))}
      </div>
    ))}
  </div>
)

ZhedPanel.propTypes = {
  map: PropTypes.object,
  onSelectZhedButton: PropTypes.func,
  onSelectZhedDot: PropTypes.func,
};

export default ZhedPanel;
