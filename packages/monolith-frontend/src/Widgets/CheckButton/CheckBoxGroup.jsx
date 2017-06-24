import React, { Component } from 'react';
import PropTypes from 'prop-types';
import CheckBox from './CheckBox';

/**
 * @class Defines a group of check box graphic elements.
 * @extends React.Component
 * @property buttons {Object} - Object containing the information needed to make the checkboxes
 * @property className {string} - Name of the class given to the <ul> containing the buttons
 */
export default class CheckBoxGroup extends Component {
    // onCheckedChange(object) {
    //     console.log(object);
    // }

    /**
     * Returns a group of buttons ordered in array.
     * @returns {Array}
     */
    processInput() {
        return this.props.buttons.map(
            ({ name, value, label, checked }) =>
                (
                    <li key={value}>
                        <CheckBox
                          key={name}
                          name={name}
                          value={value}
                          checked={checked}
                          label={label}
                        />
                    </li>
                )
          );
    }

    /**
     * Render a check box group.
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

CheckBoxGroup.propTypes = {
    buttons: PropTypes.arrayOf(PropTypes.object),
    classNames: PropTypes.string,
};

CheckBoxGroup.defaultProps = {
    buttons: [],
    classNames: 'monolith-group',
};
