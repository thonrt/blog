import {
  OPEN_POPUP,
  CLOSE_POPUP
} from '../constants/action';

const initialState={
  showingPopup:false
};

let switchMap = {};

switchMap[OPEN_POPUP] = (state,action) =>{
  return Object.assign({},state,{
    showingPopup:true
  });
};

switchMap[CLOSE_POPUP] = (state,action) =>{
  return Object.assign({},state,{
    showingPopup:false
  });
};


export default (state = initialState, action) => {
  if (switchMap[action.type]) {
    return switchMap[action.type](state, action);
  } else {
    return state;
  }
}
