import {
  CANCEL_DELETE,
  CONFIRM_DELETE
} from '../constants/action';

const initialState = {
    delete:true,
    cancel_delete:false,
    confirm_delete:false
};

let switchMap = {};

switchMap[CANCEL_DELETE] = (state,action) => {

    return Object.assign({}, state, {
        delete: action.payload.delete,
        cancel_delete:action.payload.cancel_delete
    })
};

switchMap[CONFIRM_DELETE] = (state,action) => {
    return Object.assign({}, state, {
        delete: action.payload.delete,
        confirm_delete:action.payload.confirm_delete
    })
};

export default (state = initialState, action) => {
    if (switchMap[action.type]) {
        return switchMap[action.type](state, action);
    } else {
        return state;
    }
}
