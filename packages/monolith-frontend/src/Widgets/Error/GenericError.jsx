import React from 'react';
import PropTypes from 'prop-types';

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
