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
  testSection,
}) => {
  const classes = classNames(
    'lego-spinner',
    {[`lego-spinner--${size}`]: size}
  );
  if (hasOverlay) {
    return (
      <div testSection={ testSection } className="lego-overlay">
        <div className={ classes }></div>
      </div>
    );
  }
  return <div testSection={ testSection } className={ classes }></div>
};

Spinner.propTypes = {
  /** boolean class for establish overlay */
  hasOverlay: PropTypes.bool,
  /** various sizes */
  size: PropTypes.oneOf(['small', 'tiny']),
  /** Hook for automated JavaScript tests */
  testSection: PropTypes.string,
};

Spinner.displayName = 'Spinner';

export default Spinner;
