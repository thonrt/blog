import {
  CANCEL_UPDATE_ITEM,
  UPDATE_ITEM_SUCESS,
  UPDATE_ITEM_FAIL,
  RESET_POPUP
} from '../constants/action';//引入action常量名

import $http from '../http/service.js';

export function cancelUpdateAction(user){
  return {
    type:CANCEL_UPDATE_ITEM,
    payload:{
      update_home:false,
      cancel_update:true
    }
  }
}

export function resetAction(user){
  return {
    type:RESET_POPUP,
    payload:{
      update_home:true,
      cancel_update:false,
      update_success:false
    }
  }
}

function updateFailedAction(error){
  return {
    type:UPDATE_ITEM_FAIL,
    payload:{
      error:error,
      update_home:false,
      update_success:false
    }
  }
}

function updateSuccessAction(){
  return {
    type:UPDATE_ITEM_SUCESS,
    payload:{
      update_home:false,
      update_success:true
    }
  }
}

export function updateItemAction(data){
  return (dispatch) => {
      let option = {
          url: "/item/"+data.id,
          method: "POST",
          data:data.item
      };
      $http.requestData(option).then(function(response) {
          if (response.error) {
              dispatch(updateFailedAction(response.error));
              return;
          }
          dispatch(updateSuccessAction());

      }, function(error) {
          dispatch(updateFailedAction(error));
      });
  }



}
