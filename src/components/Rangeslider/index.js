import React from 'react';
import PropTypes from 'prop-types';

// import Label from '../Label';

const Rangeslider = ({
  onClick,
  onChange,
}) => {
  return (
    <div className="oui-rangeslider">
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
          <input
            data-traffic-group="1"
            type="range"
            min="0"
            max="100"
            step="1"
            defaultValue="50"
            onChange={ onChange }
          />
        </div>
      </div>
    </div>
  );
};

Rangeslider.propTypes = {
  // checked true means the toggle is on off means off
  checked: PropTypes.bool,
  /** Function that fires when the radio input is clicked */
  onChange: PropTypes.func,
  // onClick function
  onClick: PropTypes.func,
};

export default Rangeslider;
