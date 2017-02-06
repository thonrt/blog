'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _action = require('../constants/action');

var initialState = {
  showingPopup: false
};

var switchMap = {};

switchMap[_action.OPEN_POPUP] = function (state, action) {
  return Object.assign({}, state, {
    showingPopup: true
  });
};

switchMap[_action.CLOSE_POPUP] = function (state, action) {
  return Object.assign({}, state, {
    showingPopup: false
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