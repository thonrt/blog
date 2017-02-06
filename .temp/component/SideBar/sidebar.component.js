'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactRouter = require('react-router');

var _store = require('../../store');

var _store2 = _interopRequireDefault(_store);

var _sidebar = require('../../config/sidebar.config');

var _sidebar2 = _interopRequireDefault(_sidebar);

var _popup = require('../../actions/popup.action');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var createMenuItem = function createMenuItem() {
  var sideBarDom = [];
  for (var i = 0, l = _sidebar2.default.length; i < l; i++) {
    var singleSidebar = _sidebar2.default[i];
    sideBarDom.push(_react2.default.createElement(
      'li',
      null,
      _react2.default.createElement(
        _reactRouter.Link,
        { to: singleSidebar.link },
        singleSidebar.title
      )
    ));
  }
  return sideBarDom;
};

var Sidebar = function (_React$Component) {
  _inherits(Sidebar, _React$Component);

  function Sidebar() {
    _classCallCheck(this, Sidebar);

    return _possibleConstructorReturn(this, (Sidebar.__proto__ || Object.getPrototypeOf(Sidebar)).apply(this, arguments));
  }

  _createClass(Sidebar, [{
    key: 'shouldComponentUpdate',
    value: function shouldComponentUpdate(nextProps) {
      console.log(nextProps);
    }
  }, {
    key: 'showPopup',
    value: function showPopup(e) {
      e.preventDefault();
      _store2.default.dispatch((0, _popup.showPopupAction)());
    }
  }, {
    key: 'render',
    value: function render() {
      var sideBarDom = createMenuItem();
      return _react2.default.createElement(
        'div',
        { className: 'layout-sidebar' },
        _react2.default.createElement(
          'div',
          { className: 'layout-title' },
          _react2.default.createElement('img', { className: 'layout-logo img-circle', src: '../../../blog/images/user.jpg' }),
          _react2.default.createElement(
            'div',
            { className: 'layout-title-text', onClick: this.showPopup },
            _react2.default.createElement(
              'strong',
              null,
              '\u5FEB\u997F\u6B7B\u7684\u9C7C'
            ),
            _react2.default.createElement('span', { className: 'glyphicon glyphicon-chevron-down' })
          )
        ),
        _react2.default.createElement('div', { style: { display: 'none' } }),
        _react2.default.createElement(
          'div',
          { className: 'layout-menu' },
          _react2.default.createElement(
            'ul',
            { role: 'menu', className: 'nav' },
            sideBarDom
          )
        )
      );
    }
  }]);

  return Sidebar;
}(_react2.default.Component);

Sidebar.propTypes = {
  showingPopup: _react2.default.PropTypes.bool.isRequired
};

exports.default = Sidebar;