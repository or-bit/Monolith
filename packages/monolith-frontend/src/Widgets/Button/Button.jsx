import React from 'react';
import PropTypes from 'prop-types';

/**
 * This module creates instance of button.
 * @module monolith-frontend/Widgets/Button/Button
 * @property {Object} props
 * @property {function} props.callback
 * @property {string} props.className
 * @property {string} props.text
 * @property {string} props.url
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
