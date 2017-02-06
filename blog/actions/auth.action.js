import {
  SET_AUTH,
  DESTORY_AUTH
} from '../constants/action';//引入action常量名

import 'whatwg-fetch' //引入fetch来进行ajax请求


export function setAuthAction(user){
  return {
    type:SET_AUTH,
    payload:{
      user:user
    }
  }
}

export function destoryAuthAction(){
  return {
    type:DESTORY_AUTH,
    payload:{
      user:user
    }
  };
}
