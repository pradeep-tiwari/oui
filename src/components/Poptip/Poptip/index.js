
import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

/**
 * @param {Object} props - Properties passed to component
 * @returns {ReactElement}
 * @private
 */
const Poptip = ({ bgColor = 'light', testSection, children }) => {
  const classes = classNames(
    {
      'highlight-react--oui': localStorage.getItem('show_ouireact') === 'true',
      'oui-pop--tip': bgColor === 'dark',
      'oui-pop--over': bgColor === 'light',
  });

  return (
    <div
      data-oui-component={ true }
      className={ classes }
      style={{ display: 'inline-block', opacity: 1, position: 'initial' }}
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
  /** Background color */
  bgColor: PropTypes.oneOf(['dark', 'light']),
};

export default Poptip;
