import React from 'react';
import PropTypes from 'prop-types';

export default function WidgetsContainer(props) {
    return (
        <div className={props.classNames}>
            {props.children}
        </div>
    );
}

WidgetsContainer.propTypes = {
    children: PropTypes.oneOfType([
        PropTypes.arrayOf(PropTypes.element),
        PropTypes.element,
    ]),
    classNames: PropTypes.string,
};

WidgetsContainer.defaultProps = {
    children: [],
    classNames: 'monolith-container',
};
