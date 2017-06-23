import React from 'react';
import PropTypes from 'prop-types';

/**
 * This module allows you to insert images.
 * @module monolith-frontend/Widgets/Image/Image
 * @param caption
 * @param src
 * @returns {XML}
 * @constructor
 */
export default function Image({ caption, src }) {
    return (
        <figure>
            <img alt={caption} src={src} />
            <figcaption>{caption}</figcaption>
        </figure>
    );
}

Image.propTypes = {
    src: PropTypes.string.isRequired,
    caption: PropTypes.string.isRequired,
};
