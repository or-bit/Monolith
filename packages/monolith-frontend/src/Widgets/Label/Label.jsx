import React from 'react';
import PropTypes from 'prop-types';

/**
 * This module allows you to create labels.
 * @module monolith-frontend/Widgets/Label/Label
 * @param forId
 * @param value
 * @returns {XML}
 * @constructor
 */
export default function Label({ forId, value }) {
    return <label htmlFor={forId}>{value}</label>;
}

Label.propTypes = {
    forId: PropTypes.string.isRequired,
    value: PropTypes.string.isRequired,
};

