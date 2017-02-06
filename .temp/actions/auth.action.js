'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.setAuthAction = setAuthAction;
exports.destoryAuthAction = destoryAuthAction;

var _action = require('../constants/action');

require('whatwg-fetch');

//引入fetch来进行ajax请求


function setAuthAction(user) {
  return {
    type: _action.SET_AUTH,
    payload: {
      user: user
    }
  };
} //引入action常量名

function destoryAuthAction() {
  return {
    type: _action.DESTORY_AUTH,
    payload: {
      user: user
    }
  };
}