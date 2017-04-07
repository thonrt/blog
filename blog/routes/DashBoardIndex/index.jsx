import React from 'react';
import {connect} from 'react-redux';
import Header from '../../component/Header/header.component.jsx';
import SideBar from '../../component/Sidebar/sidebar.component.jsx';
import Popup from '../../pages/popup.jsx';




class DashBoardIndex extends React.Component {

  constructor(props) {
    super(props);
  }


  render() {
    let display = this.props.popup.showingPopup ?"block":"none";

    return (
      <div>
        <SideBar />
        <div className="layout-contentbox col-lg-10">
          <Header />
          <div className="popup" style={{display:display}}>
            <Popup />
          </div>
          {this.props.children}
        </div>
      </div>
    );
  }
}
// 获取state中的lists值
const mapStateToProps = state => {
    return {
        popup:state.popup
    }
}


export default connect(mapStateToProps)(DashBoardIndex)
