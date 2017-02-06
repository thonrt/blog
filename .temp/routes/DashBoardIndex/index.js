'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactRedux = require('react-redux');

var _header = require('../../component/Header/header.component');

var _header2 = _interopRequireDefault(_header);

var _sidebar = require('../../component/Sidebar/sidebar.component');

var _sidebar2 = _interopRequireDefault(_sidebar);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var DashBoardIndex = function (_React$Component) {
  _inherits(DashBoardIndex, _React$Component);

  function DashBoardIndex(props) {
    _classCallCheck(this, DashBoardIndex);

    return _possibleConstructorReturn(this, (DashBoardIndex.__proto__ || Object.getPrototypeOf(DashBoardIndex)).call(this, props));
  }

  _createClass(DashBoardIndex, [{
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        'div',
        null,
        _react2.default.createElement(_header2.default, null),
        _react2.default.createElement(_sidebar2.default, null),
        _react2.default.createElement(
          'div',
          { className: 'layout-contentbox' },
          this.props.children
        )
      );
    }
  }]);

  return DashBoardIndex;
}(_react2.default.Component);

exports.default = DashBoardIndex;