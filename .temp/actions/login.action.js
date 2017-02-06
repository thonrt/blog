'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.loginStartAction = loginStartAction;

var _action = require('../constants/action');

var _service = require('../request/service.js');

var _service2 = _interopRequireDefault(_service);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function loginStartAction(username, password) {
  return function (dispatch) {
    dispatch(loginAjaxStartAction());
    var option = {
      url: "/login",
      method: "POST"
    };
    _service2.default.requestData(option).then(function (response) {
      dispatch(loginSuccessAction());
      window.location.hash = "dashBoardIndex";
    }, function (error) {
      dispatch(loginFailedAction());
    });
  };
}

function loginAjaxStartAction() {
  return {
    type: _action.LOGIN_AJAX_START
  };
}

function loginSuccessAction() {
  return {
    type: _action.LOGIN_SUCCESS
  };
}

function loginFailedAction() {
  return {
    type: _action.LOGIN_FAILURE
  };
}