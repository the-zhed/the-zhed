import React from 'react'
import PropTypes from 'prop-types'
import classnames from 'classnames'
import FontAwesomeIcon from '@fortawesome/react-fontawesome'
import { faCircle } from '@fortawesome/fontawesome-free-solid'
import './ZhedDot.css';

const IndicatorDot = ({ indicator, onClick }) => (
  <FontAwesomeIcon
    icon={faCircle}
    className={classnames('dot', `dot-${indicator}`)}
    onClick={() => onClick()}
  />
)

IndicatorDot.propTypes = {
  onClick: PropTypes.func,
}

export default IndicatorDot
