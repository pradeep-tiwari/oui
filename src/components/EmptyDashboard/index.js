/*

Todo
1. Resolve consistent widths for images and text
2. Allow Link component
3. Allow Dropdown as button

*/
const React = require('react');
import classNames from 'classnames';
import PropTypes from 'prop-types';

const EmptyDashboard = ({
  button,
  imagePath,
  headline,
  description,
  descriptionMaxWidth,
  testSection,
}) => {
  return (
    <div
      data-ui-component={ true }
      className='text--center soft-quad'
      style={ { maxWidth: '740px', margin: 'auto' } }
      data-test-section={ testSection }>

      { imagePath && (
        <div className="muted push-double--bottom">
          <img
            src={ imagePath }
            className="display--inline"
            style={ { maxWidth: '450px', maxHeight: '290px' } }
            data-test-section={ testSection && `${testSection}-image` }
            alt=""
          />
        </div>
      ) }

      { headline && (
        <div
          className="alpha push--bottom"
          data-test-section={ testSection && `${testSection}-headline` }>
          { headline }
        </div>
      ) }

      { description && (
        <div
          className="muted push--bottom anchor--middle"
          style={ { maxWidth: descriptionMaxWidth } }
          data-test-section={ testSection && `${testSection}-description` }>
          { description }
        </div>
      ) }

      { button && (
        <div className="push-double--top">
          { button }
        </div>
      ) }
    </div>
  );
};

EmptyDashboard.propTypes = {
  /** A button, link, or other element that is actionable */
  button: React.PropTypes.node,
  /** A string or `div` containing longer text that describes the empty state */
  description: React.PropTypes.element,
  /** Max width of description. Accepts any valid CSS width value. */
  descriptionMaxWidth: React.PropTypes.oneOfType([
    React.PropTypes.string,
    React.PropTypes.number,
  ]),
  /** Short text about the empty state */
  headline: React.PropTypes.string.isRequired,
  /** Path to an image representing the empty state */
  imagePath: React.PropTypes.string,
  /** Identifier used to create data-test-section attributes for testing */
  testSection: React.PropTypes.string,
};

EmptyDashboard.getDefaultProps = {
  descriptionMaxWidth: '450px',
  testSection: 'empty-hello',
};

module.exports = EmptyDashboard;
