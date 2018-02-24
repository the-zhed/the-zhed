import React from 'react'
import PropTypes from 'prop-types'

class BlockButton extends React.Component {
  render() {
    const { block, onClick } = this.props
    switch (block) {
      case 'Z':
      case 'z':
        return <button className="btn btn-dark btn-block h-100" disabled>Z</button>
      case 'B':
        return <button className="btn btn-dark btn-block h-100" disabled>B</button>
      case 'T':
        return <button className="btn btn-dark btn-block h-100">T</button>
      case '1':
      case '2':
      case '3':
      case '4':
      case '5':
      case '6':
      case '7':
      case '8':
      case '9':
        return (
          <button
            className="btn btn-warning btn-zhed btn-block h-100"
            onClick={onClick}
          >
            {block}
          </button>
        )
      default:
        return null;
    }
  }
}

BlockButton.propTypes = {
  block: PropTypes.string,
  onClick: PropTypes.func,
//   onFinish: PropTypes.func,
};

export default BlockButton;
