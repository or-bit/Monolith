'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = GUIContainer;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _GUI = require('./GUI/GUI');

var _GUI2 = _interopRequireDefault(_GUI);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function GUIContainer(props) {
    return _react2.default.createElement(
        'div',
        null,
        props.children
    );
}

GUIContainer.propTypes = {
    children: _propTypes2.default.arrayOf(_propTypes2.default.oneOfType([_propTypes2.default.instanceOf(_GUI2.default), _propTypes2.default.element]))
};

GUIContainer.defaultProps = {
    children: []
};