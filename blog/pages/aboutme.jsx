import React from 'react';
import { connect } from 'react-redux';
import userImg from "../../statics/images/user.jpg";
import {getAllListAction} from "../actions/list.action.js";

class LeftPart extends React.Component{
  render(){
    return (
      <div className="float-e-margins col-lg-4" >
        <div className="ibox-title">
          <h5>个人资料</h5>
        </div>
        <div className="ibox-content no-padding border-left-right">
          <img alt="image" className="img-responsive" src={userImg} />
        </div>
        <div className="ibox-content profile-content">
            <h4><strong>Bella-Duan</strong></h4>
            <p><i className="fa fa-map-marker"></i> 深圳市福田东海国际中心A座7L</p>
            <h5>关于我</h5>
            <ul>
              <li>熟悉W3C标准，熟练掌握html+css，对表现与数据分离、Web语义化等有深刻理解</li>
              <li>熟练掌握Ajax,JavaScript,Jquery等前端技术。掌握前端面向对象编程思想</li>
              <li>熟练使用backbone前端框架，了解react,vue等前端主流框架</li>
              <li>了解网页seo,熟悉页面架构和性能优化</li>
              <li>了解nodejs模块的使用</li>
            </ul>
        <div className="user-button">
          <div className="row">
            <div className="col-sm-6">
                <button type="button" className="btn btn-primary btn-sm btn-block"><i className="fa fa-envelope"></i> 发送消息</button>
            </div>
            <div className="col-sm-6">
                  <button type="button" className="btn btn-default btn-sm btn-block"><i className="fa fa-coffee"></i> 赞助</button>
            </div>
          </div>
        </div>
      </div>
    </div>
);
  }
}
class RightPart extends React.Component{

//插入真是DOM之前调用
  componentWillMount(){
    this.props.dispatch(getAllListAction());
  }

  render(){
  let list = this.props.list;
    return (

      <div className="float-e-margins col-lg-8">
                    <div className="ibox-title">
                        <h5>最新动态</h5>
                        <div className="ibox-tools">
                            <a className="collapse-link">
                                <i className="fa fa-chevron-up"></i>
                            </a>
                            <a className="dropdown-toggle" data-toggle="dropdown" href="profile.html#">
                                <i className="fa fa-wrench"></i>
                            </a>

                        </div>
                    </div>
                    <div className="ibox-content">
                        <div>
                            <div className="feed-activity-list">
                            {
                            list.map((item,index) =>{
                              return (
                                <div className="feed-element">
                                    <a href="profile.html#" className="pull-left">
                                        <img alt="image" className="img-circle" src={userImg} />
                                    </a>
                                    <div className="media-body ">
                                        <small className="pull-right">2小时前</small>
                                        <strong>{item.author}发表了</strong> {item.title}
                                        <br />
                                        <small className="text-muted">{item.date}</small>
                                        <div className="pull-right">
                                            <a className="btn btn-xs btn-white"><i className="fa fa-thumbs-up"></i> 赞 </a>
                                            <a className="btn btn-xs btn-white"><i className="fa fa-heart"></i> 收藏</a>
                                            <a className="btn btn-xs btn-primary"><i className="fa fa-pencil"></i> 评论</a>
                                        </div>
                                    </div>
                                </div>
                              );
                            })
                            }
                            </div>
                            <button className="btn btn-primary btn-block m"><i className="fa fa-arrow-down"></i> 显示更多</button>
                        </div>
                    </div>
                </div>
    );
  }
}


class AboutMe extends React.Component{
  render(){
    return(
    <div className="about_me">
      <LeftPart />
      <RightPart dispatch = { this.props.dispatch } list = {this.props.list.list}/>
    </div>
    );
  }
}


// 验证组件中的参数类型
AboutMe.propTypes = {
    dispatch: React.PropTypes.func.isRequired
}

// 获取state中的lists值
const getList = state => {
    return {
        list: state.list
    }
}

export default connect(getList)(AboutMe)
