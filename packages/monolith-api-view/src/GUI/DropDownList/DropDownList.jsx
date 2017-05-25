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

    hasDuplicateValues() {
        const input = this.props.values;
        const helperSet = new Set();
        return input.some(
          ({ optionValue }) =>
          helperSet.size === helperSet.add(optionValue).size);
    }

    processInput() {
        const input = this.props.values;
        return input.map(
          ({ label, optionValue, selected }) => {
              if (selected) {
                  return (
                      <option
                        key={optionValue}
                        value={optionValue}
                        selected
                      >
                          {label}
                      </option>
                  );
              }
              return (
                  <option
                    key={optionValue}
                    value={optionValue}
                  >
                      {label}
                  </option>
              );
          }
        );
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
            <select className={this.props.classNames}>
                {this.processInput(input)}
            </select>
        );
    }
}

DropDownList.propTypes = {
    values: PropTypes.arrayOf(PropTypes.object).isRequired,
    classNames: PropTypes.string,
    errorClassNames: PropTypes.string,
};

DropDownList.defaultProps = {
    classNames: 'monolith-droplist',
    errorClassNames: 'monolith-error',
};
