import React from 'react';
import PropTypes from 'prop-types';

/**
 * This module allows you to create a widgets container.
 * @module WidgetsContainer
 * @param props {Object} Properties of the component
 * @param props.classNames {string} Class for the elements
 * @param props.children {React.Component[]} Elements to be contained
 * @returns {React.Component}
 * @constructor
 */
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
