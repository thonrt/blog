import React from 'react';
import {connect} from 'react-redux';
import Header from '../../component/Header/header.component.jsx';
import SideBar from '../../component/Sidebar/sidebar.component.jsx';




class DashBoardIndex extends React.Component {


  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>

        <SideBar />
        <div className="layout-contentbox col-lg-10">
          <Header />
          <div className="popup"></div>
          {this.props.children}
        </div>
      </div>
    );
  }
}

export default DashBoardIndex;
