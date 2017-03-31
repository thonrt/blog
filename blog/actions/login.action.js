import {
    LOGIN,
    LOGIN_FAILURE,
    LOGIN_SUCCESS,
    LOGIN_AJAX_START
} from '../constants/action';

import $http from '../http/service.js';

export function loginStartAction(username, password) {
    let postData = {
        username: username,
        password: password
    };
    return (dispatch) => {
        dispatch(loginAjaxStartAction());
        let option = {
            url: "/login",
            method: "POST",
            data: postData
        };
        $http.requestData(option).then(function(response) {
            if (response.error) {
                dispatch(loginFailedAction(response.error));
                return;
            }
            dispatch(loginSuccessAction());
            window.location.hash = "dashBoardIndex";
        }, function(error) {
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

function loginFailedAction(error = '') {
    return {
        type: LOGIN_FAILURE,
        payload: error
    };
}
