'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = Image;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function Image(_ref) {
    var caption = _ref.caption,
        src = _ref.src;

    return _react2.default.createElement(
        'figure',
        null,
        _react2.default.createElement('img', { alt: caption, src: src }),
        _react2.default.createElement(
            'figcaption',
            null,
            caption
        )
    );
}

Image.propTypes = {
    src: _propTypes2.default.string.isRequired,
    caption: _propTypes2.default.string.isRequired
};