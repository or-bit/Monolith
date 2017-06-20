import React from 'react';
import PropTypes from 'prop-types';

export default class InputText extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            text: props.value,
        };
    }

    handleInputChange(newValue) {
        const newText = newValue.target.value;
        this.setState({ text: newText });
        this.props.onTextChange(newText);
    }

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
