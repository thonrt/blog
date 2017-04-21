import {
  CANCEL_UPDATE_ITEM,
  UPDATE_ITEM_SUCESS,
  UPDATE_ITEM_FAIL,
  RESET_POPUP
} from '../constants/action';

const initialState = {
    update_home:true,
    cancel_update:false,
    update_success:false
};

let switchMap = {};

switchMap[CANCEL_UPDATE_ITEM] = (state,action) => {

    return Object.assign({}, state, {
        update_home: action.payload.update_home,
        cancel_update:action.payload.cancel_update
    })
};


switchMap[RESET_POPUP] = (state,action) => {

    return Object.assign({}, state, {
        update_home: action.payload.update_home,
        update_success:action.payload.update_success,
        cancel_update:action.payload.cancel_update
    })
};

switchMap[UPDATE_ITEM_FAIL] = (state,action) => {
    return Object.assign({}, state, {
        update_home: action.payload.update_home,
        update_success:action.payload.update_success
    })
};

switchMap[UPDATE_ITEM_SUCESS] = (state,action) => {
    return Object.assign({}, state, {
        update_home: action.payload.update_home,
        update_success:action.payload.update_success
    })
};

export default (state = initialState, action) => {
    if (switchMap[action.type]) {
        return switchMap[action.type](state, action);
    } else {
        return state;
    }
}
