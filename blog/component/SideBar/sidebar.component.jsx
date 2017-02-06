import React from 'react';
import { Link } from 'react-router';
import Store from '../../store';
import sidebarList  from '../../config/sidebar.config';
import {showPopupAction,closePopupAction} from '../../actions/popup.action';

const createMenuItem = function () {
  var sideBarDom = [];
  for(let i=0,l=sidebarList.length;i<l;i++){
    let singleSidebar = sidebarList[i];
    sideBarDom.push(<li><Link to={singleSidebar.link}>{singleSidebar.title}</Link></li>);
  }
  return sideBarDom;
}



class Sidebar extends React.Component{


  shouldComponentUpdate(nextProps){
    console.log(nextProps);
  }

  showPopup(e){
    e.preventDefault();
    Store.dispatch(showPopupAction());
  }

  render() {
    let sideBarDom = createMenuItem();
    return (
      <div className="layout-sidebar">
        <div className="layout-title">
          <img className="layout-logo img-circle" src="../../../blog/images/user.jpg"/>
          <div className="layout-title-text" onClick = {this.showPopup}>
            <strong>快饿死的鱼</strong>
            <span className="glyphicon glyphicon-chevron-down"></span>
          </div>
        </div>
        <div style={{display:'none'}}></div>
        <div className="layout-menu">
          <ul role="menu" className="nav">
            {sideBarDom}
          </ul>
        </div>
      </div>
    );
  }
}

Sidebar.propTypes={
  showingPopup: React.PropTypes.bool.isRequired
};

export default Sidebar;
