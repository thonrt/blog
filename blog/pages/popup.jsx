import React from "react";
import { connect } from 'react-redux';
import DeletePopup from './popup/delete_popup.jsx';
import UpdatePopup from './popup/update_popup.jsx';
import AddPopup from './popup/add_popup.jsx';

import {getAllListAction,setCurrentItemAction} from "../actions/list.action.js";
class popup extends React.Component{

  render(){
    let actionType = this.props.actionType;
    let deleteDisplay= "none";
    let updateDisplay= "none";
    let addDisplay = "none";
    if(actionType && actionType === "delete"){
      deleteDisplay = "block";
    }
    if(actionType && actionType === "update"){
      updateDisplay = "block";
    }

    if(actionType && actionType === "add"){
      addDisplay = "block";
    }

    return (
      <div>
        <DeletePopup display={deleteDisplay} delete = {this.props.delete} item = {this.props.item} dispatch = {this.props.dispatch}/>
        <UpdatePopup display={updateDisplay} updateItem = {this.props.updateItem} item = {this.props.item} dispatch = {this.props.dispatch}/>
        <AddPopup display={addDisplay} addItem = {this.props.addItem} dispatch = {this.props.dispatch}/>
      </div>
    )
  }
};


// 获取state中的lists值
const mapStateToProps = state => {
    return {
        delete: state.delete,
        item:state.list.item,
        addItem: state.addItem,
        updateItem: state.updateItem
    }
}


export default connect(mapStateToProps)(popup)
