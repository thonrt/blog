import {createStore,combineReducers,applyMiddleware} from 'redux';// 利用combineReducers 合并reducers
import {routerReducer} from 'react-router-redux';
import thunkMiddleware from 'redux-thunk';
import createLogger from 'redux-logger';
import login from './reducers/login.reducer';
import popup from './reducers/popup.reducer';
import list from './reducers/list.reducer';
import deleteReducer from "./reducers/delete.reducer";
import addReducer from "./reducers/addItem.reducer";
import updateReducer from "./reducers/updateItem.reducer";

//调用日志打印方法
const loggerMiddleware = createLogger();
//创建一个中间件集合
const middleware = [thunkMiddleware,loggerMiddleware];
const rootReducer = combineReducers({
  login:login,
  popup:popup,
  list:list,
  delete:deleteReducer,
  addItem:addReducer,
  updateItem:updateReducer,
  routing: routerReducer
})


let Store = createStore(
  rootReducer,
  applyMiddleware(...middleware)
);

export default Store;
