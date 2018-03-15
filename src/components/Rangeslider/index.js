import React from 'react';
import PropTypes from 'prop-types';

const Rangeslider = ({ onClick }) => {
  return (
    <div className="lego-grid__cell">
      <label className="lego-label light-text">0%</label>
      <label className="lego-label flush-right light-text">100%</label>
      <div className="range-display"></div>
      <div className="range-display range-display-overlay" style="left: 455.2px;"></div>
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
      <input data-traffic-group="1" type="range" min="0" max="100" step="1" value="50" style="position: absolute; width: 1px; height: 1px; overflow: hidden; opacity: 0;" />
      <div className="rangeslider rangeslider--horizontal rangeslider--active" id="js-rangeslider-0">
        <div className="rangeslider__fill" style="width: 435.2px;"></div>
        <div className="rangeslider__handle" style="left: 423.2px;"></div>
      </div>
    </div>
  );
};

Rangeslider.propTypes = {
  // checked true means the toggle is on off means off
  checked: PropTypes.bool,
  // onClick function
  onClick: PropTypes.func,
};

export default Rangeslider;
