import React from "react";
import {cancelAddAction,addItemAction,resetAction} from "../../actions/addItem.action.js";
import {showPopupAction,closePopupAction} from "../../actions/popup.action.js";
import {getAllListAction,setCurrentItemAction} from "../../actions/list.action.js";
export default class popup extends React.Component{

  constructor(props, context) {
    super(props, context);
    this.cancelAddHandle = this.cancelAddHandle.bind(this);
    this.cancelOkHandler = this.cancelOkHandler.bind(this);
    this.addOkHandler = this.addOkHandler.bind(this);
    this.confirmAddHandle = this.confirmAddHandle.bind(this);
  }

//===================update===================================
  cancelAddHandle(e){
    this.props.dispatch(cancelAddAction());
  }

  cancelOkHandler(e){
      this.props.dispatch(closePopupAction());
      this.props.dispatch(resetAction());
  }

  addOkHandler(e){
    this.props.dispatch(closePopupAction());
    this.props.dispatch(resetAction());
  }

  confirmAddHandle(e){

    const item = {
      title:this.refs.title.value,
      webSite: this.refs.webSite.value,
      keyWords: this.refs.keyWords.value
    };
    this.props.dispatch(addItemAction(item));
  }


  render(){
    let cancelAddDisplay = this.props.addItem.cancel_add ?"block":"none";
    let confirmAddDisplay = this.props.addItem.add_success ?"block":"none";
    let addDisplay = this.props.addItem.add_home?"block":"none";
    let popupDisplay = this.props.display;
    let item = this.props.item;
    return (
      <div className="sweet-alert showSweetAlert" style={{display:popupDisplay}}>
        <div className ="cancel_delete" style={{display:cancelAddDisplay}}>
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
        <div className="ok_delete" style={{display:confirmAddDisplay}}>
          <div className="sa-icon sa-info"></div>
            <div className="sa-icon sa-custom"></div>
            <h2>添加成功</h2>
            <div className="sa-button-container">
              <button className="confirm" tabindex="2" onClick={this.addOkHandler}>OK</button>
            </div>
          </div>

          <div className = "home_delete" style={{display:addDisplay}}>
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
                  <button className="cancel" tabindex="2"  onClick={this.cancelAddHandle}>取消</button>
                  <button className="confirm" tabindex="1"  onClick={this.confirmAddHandle}>添加</button>
                 </div>
            </form>
          </div>
      </div>
    )
  }
};
