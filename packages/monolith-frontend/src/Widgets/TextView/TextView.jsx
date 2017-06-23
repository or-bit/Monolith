import React from 'react';
import PropTypes from 'prop-types';

/**
 * This module allows you to create text view.
 * @module monolith-frontend/Widgets/TextView/TextView
 * @param props
 * @returns {XML}
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
