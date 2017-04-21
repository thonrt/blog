import {
  GET_ALL_LIST_SUCCESS,
  GET_ALL_LIST_FAILED,
  CURRETN_ITEM
} from '../constants/action';

const initialState = {
    list: [],
    error: "",
    dataId:null,
    get_all_list:true
};

let switchMap = {};

switchMap[GET_ALL_LIST_SUCCESS] = (state,action) => {

    return Object.assign({}, state, {
        list: action.payload.list,
        get_all_list: action.payload.get_all_list
    })
};

switchMap[GET_ALL_LIST_FAILED] = (state,action) => {
    return Object.assign({}, state, {
        error: action.payload.error,
        get_all_list: action.payload.get_all_list
    })
};

switchMap[CURRETN_ITEM] = (state,action) => {
    return Object.assign({}, state, {
        item: action.payload.item
    })
};

export default (state = initialState, action) => {
    if (switchMap[action.type]) {
        return switchMap[action.type](state, action);
    } else {
        return state;
    }
}
