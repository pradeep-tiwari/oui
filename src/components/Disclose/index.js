import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

class Disclose extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isOpen: false,
      overChildren: false,
    };
    this.handleToggle = this.handleToggle.bind(this);
  }

  handleToggle(event) {
    this.setState({
      isOpen: !this.state.isOpen,
      overChildren: false,
    });
  }

  render() {
    const {
      children,
      style,
      childStyle,
      title,
    } = this.props;
    const contentClass = classNames(
      'oui-disclose__content',
      {
        ['border--sides border--bottom']: childStyle === 'all',
        ['border--bottom']: childStyle === 'divider' && this.state.isOpen,

      }
    );
    const linkClass = classNames(
      'oui-disclose__link link--dark soft-half flush',
      {
        ['background--faint display--block']: style === 'header',
        ['border--all background--faint display--block']: style === 'header-bordered',
      }
    );
    const arrow = this.state.isOpen ? 'oui-disclose is-active' : 'oui-disclose';
    return (
      <div className={ arrow } style={{marginTop: '-1px'}}>
        <a onClick={ this.handleToggle } className={ linkClass }>
          <div className='oui-disclose__arrow'>
            <span className="lego-disclose__symbol push-half--right"></span>
            { title }
          </div>
        </a>
        <div className={ contentClass }>
          { this.state.isOpen && children }
        </div>
      </div>
    );
  }
}

Disclose.propTypes = {
  childStyle: PropTypes.string,
  children: PropTypes.node.isRequired,
  noBorder: PropTypes.bool,
  style: PropTypes.string,
  title: PropTypes.string.isRequired,
};

export default Disclose;
