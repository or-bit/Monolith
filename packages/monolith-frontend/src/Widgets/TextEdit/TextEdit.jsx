import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class TextEdit extends Component {
    constructor(props) {
        super(props);
        this.state = {
            value: props.value,
        };
    }

    handleChange(event) {
        const newValue = event.target.value;
        this.setState({ value: newValue });
        this.props.onTextChange(newValue, event);
    }
    render() {
        return (
            <div className={this.props.classNames}>
                <label htmlFor={this.props.name}>{this.props.label}</label>
                <textarea
                  name={this.props.name}
                  id={this.props.name}
                  onChange={event => this.handleChange(event)}
                  value={this.state.value}
                />
            </div>
        );
    }
}

TextEdit.propTypes = {
    name: PropTypes.string.isRequired,
    value: PropTypes.string,
    label: PropTypes.string,
    onTextChange: PropTypes.func,
    classNames: PropTypes.string,
};

TextEdit.defaultProps = {
    value: 'Default value',
    label: 'Default value',
    onTextChange: () => {},
    classNames: 'monolith-textedit',
};
