import React from 'react';
import ReactDom from 'react-dom';
import DeleteArticle from "./operate/delete.jsx"
import {showPopupAction,closePopupAction} from "../actions/popup.action"
import {getAllListAction,setCurrentItemAction} from "../actions/list.action.js";
import { connect } from 'react-redux';

class SingleArticle extends React.Component{



  handleAction(e){
    let dataId = this.props.article.id;
    let actionType = e.target.getAttribute('type');
    this.props.dispatch(setCurrentItemAction(this.props.article));
    this.props.showPopup(actionType);
  }
  render(){
    let article = this.props.article;
    let dataId = article.id;
    return (
      <div className="ibox article_list" data-id={dataId}>
        <div className="ibox-content">
          <div className="pull-left">
            <a href="{article.website}" className="btn-link">
              <h2>{article.title}</h2>
            </a>
          </div>
          <div className="pull-right ibox-operate">

            <button className="btn btn-primary btn-xs" type="button" type="update" onClick={(e)=>{this.handleAction(e)}} >修改</button>
            <button className="btn btn-primary btn-xs" type="button" type="delete" onClick={(e)=>{this.handleAction(e)}}>删除</button>
          </div>
          <div className="row" style={{clear:"both"}}>
            <div className="col-md-6">
              <span>标签：</span>
              <button className="btn btn-primary btn-xs" type="button">{article.keyWords}</button>
            </div>
        </div>


        </div>
      </div>);
  }
}

class ArticleList extends React.Component{

  constructor(props, context) {
    super(props, context);
    this.addItemHandle = this.addItemHandle.bind(this);
  }


  //插入真是DOM之前调用
  componentWillMount(){
    this.props.dispatch(getAllListAction());
  }

  componentWillReceiveProps(nextProps){
    let state = this.state || nextProps;
    if(state.delete && state.delete.delete_success){
      this.props.dispatch(getAllListAction());
    }

    if(state.updateItem&&state.updateItem.update_success){
      this.props.dispatch(getAllListAction());
    }


    if(state.addItem&&state.addItem.add_success){
      this.props.dispatch(getAllListAction());
    }

  }

  shouldComponentUpdate(nextProps,nextState){
    if(nextProps.list.get_all_list){
      return true;
    }
    return false;
  }

  showPopup(actionType){
    this.dispatch(showPopupAction(actionType));
  }

  addItemHandle(e){
    let actionType = e.currentTarget.getAttribute('type');
    this.props.dispatch(showPopupAction(actionType));
  }

  render(){
    let articleList = this.props.list.list;
    let showPopup = this.showPopup;
    let dispatch = this.props.dispatch;
    let deleteOption = this.props.delete;

    return(
    <div className="col-lg-12">
      <div className="mail-tools tooltip-demo m-t-md">
          <div className="btn-group pull-right">
            <button className="btn btn-white btn-sm">
                <i className="fa fa-arrow-left">刷新</i>
              </button>
              <button className="btn btn-white btn-sm" type="add" onClick={this.addItemHandle}>
                <i className="fa fa-arrow-right">添加</i>
              </button>
            </div>
      </div>
      {
        articleList.map((item,index) =>{
          return (<SingleArticle article = {item} showPopup = {showPopup} dispatch={dispatch} key ={index} deleteOption={deleteOption}/>);
        })
      }
    </div>
    );
  }
}


// 验证组件中的参数类型
ArticleList.propTypes = {
    dispatch: React.PropTypes.func.isRequired
}

// 获取state中的lists值
const mapStateToProps = state => {
    return {
        list: state.list,
        popup:state.popup,
        delete:state.delete,
        dataId:state.dataId,
        updateItem: state.updateItem,
        addItem: state.addItem
    }
}


export default connect(mapStateToProps)(ArticleList)
