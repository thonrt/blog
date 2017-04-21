import {
  OPEN_POPUP,
  CLOSE_POPUP
} from '../constants/action';


export function showPopupAction(actionType){
  return {
    type:OPEN_POPUP,
    payload:{
      actionType:actionType
    }
  }
}

export function closePopupAction(actionType){
  return {
    type:CLOSE_POPUP,
    payload:{
      actionType:actionType
    }
  };
}
