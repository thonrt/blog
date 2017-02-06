'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _actions = require('../constants/actions');

var initialState = {
  loading: false
};

var switchMap = {};

switchMap[_actions.LOGIN_AJAX_START] = function (state) {
  return Object.assign({}, state, {
    loading: true
  });
};

switchMap[_actions.LOGIN_SUCCESS] = function (state) {
  return Object.assign({}, state, {
    loading: false
  });
};

switchMap[_actions.LOGIN_FAILURE] = function (state) {
  return Object.assign({}, state, {
    loading: false
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