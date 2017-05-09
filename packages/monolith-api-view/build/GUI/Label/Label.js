'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = Label;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function Label(_ref) {
    var forId = _ref.forId,
        value = _ref.value;

    return _react2.default.createElement(
        'label',
        { htmlFor: forId },
        value
    );
}

Label.propTypes = {
    forId: _propTypes2.default.string.isRequired,
    value: _propTypes2.default.string.isRequired
};