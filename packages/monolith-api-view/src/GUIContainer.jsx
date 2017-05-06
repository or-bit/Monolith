import React from 'react';
import PropTypes from 'prop-types';
import GUI from './GUI/GUI';

export default function GUIContainer(props) {
    return (
        <div>
            {props.children}
        </div>
    );
}

GUIContainer.propTypes = {
    children: PropTypes.arrayOf(PropTypes.oneOfType([
        PropTypes.instanceOf(GUI),
        PropTypes.element,
    ])),
};

GUIContainer.defaultProps = {
    children: [],
};
