import {
  CANCEL_ADD_ITEM,
  ADD_ITEM_SUCESS,
  ADD_ITEM_FAIL,
  RESET_POPUP
} from '../constants/action';//引入action常量名

import $http from '../http/service.js';

export function cancelAddAction(user){
  return {
    type:CANCEL_ADD_ITEM,
    payload:{
      add_home:false,
      cancel_add:true
    }
  }
}

export function resetAction(user){
  return {
    type:RESET_POPUP,
    payload:{
      add_home:true,
      cancel_add:false,
      add_success:false
    }
  }
}

function addFailedAction(error){
  return {
    type:ADD_ITEM_FAIL,
    payload:{
      error:error,
      add_home:false,
      add_success:false
    }
  }
}

function addSuccessAction(){
  return {
    type:ADD_ITEM_SUCESS,
    payload:{
      add_home:false,
      add_success:true
    }
  }
}

export function addItemAction(item){
  return (dispatch) => {
      let option = {
          url: "/item",
          method: "PUT",
          data:item
      };
      $http.requestData(option).then(function(response) {
          if (response.error) {
              dispatch(addFailedAction(response.error));
              return;
          }
          dispatch(addSuccessAction());

      }, function(error) {
          dispatch(addFailedAction(error));
      });
  }



}
