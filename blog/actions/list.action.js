import {
    GET_ALL_LIST,
    GET_ALL_LIST_SUCCESS,
    GET_ALL_LIST_FAILED
} from '../constants/action';

import $http from '../http/service.js';

export function getAllListAction() {

    return (dispatch) => {
        let option = {
            url: "/get_all_list",
            method: "get"
        };
        $http.requestData(option).then(function(response) {
            if (response.error) {
                dispatch(loginFailedAction(response.error));
                return;
            }
            dispatch(getAllListSuccessAction(response.data));

        }, function(error) {
            dispatch(getAllListFailedAction(error));
        });
    }

}

function getAllListSuccessAction(list = []) {
    return {
        type: GET_ALL_LIST_SUCCESS,
        payload:{
          list:list
        }
    };
}

function getAllListFailedAction(error = '') {
    return {
        type: GET_ALL_LIST_FAILED,
        payload: error
    };
}
