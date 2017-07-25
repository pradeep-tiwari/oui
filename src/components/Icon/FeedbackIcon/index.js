import React from 'react';

/* eslint-disable max-len */
const FeedbackIcon16 = require('!babel?presets[]=react!svg-jsx-loader!oui-icons/src/16/feedback-16.svg');
const FeedbackIcon24 = require('!babel?presets[]=react!svg-jsx-loader!oui-icons/src/24/feedback-24.svg');
/* eslint-enable max-len */

/**
 * @param {Object} props - Properties passed to component
 * @returns {ReactElement}
 */
const FeedbackIcon = (props) => {
  let Svg;
  let sizeclass;

  switch (props.size) {
    case 16:
      Svg = FeedbackIcon16;
      sizeclass = 'oui-icon--16';
      break;
    case 24:
      Svg = FeedbackIcon24;
      sizeclass = 'oui-icon--24';
      break;
    default:
      Svg = FeedbackIcon16;
      sizeclass = `oui-icon--${ props.size }`;
  }

  return (
    <Svg
      data-oui-component className={ 'oui-icon display--inline ' + sizeclass }
      data-test-section={ props.testSection }
    />
  );
};

FeedbackIcon.propTypes = {
  /** Size of the icon */
  size: React.PropTypes.oneOf([12, 16, 24]).isRequired,
  /** Hook for automated JavaScript tests */
  testSection: React.PropTypes.string,
};

export default FeedbackIcon;
