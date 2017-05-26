import React from 'react';
import PropTypes from 'prop-types';
import GUI from './GUI/GUI';

export default function GUIContainer(props) {
    return (
        <div className={props.classNames}>
            {props.children}
        </div>
    );
}

GUIContainer.propTypes = {
    children: PropTypes.oneOfType([
        PropTypes.arrayOf(PropTypes.oneOfType([
            PropTypes.instanceOf(GUI),
            PropTypes.element,
        ])),
        PropTypes.instanceOf(GUI),
        PropTypes.element,
    ]),
    classNames: PropTypes.string,
};

GUIContainer.defaultProps = {
    children: [],
    classNames: 'monolith-container',
};
