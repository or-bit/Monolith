import React from 'react';
import PropTypes from 'prop-types';

/**
 * This module allows you to create labels.
 * @module Label
 * @param forId {string} ID of the label
 * @param value {string} Value of the label
 * @returns {React.Component}
 * @constructor
 */
export default function Label({ forId, value }) {
    return <label htmlFor={forId}>{value}</label>;
}

Label.propTypes = {
    forId: PropTypes.string.isRequired,
    value: PropTypes.string.isRequired,
};

