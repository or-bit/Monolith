import React, { Component } from 'react';
import PropTypes from 'prop-types';

/**
 * @class Defines a text edit element.
 * @extends Component
 * @property props {Object} Properties of the component
 * @property props.name {string} Name of the component (necessary for the form)
 * @property props.value ['default-value'] {string} Value to display
 * @property props.label ['default-value'] {string} Label for the tag
 * @property props.OnTextChange [() => {}] {function} Action to perform on text change event
 * @property props.className ['monolith-textedit'] {string} Class for the component
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
     * @returns {React.Component}
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
