'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _listItem = require('./listItem');

var _listItem2 = _interopRequireDefault(_listItem);

var _Button = require('../GUI/Button/Button');

var _Button2 = _interopRequireDefault(_Button);

var _ItemsStore = require('./../../Model/itemsStore/ItemsStore');

var _ItemsStore2 = _interopRequireDefault(_ItemsStore);

var _listItemsActions = require('../../../actions/listItemsActions');

var ListItemsActions = _interopRequireWildcard(_listItemsActions);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

// objectliteral

var ListItemContainer = function (_Component) {
    _inherits(ListItemContainer, _Component);

    function ListItemContainer() {
        _classCallCheck(this, ListItemContainer);

        var _this = _possibleConstructorReturn(this, (ListItemContainer.__proto__ || Object.getPrototypeOf(ListItemContainer)).call(this));

        _this.state = {
            items: _ItemsStore2.default.getItems(),
            completed: _ItemsStore2.default.getCompleted()
        };
        return _this;
    }

    _createClass(ListItemContainer, [{
        key: 'processInput',
        value: function processInput() {
            var _this2 = this;

            var x = 1;var y = 0;
            return this.state.items.map(function (_ref) {
                var item = _ref.item;
                return _react2.default.createElement(
                    'div',
                    { id: _this2.state.completed[y++].complete },
                    _react2.default.createElement(
                        'p',
                        { hidden: true, id: 'overallId' },
                        x++
                    ),
                    _react2.default.createElement(_listItem2.default, {
                        item: item
                    })
                );
            });
        }
    }, {
        key: 'componentWillMount',
        value: function componentWillMount() {
            var _this3 = this;

            _ItemsStore2.default.on('change', function () {
                _this3.setState({
                    items: _ItemsStore2.default.getItems()
                });
            });
        }
    }, {
        key: 'handleComplete',
        value: function handleComplete(event) {
            // let number = document.getElementById('overallId').value;
            event.preventDefault(); // prevent page refresh

            var inputs = document.getElementsByTagName('input');

            for (var i = 0; i < inputs.length; i++) {
                if (inputs[i].type.toLowerCase() === 'checkbox') {
                    var isChecked = inputs[i].checked;
                    if (isChecked === true) {
                        var id = inputs[i].parentNode.parentNode.parentNode.parentNode.childNodes[0].innerHTML;
                        ListItemsActions.completeItem(id);
                    }
                }
            }
        }
    }, {
        key: 'handleSubmit',
        value: function handleSubmit(event) {
            var itemString = document.getElementById('todoInpuId').value;
            event.preventDefault(); // prevent page refresh
            ListItemsActions.addItem(itemString);
        }
    }, {
        key: 'handleRemove',
        value: function handleRemove(event) {
            // let number = document.getElementById('overallId').value;
            event.preventDefault(); // prevent page refresh

            var inputs = document.getElementsByTagName('input');

            for (var i = 0; i < inputs.length; i++) {
                if (inputs[i].type.toLowerCase() === 'checkbox') {
                    var isChecked = inputs[i].checked;
                    if (isChecked === true) {
                        var id = inputs[i].parentNode.parentNode.parentNode.parentNode.childNodes[0].innerHTML;
                        ListItemsActions.removeItem(id);
                    }
                }
            }
        }
    }, {
        key: 'render',
        value: function render() {
            var items = this.processInput();
            return _react2.default.createElement(
                'div',
                null,
                _react2.default.createElement(
                    'form',
                    { name: 'submitItemForm', onSubmit: this.handleSubmit },
                    _react2.default.createElement('input', { id: 'todoInpuId' }),
                    _react2.default.createElement('input', { type: 'submit', name: 'itemText' })
                ),
                _react2.default.createElement(
                    'form',
                    { name: 'submitIdsForm', onSubmit: this.handleRemove },
                    items,
                    _react2.default.createElement('input', { type: 'submit', name: 'submitIds', value: 'Rimuovi selezionati' })
                ),
                _react2.default.createElement(_Button2.default, { 'function': this.handleComplete, text: 'Completa Selezionati' })
            );
        }
    }]);

    return ListItemContainer;
}(_react.Component);

exports.default = ListItemContainer;