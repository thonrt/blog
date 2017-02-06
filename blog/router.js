import React from 'react';
import {Router,Route,IndexRoute,hashHistory,Redirect} from 'react-router';
import {syncHistoryWithStore} from 'react-router-redux';
import {Provider} from 'react-redux';
import Store from './store';
import Login from './routes/Login/login';
import DashBoardIndex from './routes/DashBoardIndex/index';
import App from './component/App/app.component';
import AboutMe from './pages/aboutme';
import Article from './pages/article';
import NewArticle from './pages/newArticle';
import Contact from './pages/contact';
import Manage from './pages/manage';

const history = syncHistoryWithStore(hashHistory,Store);
export default class router extends React.Component{
    constructor(props){
      super(props);
    }

    checkLogin(next,replace){
      let isLogin = Store.getState().login.isLogin;
      if(!isLogin){
        replace("/login");
      }
    }

    render(){
      return(
         /* 利用Provider包裹页面 */
        <Provider store={Store}>
          <Router history={history}>
            <Route path="/" component={App} >
              <IndexRoute component={Login}>
              </IndexRoute>
              <Route path="/dashBoardIndex" component={DashBoardIndex}>
                <IndexRoute component={AboutMe}></IndexRoute>
                <Route path="/aboutMe" component={AboutMe}></Route>
                <Route path="/articleList" component={Article}></Route>
                <Route path="/newArticle" component={NewArticle}></Route>
                <Route path="/contact" component={Contact}></Route>
                <Route path="/manage" component={Manage}></Route>
              </Route>
            </Route>
          </Router>
        </Provider>
      );
    }
 };
