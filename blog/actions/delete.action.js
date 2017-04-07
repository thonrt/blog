import {
  CANCEL_DELETE,
  CONFIRM_DELETE
} from '../constants/action';//引入action常量名

import $http from '../http/service.js';

export function cancelDeleteAction(user){
  return {
    type:CANCEL_DELETE,
    payload:{
      delete:false,
      cancel_delete:true
    }
  }
}

function deleteFailedAction(error){
  return {
    type:CANCEL_FAIL,
    payload:{
      error:error,
      cancel_success:false
    }
  }
}

function deleteSuccessAction(){
  return {
    type:CANCEL_FAIL,
    payload:{
      cancel_success:true
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


  return {
    type:CONFIRM_DELETE,
    payload:{
      delete:false,
      confirm_delete:true
    }
  };
}
