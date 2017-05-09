'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _CheckBox = require('./CheckBox');

var _CheckBox2 = _interopRequireDefault(_CheckBox);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var CheckBoxGroup = function (_Component) {
    _inherits(CheckBoxGroup, _Component);

    function CheckBoxGroup() {
        _classCallCheck(this, CheckBoxGroup);

        return _possibleConstructorReturn(this, (CheckBoxGroup.__proto__ || Object.getPrototypeOf(CheckBoxGroup)).apply(this, arguments));
    }

    _createClass(CheckBoxGroup, [{
        key: 'processInput',

        // onCheckedChange(object) {
        //     console.log(object);
        // }

        value: function processInput() {
            return this.props.buttons.map(function (_ref) {
                var name = _ref.name,
                    value = _ref.value,
                    label = _ref.label,
                    checked = _ref.checked;
                return _react2.default.createElement(_CheckBox2.default, {
                    key: name, name: name, value: value, checked: checked,
                    label: label
                });
            });
        }
    }, {
        key: 'render',
        value: function render() {
            var buttons = this.processInput();
            return _react2.default.createElement(
                'div',
                null,
                buttons
            );
        }
    }]);

    return CheckBoxGroup;
}(_react.Component);

exports.default = CheckBoxGroup;


CheckBoxGroup.propTypes = {
    buttons: _propTypes2.default.arrayOf(_propTypes2.default.object)
};

CheckBoxGroup.defaultProps = {
    buttons: []
};