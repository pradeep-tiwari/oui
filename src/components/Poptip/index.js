import React from 'react';
import PropTypes from 'prop-types';
import Poptip from './Poptip';

import { Tooltip } from 'react-tippy';

/**
 * Displays help text when hovering on an element.
 * @param {Object} props - Properties passed to component
 * @returns {ReactElement}
 */

const PoptipWrapper = ({ children, content, bgColor, props}) => (
  <Tooltip { ...props } html={<Poptip bgColor={bgColor}>{ content }</Poptip>}>
    { children }
  </Tooltip>
);

PoptipWrapper.displayName = 'Poptip';

PoptipWrapper.propTypes = {
  /** Content that, when hovered on, makes the Poptip appear */
  children: PropTypes.node.isRequired,
};

export default PoptipWrapper;