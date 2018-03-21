import PropTypes from 'prop-types';
import React from 'react';
import Slider from 'react-rangeslider';

const Rangeslider = (props) => {
  return (
    <div className="oui-rangeslider position--relative" data-test-section={ props.testSection }>
      <div className="oui-grid">
        <div className="oui-grid__cell">
          <label className="oui-label light-text">0%</label>
          <label className="oui-label flush-right light-text">100%</label>
          <div className="range-display"></div>
          <div className="range-display range-display-overlay"></div>
          <div className="range-grid">
            <div className="gridline grid-1"></div>
            <div className="gridline grid-2"></div>
            <div className="gridline grid-3"></div>
            <div className="gridline grid-4"></div>
            <div className="gridline grid-5"></div>
            <div className="gridline gridline-half grid-h1"></div>
            <div className="gridline gridline-half grid-h2"></div>
            <div className="gridline gridline-half grid-h3"></div>
            <div className="gridline gridline-half grid-h4"></div>
          </div>
        </div>
      </div>
      <Slider
        min={ 0 }
        max={ 100 }
        step={ 1 }
        value={ 35 }
        tooltip={ false }
        orientation="horizontal"
        { ...props }
      />
    </div>
  );
};

Rangeslider.propTypes = {
  /** onChange function */
  onChange: PropTypes.func,
  /** onChangeComplete function */
  onChangeComplete: PropTypes.func,
  /** onChangeStart function */
  onChangeStart: PropTypes.func,
  /** Hook for automated JavaScript tests */
  testSection: PropTypes.string,
  /** The initial value */
  value: PropTypes.number,
};

export default Rangeslider;
