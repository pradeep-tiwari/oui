import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

/**
 * @param {Object} props - Properties passed to component
 * @returns {ReactElement}
 */
const Spinner = ({
  size,
  hasOverlay,
}) => {
  const spinner = classNames(
    'lego-spinner',
    {[`lego-spinner--${size}`]: size}
  )
  return (
    <div className="lego-overlay" >
      <div className={spinner}></div>
    </div>
  );
};

Spinner.displayName = 'Spinner';

export default Spinner;
