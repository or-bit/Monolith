import React from 'react';
import PropTypes from 'prop-types';

/**
 * This module allows you to insert an InputFile.
 * @module monolith-frontend/Widgets/InputFile/InputFile
 * @param props
 * @returns {XML}
 * @constructor
 */
export default function InputFile(props) {
    return (<input type="file" id={props.id} />);
}

InputFile.propTypes = {
    id: PropTypes.string.isRequired,
};
