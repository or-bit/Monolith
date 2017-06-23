import React from 'react';
import PropTypes from 'prop-types';

/**
 * @class InputText -
 * @extends Component
 * @property {Object} props
 * @property {string} props.id
 * @property {string} props.value
 * @property {Object} props.onTextChange
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
     * @param newValue
     */
    handleInputChange(newValue) {
        const newText = newValue.target.value;
        this.setState({ text: newText });
        this.props.onTextChange(newText);
    }

    /**
     * Renders an input text.
     * @returns {XML}
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
