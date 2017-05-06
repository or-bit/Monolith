import React from 'react';
import PropTypes from 'prop-types';
import './button.css';

const Button = props => (
    props.url ? (
        <a href={props.url} className={props.className}>
            {props.text}
        </a>
    ) : (
        <button
          className={props.className}
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
