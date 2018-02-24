import React from 'react'
import PropTypes from 'prop-types'
import classnames from 'classnames'
import IndicatorDot from './IndicatorDot'

class IndicatorMap extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    const { indicators, selectDot } = this.props
    return (
      <div className="indicatorMap">
        {indicators.map((row, rowIdx) => (
          <div className="d-flex justify-content-center" key={rowIdx}>
            {row.map((col, colIdx) => (
              <div className={classnames('Zhed-tile', 'text-center', 'py-3')} key={colIdx}>
                {col && (
                  <IndicatorDot onClick={() => selectDot({ rowIdx, colIdx })} />
                )}
              </div>
            ))}
          </div>
        ))}
      </div>
    )
  }
}

IndicatorMap.propTypes = {
  indicators: PropTypes.array,
  selectDot: PropTypes.func,
}

export default IndicatorMap
