import {
    LOGIN_AJAX_START,
    LOGIN_SUCCESS,
    LOGIN_FAILURE
} from '../constants/action';

const initialState = {
    isLogin: false,
    error: ""
};

let switchMap = {};

switchMap[LOGIN_AJAX_START] = (state) => {
    return Object.assign({}, state, {
        isLogin: false
    })
};

switchMap[LOGIN_SUCCESS] = (state) => {
    return Object.assign({}, state, {
        isLogin: true
    })
};

switchMap[LOGIN_FAILURE] = (state, action) => {
    return Object.assign({}, state, {
        isLogin: false,
        error: action.payload
    })
};

export default (state = initialState, action) => {
    if (switchMap[action.type]) {
        return switchMap[action.type](state, action);
    } else {
        return state;
    }
}