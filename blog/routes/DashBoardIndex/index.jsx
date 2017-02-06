import React from 'react';
import {connect} from 'react-redux';
import Header from '../../component/Header/header.component';
import SideBar from '../../component/Sidebar/sidebar.component';




class DashBoardIndex extends React.Component {


  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <Header />
        <SideBar />
        <div className="layout-contentbox">
          {this.props.children}
        </div>
      </div>
    );
  }
}

export default DashBoardIndex;
