import React, { Component } from 'react';
import { PropTypes } from 'prop-types';

import Image from '../Image/Image';

/**
 * @class Defines a radio button graphic element.
 * @extends React.Component
 * @property props {Object} Properties of the component
 * @property props.onChangeCallback {function} Function called on change
 * @property props.value {string | Image} Value of the button
 * @property props.groupName {string} Name of the group
 * @property props.checked {boolean} State of the button
 * @property props.label {string} Label of the button
 */
export default class RadioButton extends Component {
    /**
     * Create a radio button element.
     * @param props
     */
    constructor(props) {
        super(props);
        this.value = props.value;
        this.id = RadioButton.idGenerator(this.value);
        this.groupName = props.groupName;
        this.optional = {};
        if (typeof props.onChangeCallback === 'function') {
            this.optional.onChangeCallback =
                props.onChangeCallback.bind(
                    this.groupName,
                    this.value);
        }
        if (props.checked === true) {
            this.optional.defaultChecked = true;
        }
    }

    /**
     * Manage change event.
     */
    handleChange() {
        if (this.optional.onChangeCallback) {
            this.optional.onChangeCallback();
        }
    }

    /**
     * Render the radio button.
     * @returns {React.Component}
     */
    render() {
        return (
            <div>
                <input
                  type="radio"
                  value={this.value}
                  name={this.groupName}
                  id={this.id}
                  onChange={() => this.handleChange()}
                  {...this.optional}
                />
                <label htmlFor={this.id}>{this.props.label}</label>
            </div>
        );
    }
}

RadioButton.propTypes = {
    onChangeCallback: PropTypes.func,
    value: PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.instanceOf(Image),
    ]).isRequired,
    groupName: PropTypes.string.isRequired,
    checked: PropTypes.bool,
    label: PropTypes.string.isRequired,
};

RadioButton.defaultProps = {
    checked: false,
    onChangeCallback: undefined,
};

RadioButton.idGenerator = name => `${name}-radio`;
