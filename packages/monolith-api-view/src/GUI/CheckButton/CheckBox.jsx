import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class CheckBox extends Component {
    constructor(props) {
        super(props);
        this.handleClick = this.handleClick.bind(this);
        this.state = {
            checked: props.checked,
        };
    }
    handleClick() {
        this.setState({
            checked: !this.state.checked,
        });
    }
    render() {
        return (
            <div>
                <input
                  type="checkbox"
                  name={this.props.name}
                  value={this.props.value}
                  checked={this.state.checked}
                  onClick={this.handleClick}
                  id={this.props.name}
                />
                <label htmlFor={this.props.name}>{this.props.label}</label>
            </div>
        );
    }
}

CheckBox.propTypes = {
    name: PropTypes.string.isRequired,
    value: PropTypes.string,
    checked: PropTypes.bool,
    label: PropTypes.string,
};

CheckBox.defaultProps = {
    value: 'Default value',
    label: 'Default value',
    checked: false,
};
