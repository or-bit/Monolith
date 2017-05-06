import React from 'react';
import PropTypes from 'prop-types';

export default function InputText(props) {
    return <input type="text" id={props.id} defaultValue={props.value} />;
}

InputText.propTypes = {
    id: PropTypes.string.isRequired,
    value: PropTypes.string,
};

InputText.defaultProps = {
    value: '',
};
