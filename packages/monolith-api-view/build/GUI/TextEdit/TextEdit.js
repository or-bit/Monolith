'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

require('./TextEdit.css');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var TextEdit = function (_Component) {
    _inherits(TextEdit, _Component);

    function TextEdit(props) {
        _classCallCheck(this, TextEdit);

        var _this = _possibleConstructorReturn(this, (TextEdit.__proto__ || Object.getPrototypeOf(TextEdit)).call(this, props));

        _this.state = {
            value: props.value
        };
        return _this;
    }

    _createClass(TextEdit, [{
        key: 'handleChange',
        value: function handleChange(event) {
            this.setState({ value: event.target.value });
            this.props.onChange(event);
        }
    }, {
        key: 'render',
        value: function render() {
            var _this2 = this;

            return _react2.default.createElement(
                'div',
                { className: 'input-textedit' },
                _react2.default.createElement(
                    'label',
                    { htmlFor: this.props.name },
                    this.props.label
                ),
                _react2.default.createElement('textarea', {
                    name: this.props.name,
                    id: this.props.name,
                    onChange: function onChange(event) {
                        return _this2.handleChange(event);
                    },
                    value: this.state.value
                })
            );
        }
    }]);

    return TextEdit;
}(_react.Component);

exports.default = TextEdit;


TextEdit.propTypes = {
    name: _propTypes2.default.string.isRequired,
    value: _propTypes2.default.string,
    label: _propTypes2.default.string,
    onChange: _propTypes2.default.func
};

TextEdit.defaultProps = {
    value: 'Default value',
    label: 'Default value',
    onChange: function onChange() {}
};