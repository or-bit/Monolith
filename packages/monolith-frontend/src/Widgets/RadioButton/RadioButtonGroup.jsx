import React, { Component } from 'react';
import PropTypes from 'prop-types';
import shortid from 'shortid';
import RadioButton from './RadioButton';

/**
 * @class Defines a group of radio buttons graphic element.
 * @extends React.Component
 * @property buttons {Object}
 * @property groupName {string}
 * @property className {string}
 */
export default class RadioButtonsGroup extends Component {
    /**
     * Create a group of radio buttons.
     */
    constructor() {
        super();
        this.state = {
            selected: null,
        };
    }

    /**
     * Mount the component
     */
    componentWillMount() {
        const checkedButtons = this.props.buttons.filter(
            ({ checked }) => checked === true);
        const selected = checkedButtons[checkedButtons.length - 1].value;
        this.setState({ selected });
    }

    /**
     * Manage check event.
     * @param value
     */
    onCheckedChange(value) {
        this.setState({ selected: value });
    }

    /**
     * Returns a group of buttons as array.
     * @returns {Array}
     */
    processInput() {
        return this.props.buttons.map(
            ({ value, label, checked }) => (
                <li key={value}>
                    <RadioButton
                      group={this}
                      key={shortid.generate()}
                      value={value}
                      label={label}
                      groupName={this.props.groupName}
                      checked={checked}
                      onChange={
                          newSelected => this.onCheckedChange(newSelected)
                      }
                    />
                </li>
            ));
    }

    /**
     * Render a radio buttons group.
     * @returns {React.Component}
     */
    render() {
        const buttons = this.processInput();
        return (
            <ul className={this.props.classNames}>
                {buttons}
            </ul>
        );
    }
}

RadioButtonsGroup.propTypes = {
    buttons: PropTypes.arrayOf(PropTypes.object).isRequired,
    groupName: PropTypes.string.isRequired,
    classNames: PropTypes.string,
};

RadioButtonsGroup.defaultProps = {
    buttons: [],
    groupName: 'RadioButtons',
    classNames: 'monolith-group',
};
