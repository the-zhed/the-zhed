import React from 'react'
import PropTypes from 'prop-types'
import BlockButton from './BlockButton'

class BlockMap extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    const { blocks, selectButton } = this.props
    return (
      <div className="blockMap">
        {blocks.map((row, rowIdx) => (
          <div className="d-flex justify-content-center" key={rowIdx}>
            {row.map((col, colIdx) => (
              <div className={'Zhed-tile'} key={colIdx}>
                <BlockButton block={col} onClick={() => selectButton({ rowIdx, colIdx })} />
              </div>
            ))}
          </div>
        ))}
      </div>
    )
  }
}

BlockMap.propTypes = {
  blocks: PropTypes.array,
  selectButton: PropTypes.func,
}

export default BlockMap
