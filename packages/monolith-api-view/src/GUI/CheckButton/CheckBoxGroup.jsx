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
                <CheckBox
                  key={name} name={name} value={value} checked={checked}
                  label={label}
                />,
        );
    }

    render() {
        const buttons = this.processInput();
        return (
            <div>
                {buttons}
            </div>
        );
    }
}

CheckBoxGroup.propTypes = {
    buttons: PropTypes.arrayOf(PropTypes.object),
};

CheckBoxGroup.defaultProps = {
    buttons: [],
};
