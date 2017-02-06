import {
  LOGIN_AJAX_START,
  LOGIN_SUCCESS,
  LOGIN_FAILURE
} from '../constants/action';

const initialState = {
  isLogin: false
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

switchMap[LOGIN_FAILURE] = (state) => {
  return Object.assign({}, state, {
    isLogin: false
  })
};

export default (state = initialState, action) => {
  if (switchMap[action.type]) {
    return switchMap[action.type](state, action);
  } else {
    return state;
  }
}
