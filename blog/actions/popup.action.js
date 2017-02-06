import {
  OPEN_POPUP,
  CLOSE_POPUP
} from '../constants/action';


export function showPopupAction(){
  return {
    type:OPEN_POPUP
  }
}

export function closePopupAction(){
  return {
    type:CLOSE_POPUP
  };
}
