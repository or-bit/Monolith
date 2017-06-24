import React, { Component } from 'react';
import PropTypes from 'prop-types';

/**
 * @class Defines a check box graphic element.
 * @extends React.Component
 * @property {Object} props
 * @property {string} props.name
 * @property {string} props.value
 * @property {boolean} props.checked
 * @property {string} props.label
 */
export default class CheckBox extends Component {
    /**
     *Create a check box element.
     * @param props
     */
    constructor(props) {
        super(props);
        this.handleClick = this.handleClick.bind(this);
        this.state = {
            checked: props.checked,
        };
    }

    /**
     * Manage click event.
     */
    handleClick() {
        this.setState({
            checked: !this.state.checked,
        });
    }

    /**
     * Render check box.
     * @returns {React.Component}
     */
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
