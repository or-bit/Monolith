import React, { Component } from 'react';
import { PropTypes } from 'prop-types';

import Image from '../Image/Image';

/**
 * @class RadioButton - Defines a radio button graphic element.
 * @extends Component
 * @property {Object} props
 * @property {Object} props.onChangeCallback
 * @property {Object} props.value
 * @property {string} props.groupName
 * @property {boolean} props.checked
 * @property {string} props.label
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
     * @returns {XML}
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
