'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = InputText;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function InputText(props) {
    return _react2.default.createElement('input', { type: 'text', id: props.id, defaultValue: props.value });
}

InputText.propTypes = {
    id: _propTypes2.default.string.isRequired,
    value: _propTypes2.default.string
};

InputText.defaultProps = {
    value: ''
};