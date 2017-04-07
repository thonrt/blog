import React from "react";
import {cancelDeleteAction,confirmDeleteAction} from "../actions/delete.action.js";
import {showPopupAction,closePopupAction} from "../actions/popup.action.js";
import { connect } from 'react-redux';


class popup extends React.Component{

  constructor(props, context) {
    super(props, context);
    this.cancelDeleteHandle = this.cancelDeleteHandle.bind(this);
    this.cancelOkHandler = this.cancelOkHandler.bind(this);
    this.confirmDeleteHandle = this.confirmDeleteHandle.bind(this);
  }

  cancelDeleteHandle(e){
    this.props.dispatch(cancelDeleteAction());
  }

  cancelOkHandler(e){
    this.props.dispatch(closePopupAction());
  }

  confirmDeleteHandle(e){
    let dataId = this.props.dataId;
    this.props.dispatch(confirmDeleteAction(dataId));
  }

  render(){
    let cancelDeleteDisplay = this.props.cancel_delete ?"block":"none";
    let confirmDeleteDisplay = this.props.confirm_delete ?"block":"none";
    let deleteDisplay = this.props.delete?"block":"none";
    return (
      <div className="sweet-alert showSweetAlert visible" >
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
          <fieldset>
            <input type="text" tabindex="3" placeholder="" />
            <div className="sa-input-error"></div>
          </fieldset>
          <div className="sa-button-container">
            <button className="confirm" tabindex="1" onClick={this.cancelOkHandler}>OK</button>
          </div>
        </div>

        <div className="ok_delete" style={{display:confirmDeleteDisplay}}>
          <div className="sa-icon sa-info"></div>
            <div className="sa-icon sa-custom"></div>
            <h2>删除成功</h2>
            <p>您已经永久删除了这条信息！</p>
            <fieldset>
              <input type="text" tabindex="3" placeholder="" />
              <div className="sa-input-error"></div>
            </fieldset>
            <div className="sa-button-container">
              <button className="confirm" tabindex="2">OK</button>
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
          <fieldset>
            <input type="text" tabindex="3" placeholder="" />
            <div className="sa-input-error"></div>
          </fieldset>
          <div className="sa-button-container">
            <button className="cancel" tabindex="2" style={{display:"inline-block"}} onClick={this.cancelDeleteHandle}>让我再考虑一下…</button>
            <button className="confirm" tabindex="1" style={{display:"inline-block"}} onClick={this.confirmDeleteHandle}>是的，我要删除！</button>
           </div>
        </div>
      </div>
    )
  }
};


// 获取state中的lists值
const mapStateToProps = state => {
    return {
        delete: state.delete.delete,
        cancel_delete:state.delete.cancel_delete,
        confirm_delete:state.delete.confirm_delete,
        dataId:state.list.dataId
    }
}


export default connect(mapStateToProps)(popup)
