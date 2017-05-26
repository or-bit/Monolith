import React, { Component } from 'react';
import PropTypes from 'prop-types';

import Error from '../Error/GenericError';

export default class DropDownList extends Component {
    // expected data: label and optionValue are required, selected is not required (default false)
    /*
    [
        {
            label: 'Cute value1',
            optionValue: 'value1',
            selected: true
        },
        {
            label: 'Cute value2',
            optionValue: 'value2'
        }
     */
    constructor(props) {
        super(props);

        const selectedItem = props.values.find(value => value.selected);

        this.state = {
            selected: selectedItem.optionValue,
        };
    }

    hasDuplicateValues() {
        const input = this.props.values;
        const helperSet = new Set();
        return input.some(
          ({ optionValue }) =>
          helperSet.size === helperSet.add(optionValue).size);
    }

    processInput() {
        const input = this.props.values;
        return input.map(({ label, optionValue }) => (
            <option
              key={optionValue}
              value={optionValue}
            >
                {label}
            </option>
            ));
    }

    handleChange(event) {
        const newValue = event.target.value;
        this.setState({
            selected: newValue,
        });
        this.props.onSelectionChange(newValue, event);
    }

    render() {
        const input = this.props.values;
        const errorMessage =
          `Check values prop used in ${this.constructor.name}.\
          Duplicated values found!`;
        if (this.hasDuplicateValues(input)) {
            return (
                <Error
                  classNames={this.props.errorClassNames}
                  errorMessage={errorMessage}
                  input={input}
                />
            );
        }

        return (
            <select
              className={this.props.classNames}
              value={this.state.selected}
              onChange={event => this.handleChange(event)}
            >
                {this.processInput(input)}
            </select>
        );
    }
}

DropDownList.propTypes = {
    values: PropTypes.arrayOf(PropTypes.object).isRequired,
    classNames: PropTypes.string,
    errorClassNames: PropTypes.string,
    onSelectionChange: PropTypes.func,
};

DropDownList.defaultProps = {
    classNames: 'monolith-droplist',
    errorClassNames: 'monolith-error',
    onSelectionChange: () => {},
};
