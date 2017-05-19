import React, { Component } from 'react';
import PropTypes from 'prop-types';
import CheckBox from './CheckBox';

export default class CheckBoxGroup extends Component {
    // onCheckedChange(object) {
    //     console.log(object);
    // }

    processInput() {
        return this.props.buttons.map(
            ({ name, value, label, checked }) =>
                <li>
                    <CheckBox
                      key={name} name={name} value={value} checked={checked}
                      label={label}
                    />
                </li>
        );
    }

    render() {
        const buttons = this.processInput();
        return (
            <ul className={`monolith-group ${this.props.classNames}`}>
                {buttons}
            </ul>
        );
    }
}

CheckBoxGroup.propTypes = {
    buttons: PropTypes.arrayOf(PropTypes.object),
    classNames: PropTypes.string,
};

CheckBoxGroup.defaultProps = {
    buttons: [],
    classNames: '',
};
