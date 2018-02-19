import React from 'react';
import PropTypes from 'prop-types';
import './ZhedButton.css';

const ZhedButton = ({ block, onClick }) => {
  switch (block) {
    case 'Z':
    case 'z':
      return <button className="btn btn-dark btn-block h-100" disabled>Z</button>;
    case 'B':
      return <button className="btn btn-dark btn-block h-100" disabled>B</button>;
    case 'T':
      return <button className="btn btn-dark btn-block h-100">T</button>;
    case '0':
      return null;
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
          onClick={() => onClick()}
        >
          {block}
        </button>
      );
    default:
      return null;
  }
}

ZhedButton.propTypes = {
  block: PropTypes.string,
  onClick: PropTypes.func,
};

export default ZhedButton;
