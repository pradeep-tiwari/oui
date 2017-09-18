const React = require('react');
const classNames = require('classnames');
const dropdownService = require('optly/services/dropdown');

const Dropdown = React.createClass({
  propTypes: {
    activator: React.PropTypes.node.isRequired,
    children: React.PropTypes.node.isRequired,
    width: React.PropTypes.oneOfType([
      React.PropTypes.string,
      React.PropTypes.number,
    ]),
    zIndex: React.PropTypes.number,
  },

  childContextTypes: {
    toggleDropdown: React.PropTypes.func,
    hideDropdown: React.PropTypes.func,
  },

  getChildContext() {
    return {
      toggleDropdown: () => {
        dropdownService.toggle.call(dropdownService, this.refs.dropdown);
      },
      hideDropdown: () => {
        dropdownService.hide.call(dropdownService, this.refs.dropdown);
      },
    };
  },

  render() {
    return (
      <div
        data-ui-component={ true }
        ref='dropdown'
        className='lego-dropdown-group'
        style={{ width: this.props.width, zIndex: this.props.zIndex }}>
        <DropdownActivator>
          { this.props.activator }
        </DropdownActivator>
        { this.props.children }
      </div>
    );
  },
});

const DropdownActivator = React.createClass({
  propTypes: {
    children: React.PropTypes.node,
  },

  render() {
    // loop through children and add props to them
    // we need this so that we can pass the context props to the children
    // passed into the activator
    const childrenWithProps = React.Children.map(this.props.children,
      (child) => {
        return React.cloneElement(child, {
          // trigger the dropdown if the child element is clicked on
          onClick: this.context.toggleDropdown,
        });
      }
    );
    return <div>{ childrenWithProps }</div>;
  },
});

DropdownActivator.contextTypes = {
  toggleDropdown: React.PropTypes.func,
};

const DropdownContents = React.createClass({
  propTypes: {
    children: React.PropTypes.node,

    isNoWrap: React.PropTypes.bool,

    minWidth: React.PropTypes.oneOfType([
      React.PropTypes.string,
      React.PropTypes.number,
    ]),

    direction: React.PropTypes.oneOf(['left', 'right']),
    canScroll: React.PropTypes.bool,
  },

  getDefaultProps() {
    return {
      direction: 'left',
    };
  },

  render() {
    let styleProps = {};
    if (this.props.minWidth) {
      styleProps.minWidth = this.props.minWidth;
    }

    if (this.props.canScroll) {
      styleProps.overflowY = 'visible';
      styleProps.maxHeight = 'auto';
    }

    const classes = classNames({
      'nowrap': this.props.isNoWrap,
      'lego-dropdown': true,
      'lego-dropdown--right': this.props.direction === 'left',
    });

    return (
      <ul className={ classes } style={ styleProps }>
        { this.props.children }
      </ul>
    );
  },
});

const DropdownListItem = React.createClass({
  getDefaultProps() {
    return {
      hideOnClick: false,
    };
  },

  propTypes: {
    children: React.PropTypes.node,
    hideOnClick: React.PropTypes.bool,
    hardSides: React.PropTypes.bool,
    hardTop: React.PropTypes.bool,
  },

  contextTypes: {
    hideDropdown: React.PropTypes.func,
  },

  onClick() {
    if (this.props.hideOnClick) {
      this.context.hideDropdown();
    }
  },

  render() {
    const classes = classNames({
      'hard--sides': this.props.hardSides,
      'hard--top': this.props.hardTop,
      'lego-dropdown__item': true,
    });


    return (
      <li
        className={classes}
        onClick={ this.onClick }>
        { this.props.children }
      </li>
    );
  },
});

const DropdownBlockLink = React.createClass({
  getDefaultProps() {
    return {
      hideOnClick: false,
      isLink: true,
    };
  },

  propTypes: {
    // should this be a link or nonclickable text
    isLink: React.PropTypes.bool.isRequired,
    /** Content to be shown in the menu option */
    children: React.PropTypes.node.isRequired,
    /** Click handler for the menu option */
    onClick: React.PropTypes.func.isRequired,
    /** Used for data-test-section attribute on the link */
    testSection: React.PropTypes.string,
    /** should hide when clicking a link */
    hideOnClick: React.PropTypes.bool,
    /** Used for data-track-id attribute on the link */
    trackId: React.PropTypes.string,
    /** Minimum width of the list item, useful if you need to have a block of description text */
    minWidth: React.PropTypes.oneOfType([
      React.PropTypes.string,
      React.PropTypes.number,
    ]),
    hardSides: React.PropTypes.bool,
    hardTop: React.PropTypes.bool,
  },

  contextTypes: {
    hideDropdown: React.PropTypes.func,
  },

  onClick() {
    this.props.onClick();
    if (this.props.hideOnClick) {
      this.context.hideDropdown();
    }
  },

  render() {
    let styleProps = {};
    if (this.props.minWidth) {
      styleProps.minWidth = this.props.minWidth;
    }
    return (
      <div
        className={classNames({
          'link': this.props.isLink,
          'muted': !this.props.isLink,
          'lego-dropdown__block-link': this.props.isLink,
        })}
        style={ styleProps }
        data-test-section={ this.props.testSection }
        data-track-id={ this.props.trackId }
        onClick={ this.onClick }>
        { this.props.children }
      </div>
    );
  },
});

const DropdownBlockLinkText = React.createClass({
  getDefaultProps() {
    return {
      text: null,
    };
  },

  propTypes: {
    /** text, if provided */
    text: React.PropTypes.string,
    /** test section from parent */
    testSection: React.PropTypes.string,
  },

  render() {
    return (
      <span data-test-section={ 'block-link-text-' + this.props.testSection }>
        { this.props.text }
      </span>
    );
  },
});

const DropdownBlockLinkSecondaryText = React.createClass({
  getDefaultProps() {
    return {
      isWarning: false,
      secondaryText: null,
    };
  },

  propTypes: {
    /** should show info icon */
    isWarning: React.PropTypes.bool,
    /** description text, if provided */
    secondaryText: React.PropTypes.string,
    /** test section from parent */
    testSection: React.PropTypes.string,
  },

  render() {
    return (
      <div className="lego-dropdown--descriptive__content push--top flex">
        { this.props.isWarning &&
          <svg className="oui-icon push--right flex--none">
            <use xlinkHref="#exclamation-16"></use>
          </svg>
        }
        <div data-test-section={ 'block-link-description-' + this.props.testSection }>
          { this.props.secondaryText }
        </div>
      </div>
    );
  },
});

module.exports = {
  Dropdown,
  DropdownContents,
  DropdownListItem,
  DropdownBlockLink,
  DropdownBlockLinkText,
  DropdownBlockLinkSecondaryText,
};
