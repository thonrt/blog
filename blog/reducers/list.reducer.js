import {
  GET_ALL_LIST_SUCCESS,
  GET_ALL_LIST_FAILED,
  CURRETN_ITEM
} from '../constants/action';

const initialState = {
    list: [],
    error: "",
    dataId:null
};

let switchMap = {};

switchMap[GET_ALL_LIST_SUCCESS] = (state,action) => {

    return Object.assign({}, state, {
        list: action.payload.list
    })
};

switchMap[GET_ALL_LIST_FAILED] = (state,action) => {
    return Object.assign({}, state, {
        error: action.payload.error
    })
};

switchMap[CURRETN_ITEM] = (state,action) => {
    return Object.assign({}, state, {
        dataId: action.payload.dataId
    })
};

export default (state = initialState, action) => {
    if (switchMap[action.type]) {
        return switchMap[action.type](state, action);
    } else {
        return state;
    }
}
