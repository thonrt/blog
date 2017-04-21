import React from "react";
import {cancelUpdateAction,updateItemAction,resetAction} from "../../actions/updateItem.action.js";
import {showPopupAction,closePopupAction} from "../../actions/popup.action.js";
import {getAllListAction,setCurrentItemAction} from "../../actions/list.action.js";
export default class popup extends React.Component{

  constructor(props, context) {
    super(props, context);
    this.cancelUpdateHandle = this.cancelUpdateHandle.bind(this);
    this.cancelOkHandler = this.cancelOkHandler.bind(this);
    this.updateOkHandler = this.updateOkHandler.bind(this);
    this.confirmUpdateHandle = this.confirmUpdateHandle.bind(this);
  }

//===================update===================================
  cancelUpdateHandle(e){
    this.props.dispatch(cancelUpdateAction());
  }

  cancelOkHandler(e){
      this.props.dispatch(closePopupAction());
      this.props.dispatch(resetAction());
  }

  updateOkHandler(e){
    this.props.dispatch(closePopupAction());
    this.props.dispatch(resetAction());
  }

  confirmUpdateHandle(e){

    const data = {
      id: this.props.item.id,
      item:{
        title:this.refs.title.value,
        url: this.refs.webSite.value,
        keyWords: this.refs.keyWords.value
      }
    };
    this.props.dispatch(updateItemAction(data));
  }


  render(){
    let cancelUpdateDisplay = this.props.updateItem.cancel_update ?"block":"none";
    let confirmUpdateDisplay = this.props.updateItem.update_success ?"block":"none";
    let updateDisplay = this.props.updateItem.update_home?"block":"none";
    let popupDisplay = this.props.display;
    let item = this.props.item;
    return (
      <div className="sweet-alert showSweetAlert" style={{display:popupDisplay}}>
        <div className ="cancel_delete" style={{display:cancelUpdateDisplay}}>
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
        <div className="ok_delete" style={{display:confirmUpdateDisplay}}>
          <div className="sa-icon sa-info"></div>
            <div className="sa-icon sa-custom"></div>
            <h2>修改成功</h2>
            <p>您已经永久修改了这条信息！</p>
            <div className="sa-button-container">
              <button className="confirm" tabindex="2" onClick={this.updateOkHandler}>OK</button>
            </div>
          </div>

          <div className = "home_delete" style={{display:updateDisplay}}>
            <form role="form">
                <div className="form-group">
                    <label>标题</label>
                    <input ref="title" type="text" placeholder="文章标题" className="form-control" />
                </div>
                <div className="form-group">
                    <label>链接</label>
                    <input ref="webSite" type="text" placeholder="文章链接" className="form-control" />
                </div>
                <div className="form-group">
                    <label>标签</label>
                    <input ref="keyWords" type="text" placeholder="文章标签" className="form-control" />
                </div>
                <div className="sa-button-container">
                  <button className="cancel" tabindex="2"  onClick={this.cancelUpdateHandle}>取消</button>
                  <button className="confirm" tabindex="1"  onClick={this.confirmUpdateHandle}>修改</button>
                 </div>
            </form>
          </div>
      </div>
    )
  }
};
