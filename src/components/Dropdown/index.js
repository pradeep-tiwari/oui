import React from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';

class Dropdown extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isOpen: false,
    };
    this.toggle = this.toggle.bind(this);
    this.toggleOnBlur = this.toggleOnBlur.bind(this);
  }

  toggle() {
    this.setState({
      isOpen: !this.state.isOpen,
    });
  }

  toggleOnBlur() {
    if (this.state.isOpen === false) { return; }
    this.setState({isOpen: !this.state.isOpen});
  }

  render() {
    const {
      buttonContent,
      children,
      icon = true,
      isDisabled = false,
      fullWidth,
      style,
      testSection,
      width = 200,
    } = this.props;

    const buttonClass = classNames(
      'oui-button',
      { [`oui-button--${style}`]: style },
      { ['oui-button--full soft--left text--left']: fullWidth }
    );

    const iconClass = classNames(
      'push-half--left',
      {
        ['oui-arrow-inline--down']: icon,
      }
    );

    return (
      <div
        data-ui-component={ true }
        ref='dropdown'
        className='oui-dropdown-group'
        style={{ width: width }}
        data-test-section={ testSection }>
        <button
          className={ buttonClass }
          disabled={ isDisabled }
          onClick={ this.toggle }
          onBlur={ this.toggleOnBlur }
          style={{ marginBottom: 2 }}>
          <div className='flex'>
            <div className='flex--1 truncate'>{ buttonContent }</div>
            <div className='text--right'><span className={ iconClass }></span></div>
          </div>
        </button>
        { this.state.isOpen && !isDisabled && children }
      </div>
    );
  }
}

Dropdown.propTypes = {
  buttonContent: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.element,
  ]),
  children: PropTypes.node.isRequired,
  fullWidth: PropTypes.bool,
  handleClick: PropTypes.func,
  icon: PropTypes.bool,
  isDisabled: PropTypes.bool,
  style: PropTypes.string,
  testSection: PropTypes.string,
  width: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number,
  ]),
};

export default Dropdown;
