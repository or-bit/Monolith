import React from 'react';
import PropTypes from 'prop-types';

/**
 * Manage default error.
 * @module Error
 * @param props Properties of the component
 * @param props.className [monolith-error] {string} Name of the class given to the <div> containing the error's message
 * @param props.errorMessage {string} The error's message
 * @param props.input [undefined] {Array | Object}
 * @returns {React.Component}
 * @constructor
 */
export default function Error(props) {
    let pre;

    if (props.input) {
        pre = (
            <pre>
                <code>
                    {JSON.stringify(props.input, null, Error.jsonIndentation)}
                </code>
            </pre>
        );
    }
    return (
        <div className={props.classNames}>
            <p>
                {props.errorMessage}
            </p>
            {pre}
        </div>
    );
}

Error.propTypes = {
    classNames: PropTypes.string,
    errorMessage: PropTypes.string.isRequired,
    input: PropTypes.oneOfType([
        PropTypes.array,
        PropTypes.object,
    ]),
};

Error.defaultProps = {
    classNames: 'monolith-error',
    input: undefined,
};

Error.jsonIndentation = '  ';
