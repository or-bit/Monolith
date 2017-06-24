import React from 'react';
import PropTypes from 'prop-types';

/**
 * This module allows you to create text view.
 * @module TextView
 * @param props {Object} Properties of the component
 * @param props.class [''] {string} Class for the component
 * @param props.text [''] {string} Text to visualize
 * @returns {React.Component}
 * @constructor
 */
export default function TextView(props) {
    return <p className={props.class}>{props.text}</p>;
}

TextView.propTypes = {
    class: PropTypes.string,
    text: PropTypes.string,
};

TextView.defaultProps = {
    class: '',
    text: '',
};
