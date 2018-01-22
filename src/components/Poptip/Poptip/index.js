import React from 'react';
import PropTypes from 'prop-types';

/**
 * @param {Object} props - Properties passed to component
 * @returns {ReactElement}
 * @private
 */

const Poptip = ({testSection, children }) => {
  return (
    <div
      data-test-section={ testSection }>
      { children }
    </div>
  );
};

Poptip.propTypes = {
  /** Content that appears within the popover body */
  children: PropTypes.string.isRequired,
  /** Hook for automated JavaScript tests */
  testSection: PropTypes.string,
};

export default Poptip;
