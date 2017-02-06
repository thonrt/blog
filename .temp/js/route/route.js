'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactRouter = require('react-router');

var _containers = require('./containers');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// 引入各容器组件

// 引入react
exports.default = _react2.default.createElement(
    _reactRouter.Route,
    { path: '/', component: _containers.App },
    _react2.default.createElement(_reactRouter.IndexRoute, { component: _containers.Home }),
    _react2.default.createElement(_reactRouter.Route, { path: 'index', component: _containers.Home }),
    _react2.default.createElement(_reactRouter.Route, { path: 'foo', component: _containers.Foo }),
    _react2.default.createElement(_reactRouter.Route, { path: 'bar', component: _containers.Bar }),
    _react2.default.createElement(_reactRouter.Route, { path: 'antd', component: _containers.Antd })
); // 引入react路由