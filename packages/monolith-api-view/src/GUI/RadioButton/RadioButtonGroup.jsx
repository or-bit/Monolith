import React, { Component } from 'react';
import PropTypes from 'prop-types';
import shortid from 'shortid';
import RadioButton from './RadioButton';

export default class RadioButtonsGroup extends Component {
    constructor() {
        super();
        this.state = {
            selected: null,
        };
    }

    componentWillMount() {
        const checkedButtons = this.props.buttons.filter(
            ({ checked }) => checked === true);
        const selected = checkedButtons[checkedButtons.length - 1].value;
        this.setState({ selected });
    }

    onCheckedChange(value) {
        this.setState({ selected: value });
    }

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
