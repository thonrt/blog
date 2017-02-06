'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactRouter = require('react-router');

var _reactRouterRedux = require('react-router-redux');

var _reactRedux = require('react-redux');

var _store = require('./store');

var _store2 = _interopRequireDefault(_store);

var _login = require('./routes/Login/login');

var _login2 = _interopRequireDefault(_login);

var _index = require('./routes/DashBoardIndex/index');

var _index2 = _interopRequireDefault(_index);

var _app = require('./component/App/app.component');

var _app2 = _interopRequireDefault(_app);

var _aboutme = require('./pages/aboutme');

var _aboutme2 = _interopRequireDefault(_aboutme);

var _article = require('./pages/article');

var _article2 = _interopRequireDefault(_article);

var _newArticle = require('./pages/newArticle');

var _newArticle2 = _interopRequireDefault(_newArticle);

var _contact = require('./pages/contact');

var _contact2 = _interopRequireDefault(_contact);

var _manage = require('./pages/manage');

var _manage2 = _interopRequireDefault(_manage);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var history = (0, _reactRouterRedux.syncHistoryWithStore)(_reactRouter.hashHistory, _store2.default);

var router = function (_React$Component) {
  _inherits(router, _React$Component);

  function router(props) {
    _classCallCheck(this, router);

    return _possibleConstructorReturn(this, (router.__proto__ || Object.getPrototypeOf(router)).call(this, props));
  }

  _createClass(router, [{
    key: 'checkLogin',
    value: function checkLogin(next, replace) {
      var isLogin = _store2.default.getState().login.isLogin;
      if (!isLogin) {
        replace("/login");
      }
    }
  }, {
    key: 'render',
    value: function render() {
      return (
        /* 利用Provider包裹页面 */
        _react2.default.createElement(
          _reactRedux.Provider,
          { store: _store2.default },
          _react2.default.createElement(
            _reactRouter.Router,
            { history: history },
            _react2.default.createElement(
              _reactRouter.Route,
              { path: '/', component: _app2.default },
              _react2.default.createElement(_reactRouter.IndexRoute, { component: _login2.default }),
              _react2.default.createElement(
                _reactRouter.Route,
                { path: '/dashBoardIndex', component: _index2.default },
                _react2.default.createElement(_reactRouter.IndexRoute, { component: _aboutme2.default }),
                _react2.default.createElement(_reactRouter.Route, { path: '/aboutMe', component: _aboutme2.default }),
                _react2.default.createElement(_reactRouter.Route, { path: '/articleList', component: _article2.default }),
                _react2.default.createElement(_reactRouter.Route, { path: '/newArticle', component: _newArticle2.default }),
                _react2.default.createElement(_reactRouter.Route, { path: '/contact', component: _contact2.default }),
                _react2.default.createElement(_reactRouter.Route, { path: '/manage', component: _manage2.default })
              )
            )
          )
        )
      );
    }
  }]);

  return router;
}(_react2.default.Component);

exports.default = router;
;