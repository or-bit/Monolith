'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = TextView;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function TextView(props) {
    return _react2.default.createElement(
        'p',
        { className: props.class },
        props.text
    );
}

TextView.propTypes = {
    class: _propTypes2.default.string,
    text: _propTypes2.default.string
};

TextView.defaultProps = {
    class: '',
    text: ''
};