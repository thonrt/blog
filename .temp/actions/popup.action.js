'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.showPopupAction = showPopupAction;
exports.closePopupAction = closePopupAction;

var _action = require('../constants/action');

function showPopupAction() {
  return {
    type: _action.OPEN_POPUP
  };
}

function closePopupAction() {
  return {
    type: _action.CLOSE_POPUP
  };
}