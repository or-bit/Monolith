import React from 'react';
import PropTypes from 'prop-types';

/**
 * This module allows you to insert images.
 * @module Image
 * @param caption {string} Description of the image
 * @param src {string} Specifies the url of the image
 * @returns {React.Component}
 * @constructor
 */
export default function Image({ caption, className, src }) {
    return (
        <figure className={className}>
            <img alt={caption} src={src} />
            <figcaption>{caption}</figcaption>
        </figure>
    );
}

Image.propTypes = {
    src: PropTypes.string.isRequired,
    caption: PropTypes.string.isRequired,
    className: PropTypes.string,
};

Image.defaultProps = {
    className: '',
};
