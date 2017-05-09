'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var CheckBox = function (_Component) {
    _inherits(CheckBox, _Component);

    function CheckBox(props) {
        _classCallCheck(this, CheckBox);

        var _this = _possibleConstructorReturn(this, (CheckBox.__proto__ || Object.getPrototypeOf(CheckBox)).call(this, props));

        _this.handleClick = _this.handleClick.bind(_this);
        _this.state = {
            checked: props.checked
        };
        return _this;
    }

    _createClass(CheckBox, [{
        key: 'handleClick',
        value: function handleClick() {
            this.setState({
                checked: !this.state.checked
            });
        }
    }, {
        key: 'render',
        value: function render() {
            return _react2.default.createElement(
                'div',
                null,
                _react2.default.createElement('input', {
                    type: 'checkbox',
                    name: this.props.name,
                    value: this.props.value,
                    checked: this.state.checked,
                    onClick: this.handleClick,
                    id: this.props.name
                }),
                _react2.default.createElement(
                    'label',
                    { htmlFor: this.props.name },
                    this.props.label
                )
            );
        }
    }]);

    return CheckBox;
}(_react.Component);

exports.default = CheckBox;


CheckBox.propTypes = {
    name: _propTypes2.default.string.isRequired,
    value: _propTypes2.default.string,
    checked: _propTypes2.default.bool,
    label: _propTypes2.default.string
};

CheckBox.defaultProps = {
    value: 'Default value',
    label: 'Default value',
    checked: false
};