import React from 'react';
import PropTypes from 'prop-types';

/**
 * @class This class represent a text input field.
 * @extends React.Component
 * @property props {Object} Properties of the component
 * @property props.id {string} ID of the text input
 * @property props.value {string} Text contained in the text input
 * @property props.onTextChange {Object}
 */
export default class InputText extends React.Component {
    /**
     * Create an input text element.
     * @param props
     */
    constructor(props) {
        super(props);
        this.state = {
            text: props.value,
        };
    }

    /**
     * Manage an input change value event.
     * @param newValue {string}
     */
    handleInputChange(newValue) {
        const newText = newValue.target.value;
        this.setState({ text: newText });
        this.props.onTextChange(newText);
    }

    /**
     * Renders an input text.
     * @returns {React.Component}
     */
    render() {
        return (
            <input
              type="text"
              id={this.props.id}
              value={this.state.text}
              onChange={newValue => this.handleInputChange(newValue)}
            />
        );
    }
}

InputText.propTypes = {
    id: PropTypes.string.isRequired,
    value: PropTypes.string,
    onTextChange: PropTypes.func,
};

InputText.defaultProps = {
    value: '',
    onTextChange: () => {},
};
