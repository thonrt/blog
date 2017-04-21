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
    showingPopup:true,
    actionType: action.payload.actionType
  });
};

switchMap[CLOSE_POPUP] = (state,action) =>{
  return Object.assign({},state,{
    showingPopup:false,
    actionType: action.payload.actionType
  });
};


export default (state = initialState, action) => {
  if (switchMap[action.type]) {
    return switchMap[action.type](state, action);
  } else {
    return state;
  }
}
