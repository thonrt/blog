import {
  CANCEL_DELETE,
  DELETE_FAIL,
  DELETE_SUCESS,
  RESET_POPUP
} from '../constants/action';

const initialState = {
    get_all_list:false,
    delete_home:true,
    cancel_delete:false,
    delete_success:false
};

let switchMap = {};

switchMap[CANCEL_DELETE] = (state,action) => {

    return Object.assign({}, state, {
        delete_home: action.payload.delete_home,
        cancel_delete:action.payload.cancel_delete
    })
};


switchMap[RESET_POPUP] = (state,action) => {

    return Object.assign({}, state, {
        delete_home: action.payload.delete_home,
        cancel_delete:action.payload.cancel_delete,
        delete_success:action.payload.delete_success
    })
};

switchMap[DELETE_FAIL] = (state,action) => {
    return Object.assign({}, state, {
        delete_home: action.payload.delete_home,
        delete_success:action.payload.delete_success
    })
};

switchMap[DELETE_SUCESS] = (state,action) => {
    return Object.assign({}, state, {
        delete_home: action.payload.delete_home,
        delete_success:action.payload.delete_success,
        get_all_list:action.payload.get_all_list
    })
};

export default (state = initialState, action) => {
    if (switchMap[action.type]) {
        return switchMap[action.type](state, action);
    } else {
        return state;
    }
}
