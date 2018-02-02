import React from 'react';
import classnames from 'classnames';
import PropTypes from 'prop-types';
import FontAwesomeIcon from '@fortawesome/react-fontawesome';
import { faCircle } from '@fortawesome/fontawesome-free-solid';
import './ZhedDot.css';

const ZhedDot = ({ indicator, onClick }) => (
  <FontAwesomeIcon
    icon={faCircle}
    className={classnames('dot', `dot-${indicator}`, 'align-bottom')}
    onClick={() => onClick()}
  />
)

ZhedDot.propTypes = {
  onClick: PropTypes.func,
};

export default ZhedDot;
