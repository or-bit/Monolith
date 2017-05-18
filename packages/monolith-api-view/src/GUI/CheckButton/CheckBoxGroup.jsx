import React, { Component } from 'react';
import PropTypes from 'prop-types';
import CheckBox from './CheckBox';
import styles from './CheckBoxGroup.css';

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
            <ul className="{styles} ${this.props.classNames}">
                {buttons}
            </ul>
        );
    }
}

CheckBoxGroup.propTypes = {
    buttons: PropTypes.arrayOf(PropTypes.object),
};

CheckBoxGroup.defaultProps = {
    buttons: [],
};
