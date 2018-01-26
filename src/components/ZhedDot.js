import React from 'react';
import PropTypes from 'prop-types';

const ZhedDot = ({ onClick }) => (
  <div onClick={() => onClick()}>
    Dot
  </div>
)

ZhedDot.propTypes = {
  onClick: PropTypes.func,
};

export default ZhedDot;
