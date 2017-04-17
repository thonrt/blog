import React from 'react';
import ReactDom from 'react-dom';
import DeleteArticle from "./operate/delete.jsx"
import {showPopupAction,closePopupAction} from "../actions/popup.action"
import {getAllListAction,setCurrentItemAction} from "../actions/list.action.js";
import { connect } from 'react-redux';

class SingleArticle extends React.Component{


  handleUpdate(dataId){

    }

  handleDelete(e){
    var dataId = e.target.getAttribute('data-id');
    this.props.dispatch(setCurrentItemAction(dataId));
    this.props.showPopup();
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

            <button className="btn btn-primary btn-xs" type="button" onClick={()=>{this.handleUpdate()}} >修改</button>
            <button className="btn btn-primary btn-xs" type="button" data-id={dataId} onClick={(e)=>{this.handleDelete(e)}}>删除</button>
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


  //插入真是DOM之前调用
  componentWillMount(){
    this.props.dispatch(getAllListAction());
  }

  componentWillReceiveProps(nextProps){
    let state = this.state || nextProps;
    if(state.delete.delete_success){
      this.props.dispatch(getAllListAction());
      this.setState({delete:{delete_success:false}});
    }

  }

  shouldComponentUpdate(nextProps,nextState){
    let listLength = this.props.list.list.length;
    let nextListLength = nextProps.list.list.length;
    if(listLength !== nextListLength){
      return true;
    }
    return false;
  }

  showPopup(){
    this.dispatch(showPopupAction());
  }
  render(){
    let articleList = this.props.list.list;
    let showPopup = this.showPopup;
    let dispatch = this.props.dispatch;
    let deleteOption = this.props.delete;

    if(articleList.length <1){
      return null;
    }
    return(
    <div className="col-lg-12">

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
        dataId:state.dataId
    }
}


export default connect(mapStateToProps)(ArticleList)
