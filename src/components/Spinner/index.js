import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

/**
 * @param {Object} props - Properties passed to component
 * @returns {ReactElement}
 */
const Spinner = ({
  size
}) => {
  const styles = {
    container: {
      textAlign: 'center'
    }
  }
  const spinnerClasses = classNames(
    'lego-spinner',
    {[`lego-spinner--${size}`]: size}
  )
  return (
    <div style={styles.container}>
      <div className={spinnerClasses}></div>
    </div>
  );
};

Spinner.displayName = 'Spinner';

export default Spinner;
