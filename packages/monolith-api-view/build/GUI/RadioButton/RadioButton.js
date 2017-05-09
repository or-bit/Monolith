'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var RadioButton = function (_Component) {
    _inherits(RadioButton, _Component);

    function RadioButton(props) {
        _classCallCheck(this, RadioButton);

        var _this = _possibleConstructorReturn(this, (RadioButton.__proto__ || Object.getPrototypeOf(RadioButton)).call(this, props));

        _this.value = props.value;
        _this.id = RadioButton.idGenerator(_this.value);
        _this.groupName = props.groupName;
        _this.optional = {};
        if (typeof props.onChangeCallback === 'function') {
            _this.optional.onChangeCallback = props.onChangeCallback.bind(_this.groupName, _this.value);
        }
        if (props.checked === true) {
            _this.optional.defaultChecked = true;
        }
        return _this;
    }

    _createClass(RadioButton, [{
        key: 'handleChange',
        value: function handleChange() {
            if (this.optional.onChangeCallback) {
                this.optional.onChangeCallback();
            }
        }
    }, {
        key: 'render',
        value: function render() {
            var _this2 = this;

            return _react2.default.createElement(
                'div',
                null,
                _react2.default.createElement('input', _extends({
                    type: 'radio',
                    value: this.value,
                    name: this.groupName,
                    id: this.id,
                    onChange: function onChange() {
                        return _this2.handleChange();
                    }
                }, this.optional)),
                _react2.default.createElement(
                    'label',
                    { htmlFor: this.id },
                    this.props.label
                )
            );
        }
    }]);

    return RadioButton;
}(_react.Component);

exports.default = RadioButton;


RadioButton.propTypes = {
    onChangeCallback: _propTypes.PropTypes.func,
    value: _propTypes.PropTypes.oneOfType([_propTypes.PropTypes.string, _propTypes.PropTypes.image]).isRequired,
    groupName: _propTypes.PropTypes.string.isRequired,
    checked: _propTypes.PropTypes.bool,
    label: _propTypes.PropTypes.string.isRequired
};

RadioButton.defaultProps = {
    checked: false,
    onChangeCallback: undefined
};

RadioButton.idGenerator = function (name) {
    return name + '-radio';
};