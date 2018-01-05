import React from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';
import SyntaxHighlighter from 'react-syntax-highlighter/prism';
import { xonokai, base16AteliersulphurpoolLight } from 'react-syntax-highlighter/styles/prism';

import CopyButton from '../../../../src/components/Code/CopyButton';

/**
 * Display code either inline or in its own block.
 * @param {Object} props - Properties passed to component
 * @returns {ReactElement}
 */
class Code extends React.Component {
  constructor() {
    super();
    this.renderCode = this.renderCode.bind(this);
  }

  renderCode() {
    const {
      language,
      type,
      testSection,
      children,
      codeStyle = 'dark'
    } = this.props;

    const codeColor = codeStyle === 'dark' ? xonokai : base16AteliersulphurpoolLight;

    return (
      /* eslint-disable react/no-danger */
      <SyntaxHighlighter
        language={ language }
        style={ codeColor }>
          { children }
      </SyntaxHighlighter>
      /* eslint-enable react/no-danger */
    );
  }

  render() {
    const {
      children,
      type,
      hasCopyButton,
      testSection,
      className,
      ouiStyle = true,
    } = this.props;
    let classes = classNames(className, {
      'oui-pre': ouiStyle,
      'highlight-react--oui': localStorage.getItem('show_ouireact') === 'true',
    });

    if (!children) {
      return null;
    }

    if (type === 'inline') {
      return this.renderCode();
    }

    return (
      <div data-oui-component={ true } className="position--relative">
        { hasCopyButton &&
          <CopyButton code={ children } testSection={ testSection } />
        }
        <pre
          className={ classes }
          data-test-section={ testSection }>
          { this.renderCode() }
        </pre>
      </div>
    );
  }
}

Code.propTypes = {
  /** The code within the component */
  children: PropTypes.string,
  /** Adds a copy button to code examples */
  hasCopyButton: PropTypes.bool,
  /** Apply syntax highlighting to the code */
  isHighlighted: PropTypes.bool,
  /** Specify a language for the syntax highlighter */
  language: PropTypes.oneOf(['cs', 'css', 'diff', 'html', 'java', 'javascript',
    'js', 'jsx', 'markdown', 'md', 'objectivec', 'php', 'python', 'ruby', 'scss',
    'swift']),
  /** Hook for automated JavaScript tests */
  testSection: PropTypes.string,
  /** How the code should be displayed */
  type: PropTypes.oneOf(['inline', 'block']).isRequired,
};

export default Code;