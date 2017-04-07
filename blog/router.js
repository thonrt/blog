import React from 'react';
import {Router,Route,IndexRoute,hashHistory,Redirect} from 'react-router';
import {syncHistoryWithStore} from 'react-router-redux';
import {Provider} from 'react-redux';
import Store from './store';
import Login from './routes/Login/login';
import DashBoardIndex from './routes/DashBoardIndex/index.jsx';
import App from './component/App/app.component.jsx';
import AboutMe from './pages/aboutme.jsx';
import Article from './pages/article.jsx';
import NewArticle from './pages/newArticle.jsx';
import Contact from './pages/contact.jsx';
import Manage from './pages/manage.jsx';
import Delete from './pages/operate/delete.jsx';

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
