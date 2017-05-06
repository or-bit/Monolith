import React, { Component } from 'react';
import { PropTypes } from 'prop-types';

export default class RadioButton extends Component {
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

    handleChange() {
        if (this.optional.onChangeCallback) {
            this.optional.onChangeCallback();
        }
    }

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
        PropTypes.image,
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
