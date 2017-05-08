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
        let selected = null;
        const checkedButtons = this.props.buttons.filter(
            ({ checked }) => checked === true);
        selected = checkedButtons[checkedButtons.length - 1].value;
        this.setState({ selected });
    }

    onCheckedChange(value) {
        this.setState({ selected: value });
    }

    processInput() {
        return this.props.buttons.map(
            ({ value, label, checked }) => (
                <RadioButton
                  group={this} key={shortid.generate()} value={value}
                  label={label} groupName={this.props.groupName}
                  checked={checked}
                  onChange={newSelected => this.onCheckedChange(newSelected)}
                />
            ));
    }

    render() {
        return (
            <div>
                {this.processInput()}
            </div>
        );
    }
}

RadioButtonsGroup.propTypes = {
    buttons: PropTypes.arrayOf(PropTypes.object).isRequired,
    groupName: PropTypes.string.isRequired,
};

RadioButtonsGroup.defaultProps = {
    buttons: [],
    groupName: 'RadioButtons',
};
