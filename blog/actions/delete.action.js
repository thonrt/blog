import {
  CANCEL_DELETE,
  DELETE_SUCESS,
  DELETE_FAIL,
  RESET_POPUP
} from '../constants/action';//引入action常量名

import $http from '../http/service.js';

export function cancelDeleteAction(user){
  return {
    type:CANCEL_DELETE,
    payload:{
      delete_home:false,
      cancel_delete:true
    }
  }
}

export function resetAction(user){
  return {
    type:RESET_POPUP,
    payload:{
      delete_home:true,
      cancel_delete:false,
      delete_success:false
    }
  }
}

function deleteFailedAction(error){
  return {
    type:DELETE_FAIL,
    payload:{
      error:error,
      delete_home:false,
      delete_success:false
    }
  }
}

function deleteSuccessAction(){
  return {
    type:DELETE_SUCESS,
    payload:{
      delete_home:false,
      delete_success:true
    }
  }
}

export function confirmDeleteAction(dataId){
  return (dispatch) => {
      let option = {
          url: "/item/" + dataId,
          method: "DELETE"
      };
      $http.requestData(option).then(function(response) {
          if (response.error) {
              dispatch(deleteFailedAction(response.error));
              return;
          }
          dispatch(deleteSuccessAction());

      }, function(error) {
          dispatch(deleteFailedAction(error));
      });
  }



}
