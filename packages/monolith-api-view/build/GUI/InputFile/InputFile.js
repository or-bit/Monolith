'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = InputFile;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function InputFile(props) {
    return _react2.default.createElement('input', { type: 'file', id: props.id });
}
InputFile.propTypes = {
    id: _propTypes2.default.string.isRequired
};