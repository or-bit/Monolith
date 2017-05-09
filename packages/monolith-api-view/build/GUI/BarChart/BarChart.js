'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.Bar = exports.Legend = exports.Tooltip = exports.CartesianGrid = exports.YAxis = exports.XAxis = exports.BarChart = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

var _recharts = require('recharts');

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var BarChart = function (_BarRechart) {
    _inherits(BarChart, _BarRechart);

    function BarChart() {
        _classCallCheck(this, BarChart);

        return _possibleConstructorReturn(this, (BarChart.__proto__ || Object.getPrototypeOf(BarChart)).apply(this, arguments));
    }

    _createClass(BarChart, [{
        key: 'render',

        /**
         * For the documentation and examples go to http://recharts.org
         */
        value: function render() {
            return _get(BarChart.prototype.__proto__ || Object.getPrototypeOf(BarChart.prototype), 'render', this).call(this);
        }
    }]);

    return BarChart;
}(_recharts.BarChart);

exports.BarChart = BarChart;
exports.XAxis = _recharts.XAxis;
exports.YAxis = _recharts.YAxis;
exports.CartesianGrid = _recharts.CartesianGrid;
exports.Tooltip = _recharts.Tooltip;
exports.Legend = _recharts.Legend;
exports.Bar = _recharts.Bar;