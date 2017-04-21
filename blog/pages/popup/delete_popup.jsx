import React from "react";
import {cancelDeleteAction,itemDeleteAction,resetAction} from "../../actions/delete.action.js";
import {showPopupAction,closePopupAction} from "../../actions/popup.action.js";
import {getAllListAction,setCurrentItemAction} from "../../actions/list.action.js";
export default class popup extends React.Component{

  constructor(props, context) {
    super(props, context);
    this.cancelDeleteHandle = this.cancelDeleteHandle.bind(this);
    this.cancelOkHandler = this.cancelOkHandler.bind(this);
    this.confirmDeleteHandle = this.confirmDeleteHandle.bind(this);
    this.deleteOkHandler = this.deleteOkHandler.bind(this);
  }

//===================delete===================================
  cancelDeleteHandle(e){
    this.props.dispatch(cancelDeleteAction());
  }

  cancelOkHandler(e){
      this.props.dispatch(closePopupAction());
      this.props.dispatch(resetAction());
  }

  deleteOkHandler(e){
    this.props.dispatch(closePopupAction());
    this.props.dispatch(resetAction());
  }

  confirmDeleteHandle(e){
    let dataId = this.props.item.id;
    this.props.dispatch(itemDeleteAction(dataId));
  }



  render(){
    let cancelDeleteDisplay = this.props.delete.cancel_delete ?"block":"none";
    let confirmDeleteDisplay = this.props.delete.delete_success ?"block":"none";
    let deleteDisplay = this.props.delete.delete_home?"block":"none";
    let popupDisplay = this.props.display;
    return (
      <div className="sweet-alert showSweetAlert" style={{display:popupDisplay}}>
        <div className ="cancel_delete" style={{display:cancelDeleteDisplay}}>
          <div className="sa-icon sa-success">
            <span className="sa-line sa-tip"></span>
            <span className="sa-line sa-long"></span>

            <div className="sa-placeholder"></div>
            <div className="sa-fix"></div>
          </div>
          <div className="sa-icon sa-custom"></div>
          <h2>已取消</h2>
          <p>您取消了删除操作！</p>
          <div className="sa-button-container">
            <button className="confirm" tabindex="1" onClick={this.cancelOkHandler}>OK</button>
          </div>
        </div>

        <div className="ok_delete" style={{display:confirmDeleteDisplay}}>
          <div className="sa-icon sa-info"></div>
            <div className="sa-icon sa-custom"></div>
            <h2>删除成功</h2>
            <p>您已经永久删除了这条信息！</p>
            <div className="sa-button-container">
              <button className="confirm" tabindex="2" onClick={this.deleteOkHandler}>OK</button>
            </div>
        </div>

        <div className = "home_delete" style={{display:deleteDisplay}}>
          <div className="sa-icon sa-warning pulseWarning">
            <span className="sa-body pulseWarningIns"></span>
            <span className="sa-dot pulseWarningIns"></span>
          </div>
          <div className="sa-icon sa-custom"></div>
          <h2>您确定要删除这条信息吗</h2>
          <p>删除后将无法恢复，请谨慎操作！</p>
          <div className="sa-button-container">
            <button className="cancel" tabindex="2" style={{display:"inline-block"}} onClick={this.cancelDeleteHandle}>让我再考虑一下…</button>
            <button className="confirm" tabindex="1" style={{display:"inline-block"}} onClick={this.confirmDeleteHandle}>是的，我要删除！</button>
           </div>
        </div>
      </div>
    )
  }
};
