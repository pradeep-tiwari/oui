import React from 'react';
import PropTypes from 'prop-types';

import Button from '../Button';
import Icon from 'react-oui-icons';

/**
 * Provide a basic card display which has a title and inner content
 * The card can have an optional close icon
 * @param {Object} props - Properties passed to component
 * @returns {ReactElement}
 */
const Card = (props) => {
    const {
        title,
        onClose,
        testSection,
        children,
    } = props;

    const closer = (
        <Button style="unstyled" onClick={ onClose } data-test-section={ `${testSection}-close` }>
            <Icon name='close'/>
        </Button>
    );

    return (
        <div className="push--bottom">
            <div className="flex background--faint soft-half border--all">
                <div className="width--3-4 epsilon line--loose" data-test-section={ `${testSection}-title` }>{ title }</div>
                <div className="width--1-4 text--right push--right push-half--top">
                    { onClose && closer }
                </div>
            </div>
            <div className="soft-half--sides border--sides border--bottom soft--ends" data-test-section={ `${testSection}-body` }>
                { children }
            </div>
        </div>
    );
};

Card.propTypes = {
    /** What is the card title */
    title: PropTypes.string.isRequired,
    /** method to invoke when a close element is clicked; if this is unset, the close icon doesn't show */
    onClose: PropTypes.func,
    /** For automated testing only. */
    testSection: PropTypes.string,
    /** Elements that appears within the component */
    children: PropTypes.string.isRequired,
};

export default Card;