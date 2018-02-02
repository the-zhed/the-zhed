import React from 'react';
import PropTypes from 'prop-types';
import './ZhedDot.css';

const ZhedDot = ({ indicator, onClick }) => (
  <div className="dot dot-1" onClick={() => onClick()}>
    Dot
  </div>
)

ZhedDot.propTypes = {
  onClick: PropTypes.func,
};

export default ZhedDot;
