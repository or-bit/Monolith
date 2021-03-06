import React from 'react';
import PropTypes from 'prop-types';

/**
 * This module creates an instance of a button.
 * @module Button
 * @property props {Object} the component's properties
 * @property props.callback [() => {}] {function} Callback to execute on click event
 * @property props.className [''] {string} Class for the component
 * @property props.text {string} Value of the button
 * @property props.url [undefined] {string} If defined, the button's url
 * @constructor
 */
const Button = props => (
    props.url ? (
        <a href={props.url} className={`monolith-button ${props.className}`}>
            {props.text}
        </a>
    ) : (
        <button
          className={`monolith-button ${props.className}`}
          onClick={props.callback}
        >
            {props.text}
        </button>
    )
);

Button.propTypes = {
    callback: PropTypes.func,
    className: PropTypes.string,
    text: PropTypes.string.isRequired,
    url: PropTypes.string,
};

Button.defaultProps = {
    callback: () => {},
    className: '',
    url: undefined,
};

export default Button;
