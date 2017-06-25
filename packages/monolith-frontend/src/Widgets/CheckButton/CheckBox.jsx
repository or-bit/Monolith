import React, { Component } from 'react';
import PropTypes from 'prop-types';

/**
 * @class Defines a check box graphic element.
 * @extends React.Component
 * @property {Object} props - Properties of the component
 * @property {string} props.name - Name of the checkbox
 * @property {string} props.value - Value of the checkbox
 * @property {boolean} props.checked - State of the checkbox, can be checked (true) or unchecked (false)
 * @property {string} props.label - Label of the checkbox
 */
export default class CheckBox extends Component {
    /**
     *Create a check box element.
     * @param props - Properties of the component
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
            <div className={this.props.className}>
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
    className: PropTypes.string,
    checked: PropTypes.bool,
    label: PropTypes.string,
};

CheckBox.defaultProps = {
    value: 'Default value',
    label: 'Default value',
    className: '',
    checked: false,
};
