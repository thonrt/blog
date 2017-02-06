'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _redux = require('redux');

var _reactRouterRedux = require('react-router-redux');

var _count = require('./count');

var _count2 = _interopRequireDefault(_count);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// 引入update这个reducer

// 利用combineReducers 合并reducers
exports.default = (0, _redux.combineReducers)({
    update: _count2.default,
    routing: _reactRouterRedux.routerReducer
}); // 将routerReducer一起合并管理
// reducers/index.js