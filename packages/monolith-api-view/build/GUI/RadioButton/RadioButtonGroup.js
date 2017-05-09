'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _shortid = require('shortid');

var _shortid2 = _interopRequireDefault(_shortid);

var _RadioButton = require('./RadioButton');

var _RadioButton2 = _interopRequireDefault(_RadioButton);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var RadioButtonsGroup = function (_Component) {
    _inherits(RadioButtonsGroup, _Component);

    function RadioButtonsGroup() {
        _classCallCheck(this, RadioButtonsGroup);

        var _this = _possibleConstructorReturn(this, (RadioButtonsGroup.__proto__ || Object.getPrototypeOf(RadioButtonsGroup)).call(this));

        _this.state = {
            selected: null
        };
        return _this;
    }

    _createClass(RadioButtonsGroup, [{
        key: 'componentWillMount',
        value: function componentWillMount() {
            var selected = null;
            var checkedButtons = this.props.buttons.filter(function (_ref) {
                var checked = _ref.checked;
                return checked === true;
            });
            selected = checkedButtons[checkedButtons.length - 1].value;
            this.setState({ selected: selected });
        }
    }, {
        key: 'onCheckedChange',
        value: function onCheckedChange(value) {
            this.setState({ selected: value });
        }
    }, {
        key: 'processInput',
        value: function processInput() {
            var _this2 = this;

            return this.props.buttons.map(function (_ref2) {
                var value = _ref2.value,
                    label = _ref2.label,
                    checked = _ref2.checked;
                return _react2.default.createElement(_RadioButton2.default, {
                    group: _this2, key: _shortid2.default.generate(), value: value,
                    label: label, groupName: _this2.props.groupName,
                    checked: checked,
                    onChange: function onChange(newSelected) {
                        return _this2.onCheckedChange(newSelected);
                    }
                });
            });
        }
    }, {
        key: 'render',
        value: function render() {
            return _react2.default.createElement(
                'div',
                null,
                this.processInput()
            );
        }
    }]);

    return RadioButtonsGroup;
}(_react.Component);

exports.default = RadioButtonsGroup;


RadioButtonsGroup.propTypes = {
    buttons: _propTypes2.default.arrayOf(_propTypes2.default.object).isRequired,
    groupName: _propTypes2.default.string.isRequired
};

RadioButtonsGroup.defaultProps = {
    buttons: [],
    groupName: 'RadioButtons'
};