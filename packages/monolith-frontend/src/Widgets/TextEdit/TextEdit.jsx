import React, { Component } from 'react';
import PropTypes from 'prop-types';

/**
 * @class TextEdit - Defines a text edit element.
 * @extends Component
 * @property {Object} props
 * @property {string} props.name
 * @property {string} props.value
 * @property {string} props.label
 * @property {Object} props.OnTextChange
 * @property {string} props.className
 */
export default class TextEdit extends Component {
    /**
     * Create a text edit element.
     * @param props
     */
    constructor(props) {
        super(props);
        this.state = {
            value: props.value,
        };
    }

    /**
     * Manage changing event.
     * @param event
     */
    handleChange(event) {
        const newValue = event.target.value;
        this.setState({ value: newValue });
        this.props.onTextChange(newValue, event);
    }

    /**
     * Renders a text edit element.
     * @returns {XML}
     */
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
