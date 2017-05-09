'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.TextView = exports.TextEdit = exports.RadioButtonGroup = exports.RadioButton = exports.PieChart = exports.Label = exports.InputText = exports.InputFile = exports.Image = exports.CheckBox = exports.CheckBoxGroup = exports.Button = exports.BarChart = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

exports.default = gui;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _BarChart = require('./BarChart/BarChart');

var _BarChart2 = _interopRequireDefault(_BarChart);

var _Button = require('./Button/Button');

var _Button2 = _interopRequireDefault(_Button);

var _CheckBox = require('./CheckButton/CheckBox');

var _CheckBox2 = _interopRequireDefault(_CheckBox);

var _CheckBoxGroup = require('./CheckButton/CheckBoxGroup');

var _CheckBoxGroup2 = _interopRequireDefault(_CheckBoxGroup);

var _Image = require('./Image/Image');

var _Image2 = _interopRequireDefault(_Image);

var _InputText = require('./InputText/InputText');

var _InputText2 = _interopRequireDefault(_InputText);

var _InputFile = require('./InputFile/InputFile');

var _InputFile2 = _interopRequireDefault(_InputFile);

var _Label = require('./Label/Label');

var _Label2 = _interopRequireDefault(_Label);

var _PieChart = require('./PieChart/PieChart');

var _PieChart2 = _interopRequireDefault(_PieChart);

var _RadioButton = require('./RadioButton/RadioButton');

var _RadioButton2 = _interopRequireDefault(_RadioButton);

var _RadioButtonGroup = require('./RadioButton/RadioButtonGroup');

var _RadioButtonGroup2 = _interopRequireDefault(_RadioButtonGroup);

var _TextEdit = require('./TextEdit/TextEdit');

var _TextEdit2 = _interopRequireDefault(_TextEdit);

var _TextView = require('./TextView/TextView');

var _TextView2 = _interopRequireDefault(_TextView);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

/**
 * HOC Props-Proxy pattern.
 * @param WrappedComponent
 * @returns {GUI}
 */
function gui(WrappedComponent) {
    // eslint-disable-next-line react/prefer-stateless-function
    return function (_React$Component) {
        _inherits(_class, _React$Component);

        function _class() {
            _classCallCheck(this, _class);

            return _possibleConstructorReturn(this, (_class.__proto__ || Object.getPrototypeOf(_class)).apply(this, arguments));
        }

        _createClass(_class, [{
            key: 'render',
            value: function render() {
                return _react2.default.createElement(WrappedComponent, this.props);
            }
        }]);

        return _class;
    }(_react2.default.Component);
}

var barChart = gui(_BarChart2.default);
var button = gui(_Button2.default);
var checkBoxGroup = gui(_CheckBoxGroup2.default);
var checkBox = gui(_CheckBox2.default);
var image = gui(_Image2.default);
var inputFile = gui(_InputFile2.default);
var inputText = gui(_InputText2.default);
var label = gui(_Label2.default);
var pieChart = gui(_PieChart2.default);
var radioButton = gui(_RadioButton2.default);
var radioButtonGroup = gui(_RadioButtonGroup2.default);
var textEdit = gui(_TextEdit2.default);
var textView = gui(_TextView2.default);

exports.BarChart = barChart;
exports.Button = button;
exports.CheckBoxGroup = checkBoxGroup;
exports.CheckBox = checkBox;
exports.Image = image;
exports.InputFile = inputFile;
exports.InputText = inputText;
exports.Label = label;
exports.PieChart = pieChart;
exports.RadioButton = radioButton;
exports.RadioButtonGroup = radioButtonGroup;
exports.TextEdit = textEdit;
exports.TextView = textView;