import {
  CANCEL_ADD_ITEM,
  ADD_ITEM_SUCESS,
  ADD_ITEM_FAIL,
  RESET_POPUP
} from '../constants/action';

const initialState = {
    add_home:true,
    cancel_add:false,
    add_success:false
};

let switchMap = {};

switchMap[CANCEL_ADD_ITEM] = (state,action) => {

    return Object.assign({}, state, {
        add_home: action.payload.add_home,
        cancel_add:action.payload.cancel_add
    })
};


switchMap[RESET_POPUP] = (state,action) => {

    return Object.assign({}, state, {
        add_home: action.payload.add_home,
        cancel_add:action.payload.cancel_add,
        cancel_add:action.payload.cancel_add
    })
};

switchMap[ADD_ITEM_FAIL] = (state,action) => {
    return Object.assign({}, state, {
        add_home: action.payload.add_home,
        add_success:action.payload.add_success
    })
};

switchMap[ADD_ITEM_SUCESS] = (state,action) => {
    return Object.assign({}, state, {
        add_home: action.payload.add_home,
        add_success:action.payload.add_success
    })
};

export default (state = initialState, action) => {
    if (switchMap[action.type]) {
        return switchMap[action.type](state, action);
    } else {
        return state;
    }
}
