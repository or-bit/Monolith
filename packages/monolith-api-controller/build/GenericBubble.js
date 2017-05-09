'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var React = require('react');
var PropTypes = require('prop-types');
var LifeCycle = require('monolith-api-model').LifeCycle;

var GenericBubble = function (_React$Component) {
    _inherits(GenericBubble, _React$Component);

    function GenericBubble(props) {
        _classCallCheck(this, GenericBubble);

        var _this = _possibleConstructorReturn(this, (GenericBubble.__proto__ || Object.getPrototypeOf(GenericBubble)).call(this, props));

        if (props !== undefined) {
            _this.lifeCycle = props.time === null ? null : new LifeCycle(props.time);
        }
        _this.state = { alive: true };
        return _this;
    }

    // eslint-disable-next-line class-methods-use-this


    _createClass(GenericBubble, [{
        key: 'aliveRender',
        value: function aliveRender() {}

        // eslint-disable-next-line class-methods-use-this

    }, {
        key: 'notAliveRender',
        value: function notAliveRender() {}
    }, {
        key: 'render',
        value: function render() {
            if (this.state.alive) {
                return this.aliveRender();
            }
            return this.notAliveRender();
        }
    }]);

    return GenericBubble;
}(React.Component);

GenericBubble.propTypes = {
    time: PropTypes.number
};

GenericBubble.defaultProps = {
    time: null
};

module.exports = GenericBubble;