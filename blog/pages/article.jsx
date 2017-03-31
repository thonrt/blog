import React from 'react';
import ReactDom from 'react-dom';
import DeleteArticle from "./operate/delete.jsx"
import {} from "../actions/popup.action"

class SingleArticle extends React.Component{
  handleUpdate(){
        console.log(this);
    this.props.showPopup();

    ReactDom.render(<DeleteArticle />, $('.popup')[0]);
  }
  handleDelete(){}
  render(){
    let article = this.props.article;
    let showPopup = this.props.showPopup;
    return (
      <div className="ibox">
        <div className="ibox-content">
          <div className="pull-left">
            <a href="{article.website}" className="btn-link">
              <h2>{article.title}</h2>
            </a>
          </div>
          <div className="pull-right ibox-operate">
            <button className="btn btn-primary btn-xs" type="button" onClick={()=>{this.props.showPopup()}} >修改</button>
            <button className="btn btn-primary btn-xs" type="button" onClick = {this.handleDelete}>删除</button>
          </div>
        </div>

        <div className="row" style={{clear:"both"}}>
          <div className="col-md-6">
            <span>标签：</span>
            <button className="btn btn-primary btn-xs" type="button">{article.keyWords}</button>
          </div>
        </div>
      </div>);
  }
}

export default class ArticleList extends React.Component{
  showPopup(){
    this.props.dispatch(showPopupAction());
  }
  render(){
    let articleList = [{
      title:"webpack 热更新",
      website:"http://www.cnblogs.com/thonrt/p/6595033.html",
      keyWords:"webpack"
    },{
      title:"webpack 热更新",
      website:"http://www.cnblogs.com/thonrt/p/6595033.html",
      keyWords:"webpack"
    },{
      title:"webpack 热更新",
      website:"http://www.cnblogs.com/thonrt/p/6595033.html",
      keyWords:"webpack"
    },{
      title:"webpack 热更新",
      website:"http://www.cnblogs.com/thonrt/p/6595033.html",
      keyWords:"webpack"
    }];
    console.log(this.state);
    // console.log(state);
    let showPopup = this.showPopup;
    return(
    <div className="col-lg-12">

      {
        articleList.map(function(article){
          return (<SingleArticle article = {article} showPopup = {showPopup}/>);
        })
      }
    </div>
    );
  }
}
