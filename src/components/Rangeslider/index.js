import PropTypes from 'prop-types';
import React from 'react';

// function resizeRangeDisplay(val) {
//   document.getElementsByClassName('range-display-overlay')[0].style.left = val+'%';
// }

const Rangeslider = (props) => {
  return (
    <div className="oui-rangeslider" data-test-section={ props.testSection }>
      <div className="lego-grid">
        <div className="lego-grid__cell position--relative">
          <div className="flex">
            <label className="lego-label muted flex--1">0%</label>
            <label className="lego-label muted">100%</label>
          </div>
          <div className="range-display">
            <div className="range-display range-display-overlay"></div>
          </div>
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
          <input className="hard position--relative width--1-1" data-traffic-group="1" type="range" min="0" max="100" step="1" value="50" />
        </div>
      </div>
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
