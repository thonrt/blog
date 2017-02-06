'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _action = require('../constants/action');

var initialState = {
  isLogin: false
};

var switchMap = {};

switchMap[_action.LOGIN_AJAX_START] = function (state) {
  return Object.assign({}, state, {
    isLogin: false
  });
};

switchMap[_action.LOGIN_SUCCESS] = function (state) {
  return Object.assign({}, state, {
    isLogin: true
  });
};

switchMap[_action.LOGIN_FAILURE] = function (state) {
  return Object.assign({}, state, {
    isLogin: false
  });
};

exports.default = function () {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : initialState;
  var action = arguments[1];

  if (switchMap[action.type]) {
    return switchMap[action.type](state, action);
  } else {
    return state;
  }
};