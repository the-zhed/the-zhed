import React from 'react';
import classnames from 'classnames';
import PropTypes from 'prop-types';
import './ZhedDot.css';

const ZhedDot = ({ indicator, onClick }) => (
  <button
    className={classnames('btn','btn-warning','btn-block','h-100','rounded-circle','dot',`dot-${indicator}`)}
    onClick={() => onClick()}
  >
  </button>
)

ZhedDot.propTypes = {
  onClick: PropTypes.func,
};

export default ZhedDot;
