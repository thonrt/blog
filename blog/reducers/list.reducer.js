import {
  GET_ALL_LIST_SUCCESS,
  GET_ALL_LIST_FAILED
} from '../constants/action';

const initialState = {
    list: [],
    error: ""
};

let switchMap = {};

switchMap[GET_ALL_LIST_SUCCESS] = (state) => {
    return Object.assign({}, state, {
        list: state.list
    })
};

switchMap[GET_ALL_LIST_FAILED] = (state) => {
    return Object.assign({}, state, {
        error: state.error
    })
};

export default (state = initialState, action) => {
    if (switchMap[action.type]) {
        return switchMap[action.type](state, action);
    } else {
        return state;
    }
}
