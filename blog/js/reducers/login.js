import {
  LOGIN_AJAX_START,
  LOGIN_SUCCESS,
  LOGIN_FAILURE
} from '../constants/actions';

const initialState = {
  loading: false
};

let switchMap = {};

switchMap[LOGIN_AJAX_START] = (state) => {
  return Object.assign({}, state, {
    loading: true
  })
};

switchMap[LOGIN_SUCCESS] = (state) => {
  return Object.assign({}, state, {
    loading: false
  })
};

switchMap[LOGIN_FAILURE] = (state) => {
  return Object.assign({}, state, {
    loading: false
  })
};

export default (state = initialState, action) => {
  if (switchMap[action.type]) {
    return switchMap[action.type](state, action);
  } else {
    return state;
  }
}
