import React from 'react'
import PropTypes from 'prop-types'
import classnames from 'classnames'
import './BackgroundMap.css'

class BackgroundMap extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    const { backgrounds } = this.props
    return (
      <div className="backgroundMap">
        {backgrounds.map((row, rowIdx) => (
          <div className="d-flex justify-content-center" key={rowIdx}>
            {row.map((col, colIdx) => (
              <div className={classnames('Zhed-tile', `gray-${col}00`)} key={colIdx}></div>
            ))}
          </div>
        ))}
      </div>
    )
  }
}

BackgroundMap.propTypes = {
  backgrounds: PropTypes.array,
}

export default BackgroundMap
