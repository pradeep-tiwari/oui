import React from 'react';
import PropTypes from 'prop-types';
import Poptip from './Poptip';

import { Tooltip } from 'react-tippy';
import 'react-tippy/dist/tippy.css';

/**
 * Displays help text when hovering on an element.
 * @param {Object} props - Properties passed to component
 * @returns {ReactElement}
 */

const PoptipWrapper = ({
  children,
  content,
  disable,
  position,
  trigger,
  theme,
}) => (
  <Tooltip
    arrow={ true }
    disable={ disable }
    html={ <Poptip>{ content }</Poptip> }
    position={ position }
    theme={ theme }
    trigger={ trigger }>
    <div>{ children }</div>
  </Tooltip>
);

PoptipWrapper.displayName = 'Poptip';

PoptipWrapper.propTypes = {
  /** Content that, when hovered on, makes the Poptip appear */
  children: PropTypes.node.isRequired,
  /** content could be a node of a string */
  content: PropTypes.oneOfType([
    PropTypes.node,
    PropTypes.string,
  ]),
  /** disable value | default => false */
  disable: PropTypes.bool,
  /** position value options | default => top */
  position: PropTypes.oneOf([
    'top',
    'bottom',
    'left',
    'right',
  ]),
  /** background color | default => dark */
  theme: PropTypes.string,
  /** trigger value options | default => mouseenter focus */
  trigger: PropTypes.oneOf([
    'mouseenter',
    'focus',
    'click',
    'manual',
  ]),
};

export default PoptipWrapper;
