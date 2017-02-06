
import {
  LOGIN,
  LOGIN_FAILURE,
  LOGIN_SUCCESS,
  LOGIN_AJAX_START
} from '../constants/action';

import $http from '../request/service.js';

export function loginStartAction(username, password) {
  return (dispatch)=> {
    dispatch(loginAjaxStartAction());
    let option = {
      url: "/login",
      method:"POST"
    };
    $http.requestData(option).then(function(response){
      dispatch(loginSuccessAction());
      window.location.hash = "dashBoardIndex";
    },function(error){
      dispatch(loginFailedAction());
    });
  }

}

function loginAjaxStartAction() {
    return {
      type: LOGIN_AJAX_START
    }
}

function loginSuccessAction() {
  return {
    type: LOGIN_SUCCESS
  };
}

function loginFailedAction() {
  return {
    type: LOGIN_FAILURE
  };
}
