'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _redux = require('redux');

var _reactRouterRedux = require('react-router-redux');

var _reduxThunk = require('redux-thunk');

var _reduxThunk2 = _interopRequireDefault(_reduxThunk);

var _reduxLogger = require('redux-logger');

var _reduxLogger2 = _interopRequireDefault(_reduxLogger);

var _login = require('./reducers/login.reducer');

var _login2 = _interopRequireDefault(_login);

var _popup = require('./reducers/popup.reducer');

var _popup2 = _interopRequireDefault(_popup);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

//调用日志打印方法
var loggerMiddleware = (0, _reduxLogger2.default)();
//创建一个中间件集合
// 利用combineReducers 合并reducers
var middleware = [_reduxThunk2.default, loggerMiddleware];
var rootReducer = (0, _redux.combineReducers)({
  login: _login2.default,
  popup: _popup2.default,
  routing: _reactRouterRedux.routerReducer
});

var Store = (0, _redux.createStore)(rootReducer, _redux.applyMiddleware.apply(undefined, middleware));

exports.default = Store;